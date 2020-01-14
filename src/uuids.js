const uuidV1 = require('uuid/v1');
const uuidV3 = require('uuid/v3');
const uuidV4 = require('uuid/v4');
const uuidV5 = require('uuid/v5');

const validate = require('uuid-validate');
const strings = require('./strings');
const constants = require('./constants');
const { ALPHANUMERIC } = constants.strings;

const EMPTY_GUID = '00000000-0000-0000-0000-000000000000';
const EMPTY_UID = '00000000000000000000000000000000';

const isGuidFormat = value => {
  if (!strings.isValidChars(value, `${ALPHANUMERIC}-`, false)) {
    return false;
  }
  const emptyParts = EMPTY_GUID.split('-');
  const parts = value.split('-');
  if (emptyParts.length !== parts.length) { return false; }
  for (let i = 0; i < parts.length; i += 1) {
    if (parts[i].length !== emptyParts[i].length) { return false; }
    if (!strings.isAlphanumeric(parts[i], false)) { return false; }
  }
  return true;
};

const isUidFormat = value => {
  return strings.isValidChars(value, ALPHANUMERIC, false) && value.length === EMPTY_UID.length;
};

const isValidFormat = value => {
  return isGuidFormat(value) || isUidFormat(value);
};

const toGuidFormat = value => {
  if (isGuidFormat(value)) { return value; }
  if (!isUidFormat(value)) { return undefined; }
  return [
    value.substr(0, 8),
    value.substr(8, 4),
    value.substr(12, 4),
    value.substr(16, 4),
    value.substr(20)
  ].join('-').toLowerCase();
};

const toUidFormat = value => {
  if (isUidFormat(value)) { return value; }
  if (!isGuidFormat(value)) { return undefined; }
  return value.split('-').join('').toUpperCase();
};

const version = value => {
  value = toGuidFormat(value);
  if (!value) { return undefined; }
  try {
    return validate.version(value);
  } catch (ex) {
    return undefined;
  }
};

const isValidGuid = (value, isEmptyOkay = false) => {
  if (isEmptyOkay && value === EMPTY_GUID) { return true; }
  if (!isEmptyOkay && value === EMPTY_GUID) { return false; }
  if (!isGuidFormat(value)) { return false; }
  return validate(value);
};

const isValidUid = (value, isEmptyOkay = false) => {
  if (isEmptyOkay && value === EMPTY_UID) { return true; }
  if (!isEmptyOkay && value === EMPTY_UID) { return false; }
  if (!isUidFormat(value)) { return false; }
  return isValidGuid(toGuidFormat(value), isEmptyOkay);
};

const isValid = (value, isEmptyOkay = false) => {
  return isValidGuid(value, isEmptyOkay) || isValidUid(value, isEmptyOkay);
};

const initGuid = version => {
  if (typeof version === 'undefined') { version = 4; }
  switch (version) {
    case '1':
    case 1:
      return uuidV1();
    case '3':
    case 3:
      return uuidV3();
    case '4':
    case 4:
      return uuidV4();
    case '5':
    case 5:
      return uuidV5();
    default:
      return undefined;
  }
};

const initUid = version => {
  const guid = initGuid(version);
  if (typeof guid !== 'string') { return undefined; }
  return guid.split('-').join('').toUpperCase();
};

const unique = values => {
  const result = [];
  const cache = [];
  [].concat(values).filter(isValid).forEach(x => {
    if (x && cache.indexOf(toUidFormat(x)) < 0) {
      cache.push(toUidFormat(x));
      result.push(x);
    }
  });
  return result;
};

module.exports = {
  EMPTY_GUID,
  EMPTY_UID,

  initGuid,
  initUid,

  isGuidFormat,
  isUidFormat,
  isValidFormat,

  isValid,
  isValidGuid,
  isValidUid,

  toGuid : toGuidFormat,
  toGuidFormat,
  toUid : toUidFormat,
  toUidFormat,

  unique,
  version,
};
