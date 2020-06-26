const moment = require('moment');
const { padLeft, isValid: isValidString, removeSuffix } = require('./strings');

const isValid = value => {
  return (typeof value === 'object' && value instanceof Date && !isNaN(value.getTime()));
};
const ifValid = (value, defaultValue) => {
  return isValid(value) ? value : defaultValue;
};

const parse = (value, format) => {
  const date = format ? moment(value, format) : moment(value);
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

const isIsoDate = value => {
  
  if (!isValidString(value)) { return false; }
  
  let date = null;
  try {
    date = new Date(Date.parse(value));
  } catch (ex) {
    return false;
  }

  // Tweak the MS value without allowing the Date class to fix it.
  const isoString     = date.toISOString();
  const isoStringA    = isoString.substr(0, isoString.lastIndexOf('.') + 1);
  const isoStringB    = removeSuffix(isoString.substr(isoStringA.length), 'Z');
  const valueStringA  = value.substr(0, value.lastIndexOf('.') + 1);
  const valueStringB  = removeSuffix(value.substr(valueStringA.length), 'Z');
  const padLength     = isoStringB.length > valueStringB.length ? isoStringB.length : valueStringB.length;
  const isoMs         = isoStringB.padEnd(padLength, '0');
  const valMs         = valueStringB.padEnd(padLength, '0');
  if (isoStringA !== valueStringA) {
    return false;
  }
  if (isoMs !== valMs) {
    return false;
  }

  // Double-check with a UTC comparison
  const utcString = date.toUTCString();
  return utcString === (new Date(value)).toUTCString();
};
const fromIsoDate = value => {
  return isIsoDate(value) ? new Date(Date.parse(value)) : undefined;
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
  max,
  
  isIsoDate,
  isIso: isIsoDate,
  fromIsoDate,
  fromIso : fromIsoDate
};
