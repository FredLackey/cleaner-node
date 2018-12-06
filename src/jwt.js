const jwt = require('jsonwebtoken');

const decode = (token, secret, ignoreExpiration = true) => {
  try {
    const result = jwt.verify(token, secret, { ignoreExpiration });
    return result;
  } catch (er) {
    return undefined;
  }
}

const sign = jwt.sign;

module.exports = {
  decode,
  sign
}