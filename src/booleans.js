const TRUE_STRINGS = ['true', 'yes', 'on', '1'];
const FALSE_STRINGS = ['false', 'no', 'off', '0'];

const parse = (value, strict = true) => {
  if (typeof value === 'boolean') { return value; }
  if (typeof value === 'string') {
    if (TRUE_STRINGS.includes(value.toLowerCase())) { return true; }
    if (FALSE_STRINGS.includes(value.toLowerCase())) { return false; }
    return undefined;
  }
  if (typeof value === 'number') {
    if (value === 1) { return true; }
    if (value === 0) { return false; }
    return undefined;
  }
  return strict ? undefined : Boolean(value);
};

const isValid = (value, strict = true) => {
  return ([true, false].indexOf(parse(value, strict)) >= 0);
};

const ifValid = (value, defaultValue, strict = true) => {
  return (isValid(value, strict)) ? value : defaultValue;
};

module.exports = {
  parse,
  isValid,
  ifValid
};
