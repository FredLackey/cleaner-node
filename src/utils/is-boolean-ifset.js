const isSet = require('./is-set');
const isBoolean = require('./is-boolean');

const isBooleanIfSet = value => {
  return !isSet(value) || isBoolean(value);
};

module.exports = isBooleanIfSet;
