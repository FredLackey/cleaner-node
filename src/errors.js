const util = require('util');
const constants = require('./constants');
const { isNumber } = require('./numbers');
const { isValid: isValidString } = require('./strings');

function ApiError(message, status, context) {
  this.name = 'ApiError';

  this.message = message || '';
  this.status = status || constants.http.status.codes.INTERNAL_SERVER_ERROR;

  Error.captureStackTrace(this, (context || ApiError));
}
util.inherits(ApiError, Error);

function init(errorOrMessage, status) {
  errorOrMessage = errorOrMessage || '';

  if (isValidString(status) && isNumber(errorOrMessage)) {
    const num = Number(errorOrMessage);
    const msg = status;
    status = num;
    errorOrMessage = msg;
  }

  const message = (typeof errorOrMessage === 'string')
    ? errorOrMessage
    : errorOrMessage.message;

  return (new ApiError(message, status, init));
}

module.exports = {
  ApiError,
  init
};
