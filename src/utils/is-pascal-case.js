const isValidString = require('./is-valid-string');
const toPascalCase = require('./to-pascal-case');

const isPascalCase = value => {
  return isValidString(value) && value === toPascalCase(value);
};

module.exports = isPascalCase;
