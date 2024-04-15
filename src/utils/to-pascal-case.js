const isValidString = require('./is-valid-string');
const toCamelCase = require('./to-camel-case');

const toPascalCase = value => {

  if (!isValidString(value)) { return ''; }

  const camelCase = toCamelCase(value);
  return camelCase.length === 1 ? camelCase.toUpperCase() : camelCase[0].toUpperCase() + camelCase.slice(1);

};

module.exports = toPascalCase;
