const isDigits = require('../is-digits');
const isObject = require('../is-object');
const isNumber = require('../is-number');
const isValidArray = require('../is-valid-array');
const trimToUndefined = require('../trim-to-undefined');

const DEFAULT_STATUS = 200;
const DEFAULT_CODE = -1;
const EMPTY_OK = true;

const respond = async (res, data, httpStatusCode = DEFAULT_STATUS, statusCode = DEFAULT_CODE) => {

  const status = (isNumber(statusCode) || isDigits(statusCode)) && Number(statusCode) !== DEFAULT_CODE
    ? Number(statusCode)
    : undefined;

  const response = isObject(data)
    ? { data, status }
    : isValidArray(data, EMPTY_OK)
      ? { data, status }
      : { message: trimToUndefined(data), status };

  const httpStatus = (isNumber(httpStatusCode) || isDigits(httpStatusCode))
    ? Number(httpStatusCode)
    : DEFAULT_STATUS;

  return res.status(httpStatus).json(response);
};

module.exports = respond;
