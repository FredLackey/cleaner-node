const { INTERNAL_SERVER_ERROR } = require('./constants').HTTP.STATUS.CODES;
const _ = require('./utils');

class ApiError extends Error {
  constructor ({ status, number, message, details }) {
    super(message);
    this.status   = status || INTERNAL_SERVER_ERROR;
    this.number   = number || null;
    this.details  = details || '';
    this.name     = this.constructor.name;

    Error.captureStackTrace(this, this.constructor);
  }
}

const init = (status = '', number = '', message = '', details = '') => {
  return new ApiError({ status, number, message, details });
};
const status = (value, params = {}) => {
  const { number, message, details } = params;
  return new ApiError({ status: value, number, message, details });
};
const number = (value, params = {}) => {
  const { status, message, details } = params;
  return new ApiError({ status, number: value, message, details });
};
const message = (value, params = {}) => {
  const { status, number, details } = params;
  return new ApiError({ status, number, message: value, details });
};
const details = (value, params = {}) => {
  const { message, number, status } = params;
  return new ApiError({ status, number, message, details: value });
};

const isError = (value, strict = false) => {
  return (strict === true)
    ? (value && value instanceof Error)
    : (value && value.stack && value.message);
};

const isOK = (value, strict = true) => {
  if (!value || !_.isNumber(value.status)) {
    return false;
  }
  value = Number(value);
  return (strict === true)
    ? value === 200
    : value >= 200 && value <= 299;
};
const isOKish = value => isOK(value, false);

module.exports = {
  ApiError,

  init,
  message,
  number,
  status,
  details,

  isError,
  isOK,
  isOKish
};
