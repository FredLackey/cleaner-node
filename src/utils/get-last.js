const getArrayCount     = require('./get-array-count');
const { isValidString } = require('./is-valid-string');

const getLast = (value, trim = false) => {

  if (isValidString(value, true)) {
    if (trim) {
      value = value.trim();
    }
    return value.length > 0
      ? value[value.length - 1]
      : '';
  }

  return getArrayCount(value) > 0
    ? value[value.length - 1]
    : undefined;
};

module.exports = getLast;
