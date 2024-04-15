const isValidString = require('./is-valid-string');
const toCamelCase = require('./to-camel-case');

const isCamelCase = value => {
  return isValidString(value) && value === toCamelCase(value);
};

module.exports = isCamelCase;
