const cleanString = require('./clean-string');
const { ALPHANUMERIC }  = require('../constants');

const cleanAlphanumeric = value => {
  return cleanString(value, ALPHANUMERIC);
};

module.exports = cleanAlphanumeric;
