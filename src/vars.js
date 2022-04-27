const { isValidBoolean }  = require('./booleans');
const { isValidString }   = require('./strings');
const { isNumber  }       = require('./numbers');

const getAll = (proper = true, valid = true) => {
  const result = {};
  Object
    .keys(process.env)
    .filter(key => (key && (!proper || key === key.toUpperCase())))
    .filter(key => (key && (!valid || (
      isNumber(process.env[key]) || 
      isValidBoolean(process.env[key]) || 
      isValidString(process.env[key])
    ))))
    .sort()
    .forEach(key => {
      result[key] = process.env[key];
    });
  return result;
};

module.exports = {
  getAll
};
