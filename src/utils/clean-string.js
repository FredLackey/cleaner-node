const hasString         = require('./has-string');
const { isValidString } = require('./is-valid-string');
const { ALPHANUMERIC }  = require('../constants');

const EMPTY_OK = true;

const cleanString = (value, valid = ALPHANUMERIC, invalid = '', isCaseSensitive = false) => {
  if (!isValidString(value, EMPTY_OK)) { return undefined; }
  return value.split('').filter(ch => ((!valid || hasString(valid, ch, isCaseSensitive)) &&
    (!invalid || !hasString(invalid, ch, isCaseSensitive))
  )).join('');
};

module.exports = cleanString;
