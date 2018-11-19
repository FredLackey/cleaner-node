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

module.exports = {
  count,
  isValid,
  first,
  last,
  single,

  toArray,
  init: toArray,
  parse: toArray
}
