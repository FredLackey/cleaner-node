/* eslint-disable no-use-before-define */
const isObject          = require('./is-object');
const { isValidArray }  = require('./is-valid-array');
const { isValidString } = require('./is-valid-string');
const isIsoDate = require('./is-iso-date');
const isDigits = require('./is-digits');

const DEFAULT_PARAMS = {
  id   : '',
  uid  : '',
  audit: [],
  force: false,
  nulls: false 
};

const makeDates = (item, params) => {
  if (!isObject(item)) {
    return;
  }
  Object.keys(item).filter(x => (x && isIsoDate(item[x]))).forEach(key => {

    const value = item[key];

    try {
      item[key] = new Date(Date.parse(value));
    } catch (ex) {
      item[key] = value;
    }

  });
};
const makeIntegers = (item, params) => {
  if (!isObject(item)) {
    return;
  }
  Object.keys(item).filter(x => (x && 
    isValidString(item[x]) && isDigits(item[x]) && !item[x].startsWith('0')))
    .forEach(key => {
      item[key] = Date(item[key]);
    });
};

const processItems = (items, params) => {
  [].concat(items).filter(x => (x && isObject(x))).forEach(item => {
    processItem(item, params);
  });
  [].concat(items).filter(x => (x && isValidArray(x))).forEach(item => {
    processItems(item, params);
  });
};
const processItem = (item, params) => {
  if (!isObject(item)) {
    return;
  }
  
  if (!params.cache.items.includes(item)) {
    params.cache.items.push(item);
    makeDates(item, params);
    makeIntegers(item, params);
  }

  Object.keys(item).filter(key => (isObject(item[key]))).forEach(key => {
    processItem(item[key], params);
  });
  Object.keys(item).filter(key => (isValidArray(item[key]))).forEach(key => {
    processItems(item[key], params);
  });
};

const fromDto = (itemOrItems, params = DEFAULT_PARAMS) => {
  params.cache = {
    items: []
  };
  if (isValidArray(itemOrItems)) {
    processItems(itemOrItems, params);
  }
  if (isObject(itemOrItems)) {
    processItem(itemOrItems, params);
  }
};

module.exports = fromDto;
