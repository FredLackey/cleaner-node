const isValidString = require('./is-valid-string')
const isNumber = require('./is-number')
const isBoolean = require('./is-boolean')

const toColumn = values => {

  const structure = [].concat(values).filter(x => (isNumber(x) || isBoolean(x) || isValidString(x))).map(value => {
    if (isValidString(value, true)) {
      return value;
    }
    if (isNumber(value)) {
      return `${value}`;
    }
    if (isBoolean(value)) {
      return value ? 'true' : 'false';
    }
  }).map(value => ({
    value,
    length: value.length
  }));

  const maxLength = structure.reduce((max, { length }) => Math.max(max, length), 0);

  return structure.map(column => {
    return column.value.padEnd(maxLength, ' ');
  });

};

module.exports = toColumn;
