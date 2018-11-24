const strings = require('./strings');

const count = (value) => {
  return (typeof value === 'object' && value instanceof Array)
    ? value.length
    : -1;
}
const isValid = (value, isEmptyOkay = false) => {
  return (
    (typeof value === 'object') &&
    (value instanceof Array) &&
    (isEmptyOkay || value.length > 0)
  );
}

const first = value => (count(value) > 0 ? value[0] : undefined);
const last = value => (count(value) > 0 ? value[value.length - 1] : undefined);
const single = value => (count(value) === 1 ? value[0] : undefined);

const toArray = valueOrValues => ([].concat(valueOrValues).filter(x => (typeof x !== 'undefined')));

const join = (values, delimeter = ',') => {
  values = [].concat(values)
    .filter(x => (x && ['undefined', 'object', 'function', 'symbol'].indexOf(typeof x) < 0))
    .map(x => strings.removeSuffix(strings.removePrefix(String(x), delimeter), delimeter))
    .filter(strings.isValid);
  if (values.length === 0) { return ''; }
  return values.join(delimeter);
}

module.exports = {
  count,
  isValid,
  first,
  last,
  single,
  join,

  toArray,
  init: toArray,
  parse: toArray
}
