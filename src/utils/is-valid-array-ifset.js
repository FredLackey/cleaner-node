const isSet = require('./is-set');
const isValidArray = require('./is-valid-array');

const isValidArrayIfSet = (value, isEmptyOkay) => {
  return !isSet(value) || isValidArray(value, isEmptyOkay);
};

module.exports = isValidArrayIfSet;
