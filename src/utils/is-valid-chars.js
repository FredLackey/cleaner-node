const c                 = require('../constants');
const { isValidString } = require('./is-valid-string');
const cleanString       = require('./clean-string');

const EMPTY_OK = false;

const isValidChars = (value, valid = c.ALPHANUMERIC, invalid = '', isCaseSensitive = false) => {
  return isValidString(value, EMPTY_OK) && (value === cleanString(value, valid, invalid, isCaseSensitive));
};

module.exports = isValidChars;
