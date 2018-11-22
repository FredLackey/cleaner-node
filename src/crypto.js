const crypto = require('crypto');
const constants = require('./constants');
const strings = require('./strings');

const SALT_OPTION = 'base64';
const HMAC_OPTION = 'sha1';
const DIGEST_OPTION = 'hex';

const createCode = (totalLength, chars = constants.strings.ALPHANUMERIC) => {
  const rnd = crypto.randomBytes(totalLength);
  const value = new Array(totalLength);
  const len = chars.length;

  for (let i = 0; i < totalLength; i += 1) {
    value[i] = chars[rnd[i] % len];
  }

  return value.join('');
}

const createSalt = (byteCount, slatOption = SALT_OPTION) => {
  return crypto.randomBytes(byteCount).toString(slatOption);
}

const hash = (value, salt, hmacOption = HMAC_OPTION, digestOption = DIGEST_OPTION) => {
  const hmac = crypto.createHmac(hmacOption, salt);
  return hmac.update(value).digest(digestOption);
}

const hashString = value => {
  if (!strings.isValid(value, true)) { return undefined; }
  value = strings.trimToUndefined(value);
  return crypto.createHash('md5').update(value).digest('hex');
}

module.exports = {
  createCode,
  createSalt,
  hash,
  hashString
};
