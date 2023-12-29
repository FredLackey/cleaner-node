const isValidArray = require('./is-valid-array');
const isValidString = require('./is-valid-string');
const isNumber = require('./is-number');
const isDate = require('./is-date');
const isEqualDate = require('./is-equal-date');
const copyObject = require('./copy-object');
const isObject = require('./is-object');

const EMPTY_OK = true;

const findPosition = (value, sources) => {
  if (isDate(value)) {
    return sources.findIndex(source => isEqualDate(value, source));
  }
  return sources.indexOf(value);
};

const getValue = (curValue, sources, targets) => {
  const posInSource = findPosition(curValue, sources);
  if (posInSource === -1) {
    return curValue;
  }
  const newValue = targets[posInSource];
  const sameType = (
    (isValidString(curValue, EMPTY_OK) && isValidString(newValue, EMPTY_OK)) ||
    (isNumber(curValue) && isNumber(newValue)) ||
    (isDate(curValue) && isDate(newValue))
  );
  return sameType ? newValue : curValue;
};

const replace = (itemOrItems, sources, targets, cache) => {

  if (isValidArray(itemOrItems, EMPTY_OK)) {
    if (isValidArray(itemOrItems)) {
      itemOrItems.forEach(item => replace(item, cache));
    }
    return;
  }

  if (!isObject(itemOrItems) || cache.items.includes(itemOrItems)) {
    return;
  }

  cache.items.push(itemOrItems);

  Object.keys(itemOrItems).filter(key => (
    isValidString(itemOrItems[key], EMPTY_OK) ||
    isNumber(itemOrItems[key]) ||
    isDate(itemOrItems[key])
  )).forEach(key => {

    const curValue = itemOrItems[key];
    const newValue = getValue(curValue, sources, targets);

    if (curValue !== newValue) {
      itemOrItems[key] = newValue;
    }

  });
  

  const arrays = Object.keys(itemOrItems).filter(key => isValidArray(itemOrItems[key]));
  arrays.forEach(key => replace(itemOrItems[key], sources, targets, cache));

  const objects = Object.keys(itemOrItems).filter(key => isObject(itemOrItems[key]));
  objects.forEach(key => replace(itemOrItems[key], sources, targets, cache));

};

const replaceValues = (itemOrItems, sources, targets, clone) => {
  if (!isValidArray(sources)) {
    throw new Error('sources must be an array');
  }
  if (!isValidArray(targets)) {
    throw new Error('targets must be an array');
  }
  if (sources.length !== targets.length) {
    throw new Error('sources and targets must be the same length');
  }
  const value = clone ? copyObject(itemOrItems) : itemOrItems;
  const cache = {
    items: []
  };
  replace(value, sources, targets, cache);
  return value;
};

module.exports = replaceValues;
