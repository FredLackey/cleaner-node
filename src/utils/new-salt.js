const crypto = require('crypto');
const c = require('../constants');

const newSalt = (byteCount, slatOption = c.SALT_OPTION) => {
  return crypto.randomBytes(byteCount).toString(slatOption);
};

module.exports = newSalt;
