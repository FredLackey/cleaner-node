const isDate = require('./is-date');

const isEqualDate = (a, b) => {
  return isDate(a) && isDate(b) && a.getTime() === b.getTime();
};

module.exports = isEqualDate;
