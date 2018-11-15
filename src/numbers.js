const constants = require('./constants');

const DIGITS = constants.strings.DIGITS;

const toDigits = value => {
  if (typeof value === 'number') {
    return value.toString().split('').filter(x => DIGITS.indexOf(x) >= 0);
  } else if (typeof value === 'string') {
    return value.split('').filter(x => DIGITS.indexOf(x) >= 0);
  } else {
    return null;
  }
}

const unique = values => {
  const results = [];
  [].concat(values).filter(x => (!isNaN(x))).forEach(x => {
    if (results.indexOf(Number(x)) < 0) {
      results.push(Number(x));
    }
  })
  return results;
}

module.exports = {
  toDigits,
  unique
}
