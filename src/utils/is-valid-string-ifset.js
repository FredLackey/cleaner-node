const isSet = require('./is-set');
const isValidString = require('./is-valid-string');

const isValidStringIfSet = (value, isEmptyOkay) => {
  return !isSet(value) || isValidString(value, isEmptyOkay);
};

module.exports = isValidStringIfSet;
