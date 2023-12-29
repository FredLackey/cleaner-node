const { isValidArray }  = require('./is-valid-array');
const isNumber          = require('./is-number');
const isObject          = require('./is-object');
const { isValidString } = require('./is-valid-string');
const uniqueNumbers     = require('./unique-numbers');
const uniqueObjects     = require('./unique-objects');
const uniqueStrings     = require('./unique-strings');

const EMPTY_OKAY = true;

const unique = (values, params = {}) => {

  if (!isValidArray(values)) { return values; }

  const numbers = values.filter(isNumber);
  if (numbers.length > 0) {
    return uniqueNumbers(values);
  }

  const objects = values.filter(isObject);
  if (objects.length > 0) {
    return uniqueObjects(values, params.strict);
  }

  const strings = values.filter(x => (isValidString(x, EMPTY_OKAY)));
  if (strings.length > 0) {
    return uniqueStrings(values, params.isCaseSensitive, params.trim);
  }

  return null;
};

module.exports = unique;
