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

const min = values => {
  values = [].concat(values).filter(x => (x && x instanceof Date));
  if (values.length === 0) { return undefined; }
  let result = values[0];
  values.forEach(v => {
    if (result > v) { result = v; }
  });
  return result;
}

const max = values => {
  values = [].concat(values).filter(x => (x && x instanceof Date));
  if (values.length === 0) { return undefined; }
  let result = values[0];
  values.forEach(v => {
    if (result < v) { result = v; }
  });
  return result;
}

module.exports = {
  parse,
  add,
  subtract,
  toUnixDateStamp,
  toUnix: toUnixDateStamp,
  fromUnixDateStamp,
  fromUnix: fromUnixDateStamp,
  min,
  max
};
