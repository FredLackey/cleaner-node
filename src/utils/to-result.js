const { isValidArray } = require('./is-valid-array');
const getFirst = require('./get-first');

const EMPTY_OK = true;

const toResult = (result, sample) => {
  if (isValidArray(sample, EMPTY_OK) === isValidArray(result, EMPTY_OK)) {
    return result;
  }
  return isValidArray(sample, EMPTY_OK)
    ? [result]
    : getFirst(result);
};

module.exports = toResult;
