const cleanString = require('./clean-string');
const { DIGITS }  = require('../constants');

const cleanDigits = value => {
  return cleanString(value, DIGITS);
};

module.exports = cleanDigits;
