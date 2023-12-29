const { isValidArray } = require('./is-valid-array');
const isNumber         = require('./is-number');

const uniqueNumbers = values => {
  if (!isValidArray(values)) { return values; }
  const cache = [];
  const results = [];
  [].concat(values).filter(isNumber).forEach(x => {

    if (cache.includes(Number(x))) {
      return;
    }
    cache.push(Number(x));

    results.push(x);
  });
  return results;
};

module.exports = uniqueNumbers;
