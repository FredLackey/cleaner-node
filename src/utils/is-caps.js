const isValidString = require('./is-valid-string');

const isCaps = value => {
  return isValidString(value, false) && value === value.toUpperCase();
};

module.exports = isCaps;
