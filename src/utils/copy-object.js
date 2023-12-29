const stringify = require('./stringify');

const copyObject = item => {
  return JSON.parse(stringify(item));
};

module.exports = copyObject;
