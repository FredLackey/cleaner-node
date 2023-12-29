const isDefined = require('./is-defined');

const initArray = (value) => {
  return [].concat(value).filter(isDefined);
};

module.exports = initArray;
