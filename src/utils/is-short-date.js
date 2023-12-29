const isValidString = require('./is-valid-string');
const isDigits = require('./is-digits');

const EARLIEST_YEAR = 1900;

const isValidShortDate = (value, allowFuture = false, earliestYear = EARLIEST_YEAR) => {
  if (!isValidString(value)) {
    return false;
  }
  const parts = (value.includes('/') ? value.split('/') : value.split('-')).filter(isDigits);
  if (parts.length !== 3) {
    return false;
  }
  const [year, month, day] = parts;
  if (Number(year) < earliestYear) {
    return false;
  }
  if (!allowFuture && Number(year) > new Date().getFullYear()) {
    return false;
  }
  if (Number(month) < 1 || Number(month) > 12) {
    return false;
  }
  if (Number(day) < 1 || Number(day) > 31) {
    return false;
  }
  return true;
};

module.exports = isValidShortDate;
