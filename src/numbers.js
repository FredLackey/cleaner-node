const constants = require('./constants');
const DIGITS = constants.strings.DIGITS;

const toDigits = (value) => {
  if (typeof value === 'number') {
    return value.toString().split('').filter(x => DIGITS.indexOf(x) >= 0);
  } else if (typeof value === 'string') {
    return value.split('').filter(x => DIGITS.indexOf(x) >= 0);
  } else {
    return null;
  }
};

module.exports = {
  toDigits: toDigits
};
