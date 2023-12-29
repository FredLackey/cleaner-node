const isShortDate = require('./is-short-date');

const fromShortDate = (value, allowFuture, earliestYear) => {
  if (!isShortDate(value)) {
    return null;
  }
  const parts = (value.includes('/') ? value.split('/') : value.split('-')).map(x => Number(x));
  const [year, month, day] = parts;
  return new Date(year, month - 1, day);
};

module.exports = fromShortDate;
