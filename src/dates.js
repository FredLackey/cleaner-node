const moment = require('moment');
const { padLeft } = require('./strings');

const isValid = value => {
  return (typeof value === 'object' && value instanceof Date && !isNaN(value.getTime()));
};
const ifValid = (value, defaultValue) => {
  return isValid(value) ? value : defaultValue;
};

const parse = value => {
  const date = moment(value);
  if (!date.isValid()) { return undefined; }
  return date.toDate();
};

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

const min = values => {
  values = [].concat(values).filter(x => (x && x instanceof Date));
  if (values.length === 0) { return undefined; }
  let result = values[0];
  values.forEach(v => {
    if (result > v) { result = v; }
  });
  return result;
};

const max = values => {
  values = [].concat(values).filter(x => (x && x instanceof Date));
  if (values.length === 0) { return undefined; }
  let result = values[0];
  values.forEach(v => {
    if (result < v) { result = v; }
  });
  return result;
};

const toBlockDate = (value, deliminator = '', includeMilliseconds = true) => {
  const date = ifValid(value, (new Date()));
  const dateString = [
    String(date.getFullYear()),
    padLeft(date.getMonth() + 1),
    padLeft(date.getDate()),
    padLeft(date.getHours()),
    padLeft(date.getMinutes()),
    padLeft(date.getSeconds())
  ].join(deliminator);
  if (!includeMilliseconds) { return dateString; }
  return [dateString, padLeft(date.getMilliseconds(), 3)].join('.');
};

const isUnix = value => {
  if (isNaN(value)) { return false; }
  return isValid(fromUnixDateStamp(value));
};

module.exports = {
  isValid,
  ifValid,
  parse,
  add,
  subtract,
  toBlockDate,
  isUnix,
  isEpoch : isUnix,
  toUnixDateStamp,
  toUnix: toUnixDateStamp,
  fromUnixDateStamp,
  fromUnix: fromUnixDateStamp,
  min,
  max
};
