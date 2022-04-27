const TRUE_STRINGS = ['true', 'yes', 'on', '1'];
const FALSE_STRINGS = ['false', 'no', 'off', '0'];

const parse = (value, strict = true) => {
  if ([true, false].includes(value)) { return value; }
  if (strict) {
    if (typeof value !== 'string') { return undefined; }
    if (['TRUE', 'FALSE'].includes(`${value}`.trim().toUpperCase())) {
      return `${value}`.trim().toUpperCase() === 'TRUE';
    }
    return undefined;
  }
  if (typeof value === 'string') {
    if (TRUE_STRINGS.includes(value.trim().toLowerCase())) { return true; }
    if (FALSE_STRINGS.includes(value.trim().toLowerCase())) { return false; }
    return undefined;
  }
  if (typeof value === 'number') {
    if (value === 1) { return true; }
    if (value === 0) { return false; }
    return undefined;
  }
  return undefined;
};

const isValid = (value, strict = true) => {
  return [true, false].includes(parse(value, strict));
};

const ifValid = (value, defaultValue, strict = true) => {
  return (isValid(value, strict)) ? value : defaultValue;
};

module.exports = {
  parse,
  isValid,
  ifValid,
  isValidBoolean: isValid,
  isValidBool   : isValid
};
