const jwt               = require('jsonwebtoken');
const isObject          = require('./is-object');
const { isValidString } = require('./is-valid-string');
const isNumber          = require('./is-number');
const fromEpoch         = require('./from-epoch');
const toEpoch           = require('./to-epoch');

// return {
//   user     : toId(payload.sub),
//   account  : toId(payload.aid),
//   session  : toId(payload.iss),
//   created  : fromEpoch(payload.iat),
//   expiry   : fromEpoch(payload.exp)
// };

const toId = value => {
  if (typeof value === 'undefined') { return undefined; }
  if (isNumber(value)) { return Number(value); }
  if (isValidString(value)) { return value; }
  return undefined;
};

const CLAIMS = [
  { 
    key: 'sub', 
    name: 'user', 
    fromClaim: (value) => toId(value),
    toClaim: (value) => `${value}`
  },
  { 
    key: 'aid', 
    name: 'account', 
    fromClaim: (value) => toId(value),
    toClaim: (value) => `${value}` 
  },
  { 
    key: 'iss', 
    name: 'session', 
    fromClaim: (value) => toId(value),
    toClaim: (value) => `${value}` 
  },
  { 
    key: 'iat', 
    name: 'created', 
    fromClaim: (value) => fromEpoch(value),
    toClaim: (value) => toEpoch(value) 
  },
  { 
    key: 'exp', 
    name: 'expiry', 
    fromClaim: (value) => fromEpoch(value),
    toClaim: (value) => toEpoch(value) 
  },
];

const verify = (token, secret, ignoreExpiration = true) => {
  try {
    const result = jwt.verify(token, secret, { ignoreExpiration });
    return result;
  } catch (er) {
    return undefined;
  }
};

const decode = token => {
  return jwt.decode(token);
};
const encode = (payload, certOrSecret, options) => {
  return jwt.sign(payload, certOrSecret, options);
};

const fromClaims = obj => {

  if (!isObject(obj)) {
    return undefined;
  }

  const result  = {};
  
  Object.keys(obj).forEach(key => {
    const claim = CLAIMS.find(x => (x && x.key === key.toLocaleLowerCase()));
    if (claim) {
      result[claim.name] = claim.fromClaim(obj[key]);
    } else {
      result[key] = obj[key];
    }
  });

  return result;

};
const toClaims = obj => {

  if (!isObject(obj)) {
    return undefined;
  }

  const result  = {};
  
  Object.keys(obj).forEach(name => {
    const claim = CLAIMS.find(x => (x && x.name === name.toLowerCase()));
    if (claim) {
      result[claim.key] = claim.toClaim(obj[name]);
    } else {
      result[name] = obj[name];
    }
  });

  return result;

};

module.exports = {
  verify,
  decode,
  encode,
  fromClaims,
  toClaims
};
