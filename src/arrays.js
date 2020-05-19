const strings = require('./strings');

const count = (value) => {
  return (typeof value === 'object' && value instanceof Array)
    ? value.length
    : -1;
};
const isValid = (value, isEmptyOkay = false) => {
  return (
    (typeof value === 'object') &&
    (value !== null) &&
    (value instanceof Array) &&
    (isEmptyOkay || value.length > 0)
  );
};

const first = value => (count(value) > 0 ? value[0] : undefined);
const last = value => (count(value) > 0 ? value[value.length - 1] : undefined);
const single = value => (count(value) === 1 ? value[0] : undefined);

const toArray = valueOrValues => ([].concat(valueOrValues).filter(x => (typeof x !== 'undefined' && x !== null)));

const join = (values, delimeter = ',') => {
  values = [].concat(values).map(x => String(x)).filter(x => (x && strings.isValid(x, true)));
  if (values.length === 0) { return ''; }
  for (let i = 0; i < values.length; i += 1) {
    if (i !== 0) {
      values[i] = strings.removePrefix(String(values[i]), delimeter);
    }
    if (i !== (values.length - 1)) {
      values[i] = strings.removeSuffix(String(values[i]), delimeter);
    }
  }
  return values.filter(x => (x.length > 0)).join(delimeter);
};

const toResult = (itemOrItems, resultOrResults) => {
  if (isValid(itemOrItems, true) === isValid(resultOrResults, true)) { 
    return resultOrResults; 
  }
  if (isValid(itemOrItems, true)) {
    return toArray(resultOrResults);
  }
  return first(resultOrResults);
};

module.exports = {
  count,
  isValid,
  first,
  last,
  single,
  join,

  toArray,
  init: toArray,
  parse: toArray,
  
  toResult
};
