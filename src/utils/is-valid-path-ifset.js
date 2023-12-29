const isSet = require('./is-set');
const isValidPath = require('./is-valid-path');

const isValidPathIfSet = (value) => {
  return !isSet(value) || isValidPath(value);
};

module.exports = isValidPathIfSet;
