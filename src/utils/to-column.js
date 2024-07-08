const isValidString = require('./is-valid-string');
const isNumber = require('./is-number');
const isBoolean = require('./is-boolean');

const toColumn = values => {

  const structure = [].concat(values).filter(x => (isNumber(x) || isBoolean(x) || isValidString(x))).map(value => {

    return isValidString(value, true)
      ? value
      : isNumber(value)
        ? `${value}`
        : isBoolean(value)
          ? value
            ? 'true'
            : 'false'
          : undefined;
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
