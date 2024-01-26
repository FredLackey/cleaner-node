const isDate = require('./is-date');

const isSameDate = (date1, date2) => {
  if (!isDate(date1) || !isDate(date2)) {
    return false;
  }
  return date1.getTime() === date2.getTime();
};

module.exports = isSameDate;
