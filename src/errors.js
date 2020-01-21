const { isNumber } = require('./numbers');
const { isValid: isValidString } = require('./strings');
const { INTERNAL_SERVER_ERROR } = require('./constants').http.status.codes;

class ApiError extends Error {
  constructor (message, number = null, status = INTERNAL_SERVER_ERROR) {
    super(message);
    this.name   = this.constructor.name;
    this.number = number;
    this.status = status;

    Error.captureStackTrace(this, this.constructor);
  }
}

const init = (status, number, message) => {
  return new ApiError(message, number, status);
};

module.exports = {
  ApiError,
  init
};
