
const isDeleted        = require('./is-deleted');
const isObject         = require('./is-object');
const isValidArray = require('./is-valid-array');

const EMPTY_OK = true;

const processItem = (value, fn, cache, deletedValue) => {

  if (!isValidArray(value, EMPTY_OK) && !isObject(value)) {
    return value;
  }

  if (isValidArray(value, EMPTY_OK)) {
    value = value.filter(x => (x && !isDeleted(x, fn)));
    for (let i = 0; i < value.length; i += 1) {
      value[i] = processItem(value[i], fn, cache, deletedValue);
    }
    return value;
  }

  if (isDeleted(value, fn)) {
    return deletedValue;
  }

  if (cache.items.includes(value)) {
    return value;
  }

  cache.items.push(value);

  Object.keys(value).forEach(key => {
    value[key] = processItem(value[key], fn, cache, deletedValue);
  });

  return value; 
};

const removeDeleted = (value, fn, deletedValue = null) => {

  const cache = {
    items: []
  };

  return processItem(value, fn, cache, deletedValue);
};

module.exports = removeDeleted;
