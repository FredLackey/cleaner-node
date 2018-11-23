const constants = require('./constants');
const util = require('util');

function ApiError(message, status, context) {
  this.name = 'ApiError';

  this.message = message || '';
  this.status = status || constants.http.status.codes.INTERNAL_SERVER_ERROR;

  Error.captureStackTrace(this, (context || ApiError));
}
util.inherits(ApiError, Error);

function init(errorOrMessage, status) {
  errorOrMessage = errorOrMessage || '';

  var message = (typeof errorOrMessage === 'string')
    ? errorOrMessage
    : errorOrMessage.message;

  return (new ApiError(message, status, init));
}

module.exports = {
  ApiError,
  init
};
