const isDate   = require('./is-date');
const isNumber = require('./is-number');

const addDays = (value, quantity) => {
  return (isDate(value) && isNumber(quantity))
    ? new Date(value.getTime() + quantity * 86400000)
    : undefined;
};

module.exports = addDays;
