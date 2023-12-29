const isNumber = require('./is-number');
const isDigits = require('./is-digits');

const fromEpoch = (value) => {
  if (!isNumber(value) || !isDigits(`${value}`)) {
    return null;
  }
  const ms = Number(value) * 1000;
  const date = new Date(ms);
  return date;
};

module.exports = fromEpoch;
