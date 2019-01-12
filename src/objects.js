const strings = require('./strings');

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
  items.forEach(function (item) {
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
  items.forEach(function (item) {
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
  const all = Object.keys(copy).filter(strings.isValid);
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

module.exports = {
  findOne,
  getId,
  getIds,
  getUid,
  getUids,
  isDefined,
  notDefined,
  toDto,
  toDtos
};
