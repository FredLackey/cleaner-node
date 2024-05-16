const isValidString = require('./is-valid-string');
const hashString = require('./hash-string');
const isNumber = require('./is-number');
const isBoolean = require('./is-boolean');

const ALLOW_EMPTY = true;

const hashLines = (lines, trim = true) => {

  const values = [].concat(lines)
    .filter(x => (isValidString(x, ALLOW_EMPTY) || isNumber(x) || isBoolean(x)))
    .map(x => {
      return (isNumber(x) || isBoolean(x)) ? `${x}` : x;
    })
    .map(x => (trim ? x.trim() : x));

  if (values.length === 0) {
    return '';
  }

  const value = values.join('');
  if (!isValidString(value)) {
    return '';
  }

  return hashString(value);

};

module.exports = hashLines;
