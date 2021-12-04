const arrays  = require('./objects');
const objects = require('./objects');
const strings = require('./strings');

const asyncMiddleware = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

const getProperty = (obj, keyOrKeys, isCaseSensitive = false) => {
  if (!objects.isValid(obj)) { return undefined; }
  const targetKeys = [].concat(keyOrKeys)
    .filter(strings.isValid)
    .map(key => (isCaseSensitive ? key : key.toLowerCase()));
  const keys = Object.keys(obj).filter(key => (key && 
    ((isCaseSensitive && targetKeys.includes(key)) ||
    (!isCaseSensitive && targetKeys.includes(key.toLowerCase())))));
  const key = arrays.first(keys);
  return obj[key];
};
const getValueFromQuery = (req, keyOrKeys, isCaseSensitive = false) => {
  return getProperty(req.query, keyOrKeys, isCaseSensitive);
};
const getValueFromBody = (req, keyOrKeys, isCaseSensitive = false) => {
  return getProperty(req.body, keyOrKeys, isCaseSensitive);
};
const getValueFromParams = (req, keyOrKeys, isCaseSensitive = false) => {
  return getProperty(req.body, keyOrKeys, isCaseSensitive);
};
const getValue = (req, keyOrKeys, isCaseSensitive = false) => {
  return getValueFromBody(req, keyOrKeys, isCaseSensitive) || 
    getValueFromParams(req, keyOrKeys, isCaseSensitive) ||
    getValueFromQuery(req, keyOrKeys, isCaseSensitive);
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
