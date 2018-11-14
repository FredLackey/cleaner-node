const crypto = require('crypto');
const constants = require('./constants');

const SALT_OPTION = 'base64';
const HMAC_OPTION = 'sha1';
const DIGEST_OPTION = 'hex';
const ALPHANUMERIC = constants.strings.ALPHANUMERIC;

function createCode (totalLength, chars = ALPHANUMERIC) {
  const rnd = crypto.randomBytes(totalLength);
  const value = new Array(totalLength);
  const len = chars.length;

  for (let i = 0; i < totalLength; i += 1) {
    value[i] = chars[rnd[i] % len];
  }

  return value.join('');
}

function createSalt (byteCount, slatOption = SALT_OPTION) {
  return crypto.randomBytes(byteCount).toString(slatOption);
}

function hash (value, salt, hmacOption = HMAC_OPTION, digestOption = DIGEST_OPTION) {
  var hmac = crypto.createHmac(hmacOption, salt);
  return hmac.update(value).digest(digestOption);
}

module.exports = {
  createCode,
  createSalt,
  hash
};
