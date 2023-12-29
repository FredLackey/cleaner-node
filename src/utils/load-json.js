const readFile = require('./read-file');
const isObject = require('./is-object');
const isValidArray = require('./is-valid-array');
const parseJson = require('./parse-json');

const loadJson = (filePath) => {

  const data = readFile(filePath);
  const obj  = parseJson(data);
  return (isObject(obj) || isValidArray(obj, true)) ? obj : null;

};

module.exports = loadJson;
