const crypto = require('crypto');
const c = require('../constants');

const newCode = (totalLength = c.DEFAULTS.CODE.LENGTH, chars = c.DEFAULTS.CODE.CHARS) => {
  const rnd = crypto.randomBytes(totalLength);
  const value = new Array(totalLength);
  const len = chars.length;

  for (let i = 0; i < totalLength; i += 1) {
    value[i] = chars[rnd[i] % len];
  }

  return value.join('');
};

module.exports = newCode;
