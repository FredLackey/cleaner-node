const isObject = require('./is-object');
const { isValidArray } = require('./is-valid-array');
const writeFile = require('./write-file');
const stringify = require('./stringify');

const saveJson = (data, filePath) => {
  return (isObject(data) || isValidArray(data, true)) 
    && writeFile(filePath, stringify(data));
};

module.exports = saveJson;
