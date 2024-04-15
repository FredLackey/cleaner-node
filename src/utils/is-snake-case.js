const isValidString = require('./is-valid-string');
const toSnakeCase = require('./to-snake-case');

const isSnakeCase = value => {
  return isValidString(value) && value === toSnakeCase(value);
};

module.exports = isSnakeCase;
