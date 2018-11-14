const count = (value) => {
  return (typeof value === 'object' && value instanceof Array)
    ? value.length
    : -1;
};
const isValid = (value, isEmptyOkay = false) => {
  return (
    (typeof value === 'object') &&
    (value instanceof Array) &&
    (isEmptyOkay || value.length > 0)
  );
};

const first = value => (isValid(value) ? value[0] : undefined);
const last = value => (isValid(value) ? value[value.length - 1] : undefined);
const single = value => (count(value) === 1 ? value[0] : undefined);

const returnResult = (values, resultsArray) => (isValid(values) ? resultsArray : single(values));

module.exports = {
  count,
  isValid,
  first,
  last,
  single,
  returnResult
};
