const { isValidString } = require('./is-valid-string');
const { isValidArray } = require('./is-valid-array');

const undouble = (value, targets) => {
  if (!isValidString(value)) {
    return value;
  }
  if (!isValidArray(targets) && !isValidString(targets)) {
    return value;
  }
  targets = isValidArray(targets) ? targets : targets.split('');
  targets = targets.filter((ch) => isValidString(ch));
  targets.forEach((ch) => {

    while (value.includes(ch + ch)) {
      value = value.replace(ch + ch, ch);
    }
  
  });
  return value;
};

module.exports = undouble;
