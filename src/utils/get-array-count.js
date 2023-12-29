const isValidArray = require('./is-valid-array');

const EMPTY_OK = true;

const getArrayCount = value => {
  return isValidArray(value, EMPTY_OK)
    ? value.length
    : -1;
};

module.exports = getArrayCount;
