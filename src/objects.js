const { isValid: isValidString, toCamelCase } = require('./strings');
const { count } = require('./arrays');

const isValid = value => (typeof value === 'object' && value !== null && !(value instanceof Array));
const isEmpty = value => {
  if (!isValid(value)) { return false; }
  return Object.keys(value).filter(key => {
    return (key && 
      key.trim().length > 0 &&
      (typeof value[key] !== 'undefined'));
  }).length === 0;
};

const getId = item => {
  if (typeof item === 'object' && item instanceof Array) { return undefined; }
  if (item && item.id) { return item.id; }
  const typeName = (typeof item);
  if (['number', 'string'].indexOf(typeName) >= 0) { return item; }
  return undefined;
};
const getIds = items => {
  items = [].concat(items);
  const result = [];
  items.forEach(item => {
    const id = getId(item);
    if (typeof id !== 'undefined') {
      result.push(id);
    }
  });
  return result;
};

const getUid = item => {
  if (item && item.uid) { return item.uid; }
  if (typeof item === 'string') { return item; }
  return undefined;
};
const getUids = items => {
  items = [].concat(items);
  const result = [];
  items.forEach(item => {
    const id = getUid(item);
    if (typeof id !== 'undefined') {
      result.push(id);
    }
  });
  return result;
};

const likeKeys = (item, targetName, extended = false) => {
  if (!isValid(item)) { return undefined; }
  if (!isValidString(targetName)) { return undefined; }
  return Object.keys(item)
    .filter(isValidString)
    .filter(key => (extended 
        ? ((key.trim().toLowerCase() === targetName.trim().toLowerCase()) || 
          (toCamelCase(key.trim.toLowerCase()) === toCamelCase(targetName.trim().toLowerCase())))
        : (key.trim().toLowerCase() === targetName.trim().toLowerCase())
    ));
};
const likeKey = (item, targetName, extended = false) => {
  const keys = [].concat(likeKeys(item, targetName, extended)).filter(isValidString);
  return keys.length === 1 ? keys[0] : undefined;
};

const findOne = (obj, key, cache) => {

  if (typeof obj !== 'object') { return undefined; }
  if (!isValidString(key)) { return undefined; }

  cache = cache || { items: [] };
  if (cache.items.indexOf(obj) >= 0) { return undefined; }

  if (obj instanceof Array) {
    for (let i = 0; i < obj.length; i += 1) {
      const result = findOne(obj[i], key, cache);
      if (result) { return result; }
    }
    return undefined;
  }

  if (obj[key]) { return obj[key]; }

  cache.items.push(obj);

  const keys = Object.keys(obj);
  for (let k = 0; k < keys.length; k += 1) {
    const nextKey = keys[k];
    const nextObj = obj[nextKey];
    const match = findOne(nextObj, key, cache);
    if (match) { return match; }
  }

  return undefined;
};

const isDefined = value => (typeof value !== 'undefined');
const notDefined = value => (typeof value === 'undefined');

const toDto = value => {
  if (typeof value === 'undefined') { return value; }
  if (value instanceof Array) { return value; }
  const copy = JSON.parse(JSON.stringify(value));
  const all = Object.keys(copy).filter(isValidString);
  // eslint-disable-next-line no-eq-null
  const toRemove = all.filter(k => (copy[k] == null));
  if (toRemove.includes('id') && !toRemove.includes('uid') && Object.keys(copy).includes('uid')) {
    toRemove('id');
  }
  toRemove.forEach(key => {
    Reflect.deleteProperty(copy, key);
  });
  return copy;
};
const toDtos = values => {
  return [].concat(values)
    .filter(v => (typeof v !== 'undefined'))
    .map(v => (toDto(v)));
};

// --- getValue ... from singular property

function getValue(item, keyOrPath) {
  const keys = keyOrPath.split('.');
  const used = [];
  while (keys.length > 0) {
    const key = keys.shift();
    used.push(key);
    if (!isValid(item[key])) {
      throw new Error(`path ${used.join('.')} is not an object`);
    }
    item = item[key];
  }
  return item[keys[0]];
}
function getValues(items, keyOrPath, allowDuplicates) {
  const result = [];
  [].concat(items).filter(isValid).forEach(item => {
    const value = getValue(item, keyOrPath);
    if (allowDuplicates || !result.includes(value)) {
      result.push(value);
    }
  });
  return result;
}

// --- setValue

function setValue(obj = {}, path, value) {
  const keys = path.split('.');
  const used = [];
  while (keys.length > 1) {
    const key = keys.shift();
    used.push(key);
    if (!(key in obj)) {
      obj[key] = {};
    } else if (!isValid(obj[key])) {
      throw new Error(`path ${used.join('.')} is set to a primative value`);
    }
    obj = obj[key];
  }
  obj[keys[0]] = value;
  return obj;
}

// ----- prune
const _prune = obj => {
  if (typeof obj !== 'object' || obj === null) { return; }
  if (obj instanceof Array) { 
    for (let i = 0; i < obj.length; i += 1) {
      _prune(obj[i]);
    }
    return;
  }
  if (!isValid(obj)) { return; }

  // Child Objects
  Object.keys(obj).filter(isValidString)
    .filter(key => (typeof obj[key] === 'object'))
    .forEach(key => {
      _prune(obj[key]);
    });

  const keys = Object.keys(obj).filter(isValidString);

  // Empty Strings
  keys.filter(key => (typeof (obj[key]) === 'string' && obj[key].trim().length === 0))
    .forEach(key => {
      Reflect.deleteProperty(obj, key);
    });

  // Empty arrays
  keys.filter(key => (typeof obj[key] === 'object' && (obj[key] instanceof Array) && obj[key].length === 0))
    .forEach(key => {
      Reflect.deleteProperty(obj, key);
    });

  // Undefined
  keys.filter(key => (typeof obj[key] === 'undefined'))
    .forEach(key => {
      Reflect.deleteProperty(obj, key);
    });

  // Empty Objects
  keys.filter(key => (isValid(obj[key]) && !(obj[key] instanceof Date) && Object.keys(obj[key]).filter(isValidString).length === 0))
    .forEach(key => {
      Reflect.deleteProperty(obj, key);
    });
};
const prune = obj => {
  const result = { obj };
  _prune(result);
  return result.obj;
};

const _toPrintable = (value, valuePath, results) => {
  if (typeof value === 'undefined') {
    results.items.push({
      key: valuePath,
      value: undefined
    });
  } else if (value === null) {
    results.items.push({
      key: valuePath,
      value: null
    });
  } else if (['string', 'number', 'boolean'].includes(typeof value)) {
    results.items.push({
      key: valuePath,
      value
    });
  } else if (typeof value === 'object' && value instanceof Array) {
    for (let i = 0; i < value.length; i += 1) {
      if (results.cache.includes(value[i])) { return; }
      results.cache.push(value[i]);
      _toPrintable(value[i], `${valuePath}[${i}]`, results);
    }
  } else if (isValid(value)) {
    if (results.cache.includes(value)) { return; }
    results.cache.push(value);
    const keys = Object.keys(value).filter(isValidString);
    keys.sort();
    keys.forEach(key => {
      const keyPath = [].concat(valuePath.split('.'), key).filter(isValidString).join('.');
      _toPrintable(value[key], keyPath, results);
    });
  }
};

const toPrintable = (value) => {
  if (!isValid(value)) { throw new Error('Value passed to toPrintable is not an object.'); }
  const results = {
    items: [],
    cache: []
  };
  _toPrintable(value, '', results);
  return results.items;
};
const print = value => {
  if (!isValid(value)) { throw new Error('Value passed to print is not an object.'); }
  toPrintable(value).filter(isValid).forEach(item => {
    console.log(`${item.key} : ${item.value}`);
  });
};

// ----- remove
const _remove = (itemOrItems, keyOrKeys, isCaseSensitive, recursive, cache) => {

  const keys = [].concat(keyOrKeys).filter(isValidString).map(key => (isCaseSensitive ? key.trim() : key.toLowerCase().trim()));

  const items = [].concat(itemOrItems).filter(isValid).filter(item => (item && !cache.items.includes(item)));
  items.forEach(item => {
    cache.items.push(item);
    Object.keys(item)
      .filter(isValidString)
      .filter(key => (keys.includes(isCaseSensitive ? key : key.toLowerCase())))
      .forEach(key => {
        Reflect.deleteProperty(item, key);
      });
  });

  if (!recursive) { return; }

  items.forEach(item => {

    Object.keys(item)
      .filter(isValidString)
      .filter(key => (typeof item[key] === 'object'))
      .forEach(key => {
        _remove(item[key], keyOrKeys, isCaseSensitive, recursive, cache);
      });

  });
  
};
const remove = (itemOrItems, keyOrKeys, isCaseSensitive = false, recursive = true) => {
  const cache = { items: [] };
  _remove(itemOrItems, keyOrKeys, isCaseSensitive, recursive, cache);
};

// safe stringify for circular (MDN official answer)
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};
const circular = (item) => {
  return JSON.stringify(item, getCircularReplacer());
};
const copy = item => {
  return JSON.parse(circular(item));
};

const getObjects = item => {
  if (!isValid(item)) { return []; }
  return Object.keys(item).filter(x => (isValid(item[x]))).map(x => (item[x]));
};
const getArrays = item => {
  if (!isValid(item)) { return []; }
  return Object.keys(item).filter(x => (
    typeof item === 'object' && item instanceof Array
  )).map(x => (item[x]));
};

module.exports = {
  findOne,

  likeKey,
  likeKeys,

  getId,
  getIds,
  getUid,
  getUids,
  getValue,
  getValues,
  isDefined,
  isEmpty,
  isValid,
  notDefined,
  setValue,
  toDto,
  toDtos,
  toPrintable,
  print,
  prune,

  remove,

  circular,
  stringify: circular,
  copy,

  getObjects,
  getArrays
};
