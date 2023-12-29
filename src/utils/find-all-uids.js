const isUidFormat = require('./is-uid-format');
const isValidArray = require('./is-valid-array');
const isObject = require('./is-object');
const isValidString = require('./is-valid-string');

const EMPTY_OK = true;

const findAll = (itemOrItems, cache) => {
  if (isValidArray(itemOrItems, EMPTY_OK)) {
    if (isValidArray(itemOrItems)) {
      for (let i = 0; i < itemOrItems.length; i += 1) {
        findAll(itemOrItems[i], cache);
      }
    }
    return;
  }
  if (!isObject(itemOrItems) || cache.items.includes(itemOrItems)) {
    return;
  }
  
  cache.items.push(itemOrItems);

  Object.keys(itemOrItems).filter(key => isUidFormat(itemOrItems[key])).map(key => itemOrItems[key]).forEach(uid => {
    if (!cache.uids.includes(uid)) {
      cache.uids.push(uid);
    }
  });
  
  const objects = Object.keys(itemOrItems).filter(key => isObject(itemOrItems[key]));
  objects.forEach(key => findAll(itemOrItems[key], cache));

  const arrays = Object.keys(itemOrItems).filter(key => isValidArray(itemOrItems[key]));
  arrays.forEach(key => findAll(itemOrItems[key], cache));

};

const findAllUids = itemOrItems => {
  const cache = {
    items: [],
    uids: []
  };
  findAll(itemOrItems, cache);
  return cache.uids;
};

module.exports = findAllUids;
