const isFile        = require('./is-file');
const isValidString = require('./is-valid-string');
const isValidArray  = require('./is-valid-array');
const readLines     = require('./read-lines');
const removeSuffix  = require('./remove-suffix');
const isDefined     = require('./is-defined');
const isObject      = require('./is-object');

const KNOWN_ROOTS = [
  'provider',
  'terraform',
  'resource'
];
const TEMP_KEYS = [
  '_hashes',
  '_parent',
  '_line',
  '_parts'
];
const OPTIONAL_KEYS = [
  '_key',
  '_index'
];

const getLines = async (filePath) => {
  if (!isFile(filePath) || !filePath.endsWith('.tf')) {
    return [];
  }
  const rawLines = await readLines(filePath);
  if (!isValidArray(rawLines)) {
    return [];
  }

  return rawLines
    .filter(x => (x && isValidString(x)))
    .map(x => x.trim())
    .filter(x => (x && isValidString(x)));
};
const deQuote = value => {
  if (!isValidString(value)) {
    return value;
  }
  if (value === '""') {
    return '';
  }
  if (!value.startsWith('"') || !value.endsWith('"')) {
    return value;
  }

  value = value.substring(1);
  value = value.substring(0, value.length - 1);

  return value;
};

const cleanNode = (node, cache) => {

  if (cache.items.includes(node)) {
    return;
  }
  cache.items.push(node);

  // Clean temporary keys
  TEMP_KEYS.filter(x => isDefined(node[x])).forEach(key => {
    Reflect.deleteProperty(node, key);
  });
  OPTIONAL_KEYS.filter(x => node[x] === null).forEach(key => {
    Reflect.deleteProperty(node, key);
  });

  // Object properties
  Object.keys(node).filter(x => isObject(node[x])).forEach(objKey => {
    cleanNode(node[objKey], cache);
  });

  // Objects within arrays
  Object.keys(node).filter(x => (isValidArray(node[x]))).forEach(arrayKey => {
    node[arrayKey].filter(obj => (isObject(obj))).forEach(obj => cleanNode(obj, cache));
  });

  // Child objects
  node.children.forEach(child => cleanNode(child, cache));

  if (node.children.length === 0) {
    Reflect.deleteProperty(node, 'children');
  }
};
const cleanDoc = doc => {
  const cache = {
    items: []
  };
  cleanNode(doc, cache);
};

const loadHcl = async (filePath) => {

  const lines = await getLines(filePath);

  const doc = {
    _hashes : [],
    children: []
  };
  const stack = [];

  for (let i = 0; i < lines.length; i += 1) {

    let line = lines[i];

    const curNode = stack.length === 0 ? doc : stack[stack.length - 1];

    // Remove odd tag / provider syntax
    if (line.endsWith(' = {')) {
      line = line.replace(' = {', ' {');
    }

    // End the current object
    if (line.startsWith('}')) {

      if (stack.length === 0 && curNode === doc) {
        continue;   // Normal end of file.
      }

      if (stack.length > 0) {
        stack.pop();
        continue;
      }

      throw new Error('No node to end:', line);
    }

    // Set property of current object
    if (line.includes('=')) {

      const splitPos = line.indexOf('=');
      const key      = line.substring(0, splitPos).trim();
      const value    = deQuote(line.substring(splitPos + 1).trim());

      if (isDefined(curNode[key])) {
        console.log('Duplicate key:', key);
        console.log('Line:', line);
        console.log('Position:', i);
        console.log('---');
        throw new Error('Duplicate key:', key);
      }

      curNode[key] = value;
      continue;
    }

    // NEW OBJECT ---

    const parts  = removeSuffix(line, '{').split(' ').filter(x => (isValidString(x))).map(x => deQuote(x));
    const isRoot = curNode === doc;
    const hash   = parts.join(':').toUpperCase();

    if (parts.length === 0) {
      throw new Error('Empty line:', line);
    }
    if (parts.length > 3) {
      throw new Error('Too many parts:', parts);
    }
    if (isRoot && !KNOWN_ROOTS.includes(parts[0])) {
      throw new Error('Unknown root:', parts[0]);
    }

    const isProperty = parts.length === 1;
    const isKeyed    = parts.length === 2;
    const isIndexed  = parts.length === 3;
    const toArray    = !isRoot && !isKeyed;

    if (!toArray) {
      if (curNode._hashes.includes(hash)) {
        throw new Error('Duplicate object:', parts);
      }
  
      curNode._hashes.push(hash);  
    }

    const newItem = {
      _type    : parts[0],
      _key     : (isKeyed || isIndexed) ? parts[1]  : null,
      _index   : isIndexed ? parts[2] : null,
      _parent  : curNode,
      _hashes : [],
      _line   : line,
      _parts  : parts,
      children: [],
    };
    stack.push(newItem);

    if (toArray) {
      curNode[newItem._type] = curNode[newItem._type] || [];
      curNode[newItem._type].push(newItem);
      continue;
    }

    if (isProperty) {
      curNode[newItem._type] = newItem;
      continue;
    }

    curNode.children.push(newItem); 
  }
  
  cleanDoc(doc);
  return doc;
};

module.exports = loadHcl;
