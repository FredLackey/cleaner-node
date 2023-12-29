const isNumber = require('./is-number');

const sortAscending = (a, b) => {
  return (a - b);
};
const sortDescending = (a, b) => {
  return (b - a);
};

const sort = (values, descending = false) => {

  const digits = [].concat(values).filter(x => (isNumber(x))).map(x => (Number(x)));
  
  if (descending) {
    digits.sort(sortDescending);
  } else {
    digits.sort(sortAscending);
  }

  return digits;
};

module.exports = sort;
