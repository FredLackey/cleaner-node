const isAlphanumeric = require('./is-alphanumeric');

const isUidFormat = value => {
  return isAlphanumeric(value) && value.length === 32;
};

module.exports = isUidFormat;
