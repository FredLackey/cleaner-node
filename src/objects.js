const { isValid: isValidString } = require('./strings');
const { count } = require('./arrays');

const isValid = value => (typeof value === 'object' && !(value instanceof Array));
const isEmpty = value => {
  if (!isValid(value)) { return false; }
  return Object.keys(value).filter(key => {
    return (key && 
      key.trim().length > 0 &&
      (typeof value[key] !== 'undefined'));
  }).length === 0;
}

const getId = item => {
  if (typeof item === 'object' && item instanceof Array) { return undefined; }
  if (item && item.id) { return item.id; }
  const typeName = (typeof item);
  if (['number', 'string'].indexOf(typeName) >= 0) { return item; }
  return undefined;
}
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
}

const getUid = item => {
  if (item && item.uid) { return item.uid; }
  if (typeof item === 'string') { return item; }
  return undefined;
}
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
}

const findOne = (obj, key, cache) => {

  if (typeof obj !== 'object') { return undefined; }
  if (typeof key !== 'string' || key.trim().length === 0) { return undefined; }

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
}

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
  return copy
}
const toDtos = values => {
  return [].concat(values)
    .filter(v => (typeof v !== 'undefined'))
    .map(v => (toDto(v)));
}

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
  })
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

// ----- reduce
const reduce = obj => {
  if (typeof obj !== 'object') { return; }
  if (obj instanceof Array) { return; }
  if (obj instanceof Date) { return; }

  const keys = Object.keys(obj).filter(isValidString);

  // Child Objects
  keys.filter(key => (typeof obj[key] === 'object' && !(obj[key] instanceof Array) && !(obj[key] instanceof Date)))
    .forEach(key => {
      reduce(obj[key]);
    });    

  // Child Arrays
  keys.filter(key => (typeof obj[key] === 'object' && (obj[key] instanceof Array)))
    .forEach(key => {
      obj[key].forEach(o => {
        reduce(o);
      })
    });   

  // Empty Strings
  keys.filter(key => (typeof obj[key] === 'string' && obj[key].trim().length === 0))
    .forEach(key => {
      Reflect.deleteProperty(obj, key);
    });

  // Undefined
  keys.filter(key => (typeof obj[key] === 'undefined'))
    .forEach(key => {
      Reflect.deleteProperty(obj, key);
    });

  // Empty Arrays
  keys.filter(key => (typeof obj[key] === 'object' && (obj[key] instanceof Array) && obj[key].length === 0))
    .forEach(key => {
      Reflect.deleteProperty(obj, key);
    });    

  // Empty Objects
  keys.filter(key => (typeof obj[key] === 'object' && !(obj[key] instanceof Array) && !(obj[key] instanceof Date) && Object.keys(obj[key]).filter(isValidString).length === 0))
    .forEach(key => {
      Reflect.deleteProperty(obj, key);
    });
}

module.exports = {
  findOne,
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
  reduce
};
