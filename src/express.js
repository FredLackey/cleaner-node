const objects = require('./objects');

const asyncMiddleware = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};


const getProperty = (obj, key, isCaseSensitive = false) => {
  if (!objects.isValid(obj)) { return undefined; }
  const keys = Object.keys(obj).filter(x => (x && 
    ((!isCaseSensitive && x.toLowerCase() === key.toLowerCase()) ||
    (isCaseSensitive && x === key))));
  const keyToUse = (keys.length === 1) ? keys[0] : key;
  return obj[keyToUse];
};
const getValueFromQuery = (req, key, isCaseSensitive = false) => {
  return getProperty(req.query, key, isCaseSensitive);
};
const getValueFromBody = (req, key, isCaseSensitive = false) => {
  return getProperty(req.body, key, isCaseSensitive);
};
const getValueFromParams = (req, key, isCaseSensitive = false) => {
  return getProperty(req.body, key, isCaseSensitive);
};
const getValue = (req, key, isCaseSensitive = false) => {
  return getValueFromBody(req, key, isCaseSensitive) || 
    getValueFromParams(req, key, isCaseSensitive) ||
    getValueFromQuery(req, key, isCaseSensitive);
};

module.exports = {
  asyncMiddleware,
  amw   : asyncMiddleware,
  wrap  : asyncMiddleware,

  getValue,
  getValueFromBody,
  getValueFromParams,
  getValueFromQuery
};
