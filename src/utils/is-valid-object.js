const isObject = require('./is-object');

const isValidObject = (obj) => {
  if (!isObject(obj)) {
    return false;
  }

  return Object.keys(obj).length > 0;
};

module.exports = isValidObject;
