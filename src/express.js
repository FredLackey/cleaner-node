const arrays  = require('./arrays');
const objects = require('./objects');
const strings = require('./strings');

const asyncMiddleware = (fn) => {
  // return (req, res, next) => {
  //   Promise.resolve(fn(req, res, next)).catch(next);
  // };
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

const getKeys = (obj, keyOrKeys, isCaseSensitive = false) => {
  if (!objects.isValid(obj)) { return []; }
  const targetKeys = [].concat(keyOrKeys)
    .filter(key => (strings.isValid(key)))
    .map(key => (isCaseSensitive ? key : key.toLowerCase()));
  return Object.keys(obj).filter(key => (key && 
    ((isCaseSensitive && targetKeys.includes(key)) ||
    (!isCaseSensitive && targetKeys.includes(key.toLowerCase())))));
};
const getValuesFromObject = (obj, keyOrKeys, isCaseSensitive = false) => (
  getKeys(obj, keyOrKeys, isCaseSensitive)
    .filter(key => (strings.isValid(key)))
    .map(key => (obj[key]))
);

// MULTIPLES
const getValuesFromBody = (req, keyOrKeys, isCaseSensitive = false) => getValuesFromObject(req.body, keyOrKeys, isCaseSensitive);
const getValuesFromParams = (req, keyOrKeys, isCaseSensitive = false) => getValuesFromObject(req.params, keyOrKeys, isCaseSensitive);
const getValuesFromQuery = (req, keyOrKeys, isCaseSensitive = false) => getValuesFromObject(req.query, keyOrKeys, isCaseSensitive);
const getValues = (req, keyOrKeys, isCaseSensitive = false) => ([
  ...getValuesFromBody(req, keyOrKeys, isCaseSensitive),
  ...getValuesFromParams(req, keyOrKeys, isCaseSensitive),
  ...getValuesFromQuery(req, keyOrKeys, isCaseSensitive),
].filter(x => (objects.isDefined(x))));

// SINGULAR
const singleValueFromBody = (req, keyOrKeys, isCaseSensitive = false) => arrays.single(getValuesFromBody(req, keyOrKeys, isCaseSensitive));
const singleValueFromParams = (req, keyOrKeys, isCaseSensitive = false) => arrays.single(getValuesFromParams(req, keyOrKeys, isCaseSensitive));
const singleValueFromQuery = (req, keyOrKeys, isCaseSensitive = false) => arrays.single(getValuesFromQuery(req.query, keyOrKeys, isCaseSensitive));
const singleValue = (req, keyOrKeys, isCaseSensitive = false) => arrays.single(getValues(req, keyOrKeys, isCaseSensitive));


// FIRST
const firstValueFromBody = (req, keyOrKeys, isCaseSensitive = false) => arrays.first(getValuesFromBody(req, keyOrKeys, isCaseSensitive));
const firstValueFromParams = (req, keyOrKeys, isCaseSensitive = false) => arrays.first(getValuesFromParams(req, keyOrKeys, isCaseSensitive));
const firstValueFromQuery = (req, keyOrKeys, isCaseSensitive = false) => arrays.first(getValuesFromQuery(req.query, keyOrKeys, isCaseSensitive));
const firstValue = (req, keyOrKeys, isCaseSensitive = false) => arrays.first(getValues(req, keyOrKeys, isCaseSensitive));

module.exports = {
  asyncMiddleware,
  amw   : asyncMiddleware,
  wrap  : asyncMiddleware,

  getKeys,
  getValuesFromObject,

  getValues,
  getValuesFromBody,
  getValuesFromParams,
  getValuesFromQuery,

  getValue: firstValue,
  getValueFromBody: firstValueFromBody,
  getValueFromParams: firstValueFromParams,
  getValueFromQuery: firstValueFromQuery,

  singleValue,
  singleValueFromBody,
  singleValueFromParams,
  singleValueFromQuery,

  firstValue,
  firstValueFromBody,
  firstValueFromParams,
  firstValueFromQuery
};
