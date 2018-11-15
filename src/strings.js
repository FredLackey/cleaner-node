const cc = require('camelcase');
const semver = require('semver');
const isHTML = require('is-html');

const { first } = require('./arrays');
const { returnValue } = require('./common');
const { ALPHA, DIGITS, ALPHANUMERIC } = require('./constants');

const has = (value, target, isCaseSensitive = false) => {
  if (typeof value !== 'string') { return false; }
  if (typeof target !== 'string') { return false; }
  return (isCaseSensitive && value.indexOf(target) >= 0) ||
    (value.toUpperCase().indexOf(target.toUpperCase()) >= 0);
};

const isValid = (value, isEmptyOkay = false) => {
  return (typeof value === 'string' &&
    (isEmptyOkay || value.trim().length > 0));
}

const isValidLength = (value, min = 0, max = 0, trim = false) => {
  if (!isValid(value)) { return false; }
  const length = (trim ? value.trim() : value).length;
  if (min > 0 && length < min) { return false; }
  if (max > 0 && length > max) { return false; }
  return true;
}

const clean = (value, valid = ALPHANUMERIC, invalid = '', isCaseSensitive = false) => {
  if (!isValid(value, true)) { return undefined; }
  return value.split('').filter(ch => ((!valid || has(valid, ch, isCaseSensitive)) &&
    (!invalid || !has(invalid, ch, isCaseSensitive))
  )).join('');
}

const isValidChars = (value, valid = ALPHANUMERIC, invalid = '', isCaseSensitive = false) => {
  return (value === clean(value, valid, invalid, isCaseSensitive));
}

const cleanDigits = value => (clean(value, DIGITS));
const cleanAlphanumeric = value => (clean(value, ALPHA + ALPHANUMERIC));
const cleanVersion = value => {
  if (!isValid(value)) { return undefined; }
  try {
    const version = semver(value);
    return isValid(version) ? version : undefined;
  } catch (ex) {
    return undefined;
  }
}

const isUpperCase = value => (isValid(value) && (value === value.toUpperCase()));
const isLowerCase = value => (isValid(value) && (value === value.toLowerCase()));

const toCamelCase = valueOrValues => {
  const results = [].concat(valueOrValues).filter(isValid).map(value => (cc(value)));
  return returnValue(valueOrValues, results);
}
const toPascalCase = valueOrValues => {
  const results = [].concat(valueOrValues).filter(isValid).map(value => (cc(value, { pascalCase: true })));
  return returnValue(valueOrValues, results);
}
const toLowerCase = valueOrValues => {
  const results = [].concat(valueOrValues).filter(isValid).map(value => (value.toLowerCase()));
  return returnValue(valueOrValues, results);
}
const toUpperCase = valueOrValues => {
  const results = [].concat(valueOrValues).filter(isValid).map(value => (value.toUpperCase()));
  return returnValue(valueOrValues, results);
}

const ifValid = (value, defaultValue) => {
  return isValid(value) ? value : defaultValue;
}

const isAlpha = value => (isValidChars(value, ALPHA, undefined, false));
const isDigits = value => (isValidChars(value, DIGITS, undefined, false));
const isAlphanumeric = value => (isValidChars(value, ALPHANUMERIC, undefined, false));

const undouble = value => {
  if (!isValid(value, true)) { return undefined; }
  const chars = value.split('');
  let result = value;
  chars.forEach(ch => {
    while (result.indexOf(`${ch}${ch}`) >= 0) {
      result = result.replace(`${ch}${ch}`, ch);
    }
  });
  return result;
}

const unique = (values, isCaseSensitive = false, trim = true) => {
  const result = [];
  const lower = [];
  [].concat(values).filter(x => (isValid(x, true))).forEach(v => {
    const value = (trim ? v.trim() : v);
    if ((isCaseSensitive && result.indexOf(value) < 0) || (!isCaseSensitive && lower.indexOf(value.toLowerCase()) < 0)) {
      result.push(value);
      lower.push(value.toLowerCase());
    }
  });
  return result;
}
const longest = values => {
  let length = 0;
  values = [].concat(values).filter(isValid);
  values.forEach(x => {
    if (x.trim().length > length) { length = x.trim(); }
  });
  return values.filter(x => (x.length === length));
}

const trim = valueOrValues => {
  const results = [].concat(valueOrValues).map(value => (isValid(value, true) ? value.trim() : value));
  return returnValue(valueOrValues, results);
}

const isPrefix = (prefix, values) => {
  if (!isValid(prefix, true)) { return false; }
  values = [].concat(values).filter(x => (isValid(x, true)));
  if (values.length === 0) { return false; }
  return (values.length === values.filter(x => (x.indexOf(prefix) === 0)).length);
}
const findPrefix = values => {
  values = [].concat(values).filter(isValid);
  const item = first(longest(values));
  if (!item) { return undefined; }

  let test = '';
  let prefix = '';

  item.split('').forEach(ch => {
    test += ch;
    if (isPrefix(test, values)) {
      prefix = test;
    }
  });

  return isValid(prefix, false) ? prefix : undefined;
}

module.exports = {
  isHtml: isHTML,

  has,
  clean,
  cleanDigits,
  cleanAlphanumeric,
  cleanVersion,
  findPrefix,
  isLowerCase,
  isUpperCase,
  toCamelCase,
  toPascalCase,
  toLowerCase,
  toUpperCase,
  unique,
  isValid,
  isValidChars,
  isValidLength,
  ifValid,
  isAlpha,
  isDigits,
  isAlphanumeric,
  isPrefix,
  trim,
  undouble,
  longest
};
