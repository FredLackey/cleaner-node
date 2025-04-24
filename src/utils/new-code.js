const crypto = require('crypto');
const c      = require('../constants');

const newCode = (totalLength = c.DEFAULTS.CODE.LENGTH, chars = c.DEFAULTS.CODE.CHARS) => {

  const _length = Number(totalLength);

  const rnd   = crypto.randomBytes(_length);
  const value = new Array(_length);
  const len   = chars.length;

  for (let i = 0; i < _length; i += 1) {
    value[i] = chars[rnd[i] % len];
  }

  return value.join('');
};

module.exports = newCode;
