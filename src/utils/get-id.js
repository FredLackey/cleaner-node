const { isValidString } = require('./is-valid-string');
const isObject          = require('./is-object');
const isNumber          = require('./is-number');
const isDefined         = require('./is-defined');
const copyObject        = require('./copy-object');

const KEYS = ['id', '_id'];

const getId = (itemOrId) => {

  if (isNumber(itemOrId) || isValidString(itemOrId)) {
    return itemOrId;
  }

  if (!isObject(itemOrId)) {
    return undefined;
  }

  const copy = copyObject(itemOrId);

  const key = KEYS.find(x => (
    x && (isNumber(copy[x]) || isValidString(copy[x]))
  ));

  return key
    ? copy[key]
    : undefined;
};

module.exports = getId;
