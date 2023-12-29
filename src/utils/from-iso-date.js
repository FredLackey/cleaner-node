const isIsoDate = require('./is-iso-date');

const fromIsoDate = (value) => {
  if (!isIsoDate(value)) { return null; }
  return new Date(Date.parse(value));
};

module.exports = fromIsoDate;
