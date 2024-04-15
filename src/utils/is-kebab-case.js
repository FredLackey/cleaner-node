const isValidString = require('./is-valid-string');
const toKebabCase = require('./to-kebab-case');

const isKebabCase = value => {
  return isValidString(value) && value === toKebabCase(value);
};

module.exports = isKebabCase;
