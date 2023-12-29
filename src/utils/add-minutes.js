const isDate   = require('./is-date');
const isNumber = require('./is-number');

const addMinutes = (value, quantity) => {
  return (isDate(value) && isNumber(quantity))
    ? new Date(value.getTime() + quantity * 60000)
    : undefined;
};

module.exports = addMinutes;
