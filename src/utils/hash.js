const crypto = require('crypto');
const c = require('../constants');

const hash = (value, salt, hmacOption = c.HMAC_OPTION, digestOption = c.DIGEST_OPTION) => {
  const hmac = crypto.createHmac(hmacOption, salt);
  return hmac.update(value).digest(digestOption);
};

module.exports = hash;
