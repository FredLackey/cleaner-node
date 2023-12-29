const path = require('path');
const isValidString = require('./is-valid-string');

const getBase = value => {
  try {
    return path.basename(value);
  } catch (ex) {
    return undefined;
  }
};

const isValidPath = (value) => {
  return isValidString(getBase(value));
};

module.exports = isValidPath;
