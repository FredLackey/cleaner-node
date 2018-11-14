const moment = require('moment');

const add = (value, quantity, duration) => {
  return moment(value).add(quantity, duration).toDate();
};
const subtract = (value, quantity, duration) => {
  return moment(value).subtract(quantity, duration).toDate();
};

const toUnixDateStamp = value => moment(value).unix();

const fromUnixDateStamp = value => {
  if (isNaN(value)) { return undefined; }
  return new Date(value * 1000);
};

module.exports = {
  add,
  subtract,

  toUnixDateStamp,
  toUnix: toUnixDateStamp,
  fromUnixDateStamp,
  fromUnix: fromUnixDateStamp
};
