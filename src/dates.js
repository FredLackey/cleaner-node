const moment = require('moment');

const parse = value => {
  const date = moment(value);
  if (!date.isValid()) { return undefined; }
  return date.toDate();
}

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
  parse,
  add,
  subtract,
  toUnixDateStamp,
  toUnix: toUnixDateStamp,
  fromUnixDateStamp,
  fromUnix: fromUnixDateStamp
};
