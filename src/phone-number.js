const strings = require('./strings');

const isValid = (value) => {
  const v = strings.isValid(value) 
    ? value 
    : ((typeof value === 'number') 
      ? String(value) 
      : undefined);
  if (!strings.isValid(v) || [1, 5, 6, 10, 11].indexOf(v.length) < 0) { return false; }
  if (v.length === 11 && v.split('')[0] !== '1') { return false; }
  return true;
}

module.exports = {
  isValid
};
