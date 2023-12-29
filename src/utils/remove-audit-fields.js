const copyObject = require('./copy-object');
const isObject = require('./is-object');
const isValidArray = require('./is-valid-array');
const { AUDIT_FIELDS } = require('../constants');

const EMPTY_OK = true;

const remove = (itemOrItems, cache) => {

  if (isValidArray(itemOrItems, EMPTY_OK)) {
    if (isValidArray(itemOrItems)) {
      itemOrItems.forEach(item => remove(item, cache));
    }
    return;
  }

  if (!isObject(itemOrItems) || cache.items.includes(itemOrItems)) {
    return;
  }

  cache.items.push(itemOrItems);

  const keys = Object.keys(itemOrItems).filter(key => AUDIT_FIELDS.includes(key));
  keys.forEach(key => Reflect.deleteProperty(itemOrItems, key));

  const arrays = Object.keys(itemOrItems).filter(key => isValidArray(itemOrItems[key]));
  arrays.forEach(key => remove(itemOrItems[key], cache));

  const objects = Object.keys(itemOrItems).filter(key => isObject(itemOrItems[key]));
  objects.forEach(key => remove(itemOrItems[key], cache));

};

const removeAuditFields = (itemOrItems, makeCopy = false) => {
  const cache = {
    items: []
  };
  const value = makeCopy ? copyObject(itemOrItems) : itemOrItems;
  const result = remove(value, cache);
  return result;
};

module.exports = removeAuditFields;
