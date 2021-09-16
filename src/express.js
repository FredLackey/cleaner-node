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
  return (keys.length === 0) 
    ? obj[keys[0]]
    : obj[key];
};
const getValueFromBody = (req, key, isCaseSensitive = false) => {
  return getProperty(req.body, key, isCaseSensitive);
};
const getValueFromParams = (req, key, isCaseSensitive = false) => {
  return getProperty(req.body, key, isCaseSensitive);
};
const getValue = (req, key, isCaseSensitive = false) => {
  return getValueFromBody(req, key, isCaseSensitive) || getValueFromParams(req, key, isCaseSensitive);
};

module.exports = {
  asyncMiddleware,
  amw   : asyncMiddleware,
  wrap  : asyncMiddleware,

  getValue,
  getValueFromBody,
  getValueFromParams
};
