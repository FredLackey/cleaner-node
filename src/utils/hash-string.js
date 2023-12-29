const crypto = require('crypto');
const c = require('../constants');

const isValidString = require('./is-valid-string');
const trimToUndefined = require('./trim-to-undefined');

const hashString = value => {
  if (!isValidString(value, true)) { return undefined; }
  value = trimToUndefined(value);
  return crypto.createHash(c.STRING_HMAC).update(value).digest(c.DIGEST_OPTION);
};

module.exports = hashString;
