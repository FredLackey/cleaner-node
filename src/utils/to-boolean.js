const { isValidString } = require('./is-valid-string');
const isNumber          = require('./is-number');

const toBoolean = (value, defaultValue) => {
  if (value === true || value === false) { 
    return value;
  }
  if (isValidString(value)) {
    if (['1', 'TRUE', 'YES', 'Y'].includes(value.toUpperCase())) {
      return true;
    }
    if (['0', 'FALSE', 'NO', 'N'].includes(value.toUpperCase())) {
      return false;
    }
    return defaultValue;
  }
  if (isNumber(value)) {
    if (Number(value) === 1) {
      return true;
    }
    if (Number(value) === 0) {
      return false;
    }
    return defaultValue;
  }
};

module.exports = toBoolean;
