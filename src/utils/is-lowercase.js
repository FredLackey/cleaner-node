const isValidString = require('./is-valid-string');

const isLowerCase = value => {
  return isValidString(value, false) && value === value.toLowerCase();
};

module.exports = isLowerCase;
