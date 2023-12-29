const isValidArray = require('./is-valid-array');
const isObject         = require('./is-object');
const stringify        = require('./stringify');

const uniqueObjects = (values, strict = true) => {
  if (!isValidArray(values)) { return values; }
  const cache = [];
  const results = [];
  [].concat(values).filter(isObject).forEach(x => {

    const cacheValue = strict ? x : stringify(x);
    if (cache.includes(cacheValue)) {
      return;
    }
    cache.push(cacheValue);

    results.push(x);
  });
  return results;
};

module.exports = uniqueObjects;
