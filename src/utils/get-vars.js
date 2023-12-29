const isNumber = require('./is-number');
const { isValidString } = require('./is-valid-string');
const { isBoolean } = require('./is-boolean');

const getVars = (proper = true, valid = true) => {
  const result = {};
  Object
    .keys(process.env)
    .filter(key => (key && (!proper || key === key.toUpperCase())))
    .filter(key => (key && (!valid || (
      isNumber(process.env[key]) || 
      isBoolean(process.env[key]) || 
      isValidString(process.env[key])
    ))))
    .sort()
    .forEach(key => {
      result[key] = process.env[key];
    });
  return result;
};

module.exports = getVars;
