const { isNumber } = require('./numbers');
const { isValid: isValidString } = require('./strings');
const { INTERNAL_SERVER_ERROR } = require('./constants').http.status.codes;

class ApiError extends Error {
  constructor (message, status = INTERNAL_SERVER_ERROR) {
    super(message);
    this.name   = this.constructor.name;
    this.status = status;

    Error.captureStackTrace(this, this.constructor);
  }
}

const init = (status, message) => {
  const reverse   = (isValidString(status) && isNumber(message));
  const _message  = reverse ? status : message;
  const _status   = reverse ? message : status;
  return new ApiError(_message, _status);
};

module.exports = {
  ApiError,
  init
};
