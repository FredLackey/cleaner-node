const getEmails = require('./get-emails');
const getSingle = require('./get-single');

const getEmail = value => {
  const items = getEmails(value);
  return getSingle(items);
};

module.exports = getEmail;
