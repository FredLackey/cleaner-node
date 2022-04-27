const { isValidBoolean }  = require('./booleans');
const { isValidString }   = require('./strings');
const { isNumber  }       = require('./numbers');

module.exports.getAll = (proper = true, valid = true) => {
  const vars = {};
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
      vars[key] = process.env[key];
    });
};
