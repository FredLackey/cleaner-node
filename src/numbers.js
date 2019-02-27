const constants = require('./constants');

const { DIGITS } = constants.strings;

const sortAscending = (a, b) => {
  return (a - b);
}
const sortDescending = (a, b) => {
  return (b - a);
}

const toDigits = value => {
  if (typeof value === 'number') {
    return value.toString().split('').filter(x => DIGITS.indexOf(x) >= 0);
  }
  if (typeof value === 'string') {
    return value.split('').filter(x => DIGITS.indexOf(x) >= 0);
  }
  return null;
}

const unique = values => {
  const results = [];
  [].concat(values).filter(x => (!isNaN(x))).forEach(x => {
    if (results.indexOf(Number(x)) < 0) {
      results.push(Number(x));
    }
  })
  return results;
}

const ascending = values => {
  values = [].concat(values).filter(x => (!isNaN(x))).map(x => (Number(x)));
  values.sort(sortAscending);
  return values;
}
const descending = values => {
  values = [].concat(values).filter(x => (!isNaN(x))).map(x => (Number(x)));
  values.sort(sortDescending);
  return values;
}

const max = values => {
  values = descending(values);
  return (values.length > 0) ? values[0] : undefined;
}
const min = values => {
  values = ascending(values);
  return (values.length > 0) ? values[0] : undefined;
}


module.exports = {
  toDigits,
  unique,
  ascending,
  descending,
  sortAscending,
  sortDescending,
  max,
  min
}
