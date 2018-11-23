const jwt = require('jsonwebtoken');

const decode = (token, secret) => {
  try {
    const result = jwt.verify(token, secret);
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