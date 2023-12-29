const isValidString = require('./is-valid-string');
const getEmail = require('./get-email');

const isEmail = value => {
  const email = getEmail(value);
  return isValidString(email) && value === email;
};

module.exports = isEmail;
