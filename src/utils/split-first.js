const isValidString = require('./is-valid-string');

const splitFirst = (str, separator) => {

  if (!isValidString(str, true) || str.length === 0) {
    throw new Error('Invalid string supplied to splitFirst()');
  }
  if (!isValidString(separator, true) || separator.length === 0) {
    throw new Error('Invalid separator supplied to splitFirst()');
  }

  const pos = str.indexOf(separator);
  if (pos === -1) {
    return [str];
  }

  const first = str.slice(0, pos);
  if (str.length === first.length | separator.length === 0) {
    return [first];
  }

  const rest = str.slice(pos + separator.length);
  return [first, rest];

};

module.exports = splitFirst;
