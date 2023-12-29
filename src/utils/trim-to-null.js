const trimString = require('./trim-string');
const { isValidString } = require('./is-valid-string');

const EMPTY_OK = false;

const trimToNull = value => {
  value = trimString(value);
  return isValidString(value, EMPTY_OK) ? value : null;
};
module.exports = trimToNull;
