const parse = require('./parse');
const isObject = require('../is-object');

const MAX_YEAR = (new Date()).getFullYear();

const isBlockDate = (value, maxYear = MAX_YEAR) => {
  const item = parse(value, maxYear);
  return isObject(item);
};

module.exports = isBlockDate;
