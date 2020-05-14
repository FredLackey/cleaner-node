const cc = require('camelcase');
const semver = require('semver');
const isHTML = require('is-html');
const htmlToText = require('html-to-text');

const { returnValue } = require('./common');
const { ALPHA, DIGITS, ALPHANUMERIC, BRACKETS } = require('./constants').strings;

const isPossible = value => {
  return ['string', 'number', 'boolean', 'undefined'].indexOf(typeof value) >= 0;
};

const has = (value, target, isCaseSensitive = false) => {
  if (typeof value !== 'string') { return false; }
  if (typeof target !== 'string') { return false; }
  return (isCaseSensitive && value.indexOf(target) >= 0) ||
    (value.toUpperCase().indexOf(target.toUpperCase()) >= 0);
};

const isValid = (value, isEmptyOkay = false) => {
  if (typeof value !== 'string') {
    return false;
  }
  return (isEmptyOkay || value.trim().length > 0);
};

const isValidLength = (value, min = 0, max = 0, trim = false) => {
  if (!isValid(value)) { return false; }
  const { length } = (trim ? value.trim() : value);
  if (min > 0 && length < min) { return false; }
  if (max > 0 && length > max) { return false; }
  return true;
};

const clean = (value, valid = ALPHANUMERIC, invalid = '', isCaseSensitive = false) => {
  if (!isValid(value, true)) { return undefined; }
  return value.split('').filter(ch => ((!valid || has(valid, ch, isCaseSensitive)) &&
    (!invalid || !has(invalid, ch, isCaseSensitive))
  )).join('');
};

const isValidChars = (value, valid = ALPHANUMERIC, invalid = '', isCaseSensitive = false) => {
  return isValid(value, false) && (value === clean(value, valid, invalid, isCaseSensitive));
};

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
};

const isUpperCase = value => (isValid(value) && (value === value.toUpperCase()));
const isLowerCase = value => (isValid(value) && (value === value.toLowerCase()));

const toCamelCase = valueOrValues => {
  const results = [].concat(valueOrValues).filter(isValid).map(value => (cc(value)));
  return returnValue(valueOrValues, results);
};
const toPascalCase = valueOrValues => {
  const results = [].concat(valueOrValues).filter(isValid).map(value => (cc(value, { pascalCase: true })));
  return returnValue(valueOrValues, results);
};
const toLowerCase = valueOrValues => {
  const results = [].concat(valueOrValues).filter(isValid).map(value => (value.toLowerCase()));
  return returnValue(valueOrValues, results);
};
const toUpperCase = valueOrValues => {
  const results = [].concat(valueOrValues).filter(isValid).map(value => (value.toUpperCase()));
  return returnValue(valueOrValues, results);
};

const ifValid = (value, defaultValue) => {
  return isValid(value) ? value : defaultValue;
};

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
};

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
};
const longest = values => {
  let length = 0;
  values = [].concat(values).filter(isValid);
  values.forEach(x => {
    if (x.trim().length > length) { length = x.trim(); }
  });
  return values.filter(x => (x.length === length));
};

const trim = (valueOrValues, toUndefined = false) => {
  const values = [].concat(valueOrValues);
  for (let i = 0; i < values.length; i += 1) {
    if (typeof values[i] !== 'string') { 
      continue; 
    }
    values[i] = values[i].trim();
    if (values[i].length === 0 && toUndefined) {
      values[i] = undefined;
    }
  }
  return returnValue(valueOrValues, values);
};

const trimToUndefined = valueOrValues => {
  return trim(valueOrValues, true);
};

const isPrefix = (prefix, values) => {
  if (!isValid(prefix, true)) { return false; }
  values = [].concat(values).filter(x => (isValid(x, true)));
  if (values.length === 0) { return false; }
  return (values.length === values.filter(x => (x.indexOf(prefix) === 0)).length);
};
const findPrefix = values => {
  values = [].concat(values).filter(isValid);
  const items = longest(values);
  const item  = (items && items instanceof Array && items.length > 0) ? items[0] : undefined;
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
};

// -----

const startsWith = (value, prefix, isCaseSensitive = true) => {
  if (!isValid(value, true) || !isValid(prefix, true)) { return false; }
  if (value.length < prefix.length) { return false; }
  if (isCaseSensitive) {
    return (value.indexOf(prefix) === 0);
  }
  return (value.toLowerCase().indexOf(prefix.toLowerCase()) === 0);
};
const removePrefix = (value, prefix, isCaseSensitive = true) => {
  if (!isValid(value, true) || !isValid(prefix, true)) { return value; }
  while (startsWith(value, prefix, isCaseSensitive)) {
    if (value.length === prefix.length) {
      value = '';
    } else {
      value = value.substr(prefix.length);
    }
  }
  return value;
};

const endsWith = (value, prefix, isCaseSensitive = true) => {
  if (!isValid(value, true) || !isValid(prefix, true)) { return false; }
  if (value.length < prefix.length) { return false; }
  if (isCaseSensitive) {
    return value.endsWith(prefix);
  }
  return (value.toLowerCase().endsWith(prefix.toLowerCase()));
};
const removeSuffix = (value, suffix, isCaseSensitive = true) => {
  if (!isValid(value, true) || !isValid(suffix, true)) { return value; }
  while (endsWith(value, suffix, isCaseSensitive)) {
    if (value.length === suffix.length) {
      value = '';
    } else {
      value = value.substr(0, (value.length - suffix.length));
    }
  }
  return value;
};

const padLeft = (value, length = 2, character = '0') => {
  if (!isPossible(value)) { return value; }
  let padding = '';
  while ((padding + String(value)).length < length) {
    padding += character;
  }
  return `${padding}${String(value)}`;
};

const getByteCount = (value, trimFirst) => {
  if (typeof value !== 'string') { return null; }
  return Buffer.byteLength((trimFirst ? value.trim() : value), 'utf8');
};

const isSemver = value => {
  // const clean = (value, valid = ALPHANUMERIC, invalid = '', isCaseSensitive = false) => {
  const test = clean(value, `${DIGITS}.`);
  if (value !== test) { return false; }
  const parts = test.split('.');
  if (parts.length !== 3) { return false; }
  return isDigits(parts[0]) && isDigits(parts[1]) && isDigits(parts[2]);
};

// ----- BRACKETS
const getBracket = value => {
  if (!isValid(value)) { return false; }
  return BRACKETS.find(b => {
    return value.startsWith(b.open) && value.endsWith(b.close);
  });
};
const isBracketted = value => {
  const bracket = getBracket(value);
  return (bracket && isValid(value));
};
const trimBrackets = value => {
  while (isBracketted(value)) {
    const bracket = getBracket(value);
    if (value.length <= (bracket.open.length + bracket.close.length)) {
      return '';
    }
    value = value.substr(bracket.open.length);
    value = value.substr(0, value.length - bracket.close.length);
  }
  return value;
};

const isJSON = value => {
  if (!isValid(value)) { return false; }
  if (value.length < 2) { return false; }
  if (!(value.startsWith('"') && value.endsWith('"')) &&
      !(value.startsWith('[') && value.endsWith(']')) &&
      !(value.startsWith('{') && value.endsWith('}'))) { return false; }
  try {
    const obj = JSON.parse(value);
    return (typeof obj === 'object');
  } catch (ex) {
    return false;
  }
};
const getSize = (value, encoding = 'utf8') => {
  if (!isValid(value, true)) { return -1; }
  return Buffer.byteLength(value, encoding);
};

const fromHtml = value => {
  return isHTML(value) ? htmlToText.fromString(value) : undefined;
};

module.exports = {
  isHtml: isHTML,
  fromHtml,

  has,
  clean,
  cleanDigits,
  cleanAlphanumeric,
  cleanVersion,
  findPrefix,
  getByteCount,
  isLowerCase,
  isUpperCase,
  toCamelCase,
  toPascalCase,
  toLowerCase,
  toUpperCase,
  unique,
  isPossible,
  isValid,
  isValidChars,
  isValidLength,
  ifValid,
  isAlpha,
  isDigits,
  isAlphanumeric,
  isPrefix,
  isSemver,
  trim,
  trimToUndefined,
  undouble,
  longest,

  startsWith,
  removePrefix,
  endsWith,
  removeSuffix,

  padLeft,

  getBracket,
  isBracketted,
  trimBrackets,

  isJSON,
  getSize
};
