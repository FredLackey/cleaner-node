const isValidString = require('./is-valid-string');
const isNumber = require('./is-number');
const isBoolean = require('./is-boolean');

const getVars = () => {

  if (!process || !process.env) {
    return {};
  }

  const result = {};

  Object.keys(process.env).filter(x => (x && x === x.toUpperCase() && 
    (isValidString(process.env[x]) || isNumber(process.env[x]) || isBoolean(process.env[x]))  
  )).forEach(x => {
    result[x] = process.env[x];
  });

  return result;

};

module.exports = {
  getVars
};
