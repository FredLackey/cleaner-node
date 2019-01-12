const jwt = require('jsonwebtoken');
const dates = require('./dates');
const strings = require('./strings');

const decode = (token, secret, ignoreExpiration = true) => {
  try {
    const result = jwt.verify(token, secret, { ignoreExpiration });
    return result;
  } catch (er) {
    return undefined;
  }
}

const sign = (payload, certOrSecret, options) => {
  return jwt.sign(payload, certOrSecret, options);
};

const toPayload = token => {
  return jwt.decode(token);
}

const toId = value => {
  if (typeof value === 'undefined') { return undefined; }
  if (!isNaN(value)) { return Number(value); }
  if (strings.isValid(value)) { return value; }
  return undefined;
}
const toDate = value => {
  if (isNaN(value)) { return undefined; }
  return dates.fromUnix(value);
}

const toDetails = payloadOrToken => {
  const payload = (typeof payloadOrToken === 'string')
    ? toPayload(payloadOrToken)
    : payloadOrToken;
  if (typeof payload !== 'object') { return undefined; }
  return {
    userId     : toId(payload.sub),
    accountId  : toId(payload.aid),
    sessionId  : toId(payload.iss),
    created    : toDate(payload.iat),
    expiry     : toDate(payload.exp)
  };
}

const isValidPayload = value => {
  return (
    typeof value === 'object' &&
    !(value instanceof Array) &&
    (strings.isValid(value.sub) || !isNaN(value.sub)) &&
    (typeof value.aid === 'undefined' || strings.isValid(value.sub) || !isNaN(value.sub)) &&
    (strings.isValid(value.iss) || !isNaN(value.iss)) &&
    (typeof value.iat !== 'undefined' && !isNaN(value.iat)) &&
    (typeof value.exp !== 'undefined' && !isNaN(value.exp))
  );
}

const toToken = (userId, accountId, sessionId, createdDate, expiryDate, secret) => {
  if (typeof secret === 'undefined' && typeof accountId !== 'undefined') {
    secret = expiryDate;
    expiryDate = createdDate;
    createdDate = sessionId;
    accountId = undefined;
  }
  const payload = {
    sub : userId,
    aid : accountId,
    iss : sessionId,
    iat : dates.toUnix(createdDate),
    exp : dates.toUnix(expiryDate)
  };
  return jwt.sign(payload, secret);
}

module.exports = {
  decode,
  sign,
  toDetails,
  toPayload,
  toToken,
  isValidPayload
}