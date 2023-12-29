const trimString = require('./trim-string');
const { isValidString } = require('./is-valid-string');

const EMPTY_OK = false;

const trimToUndefined = value => {
  value = trimString(value);
  return isValidString(value, EMPTY_OK) ? value : undefined;
};
module.exports = trimToUndefined;
