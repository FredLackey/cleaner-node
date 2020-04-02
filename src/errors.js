const { isNumber } = require('./numbers');
const { isValid: isValidString } = require('./strings');
const { INTERNAL_SERVER_ERROR } = require('./constants').http.status.codes;

class ApiError extends Error {
  constructor (message, number = null, status = INTERNAL_SERVER_ERROR, details) {
    super(message);
    this.name     = this.constructor.name;
    this.number   = number;
    this.status   = status;
    this.details  = details || '';

    Error.captureStackTrace(this, this.constructor);
  }
}

const init = (status, number, message, details) => {
  return new ApiError(message, number, status, details);
};

module.exports = {
  ApiError,
  init
};
