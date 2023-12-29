const isObject = require('./is-object');
const isFunction = require('./is-function');

const isDeleted = (item, fn) => {
  if (!isFunction) { throw new Error('isDeleted fn is not a function!'); }
  if (!isObject) { return false; }
  return fn(item);
};

module.exports = isDeleted;
