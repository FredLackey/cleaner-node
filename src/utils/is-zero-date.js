const isDate = require('./is-date');
const isIsoDate = require('./is-iso-date');
const { ZERO_DATE } = require('../constants');

const isZeroDate = value => {
  const trueValue = isIsoDate(value) ? new Date(value) : value;
  return isDate(trueValue) && trueValue.getTime() === ZERO_DATE.getTime();
};

module.exports = isZeroDate;
