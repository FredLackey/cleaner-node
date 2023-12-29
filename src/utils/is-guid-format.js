const { EMPTY_GUID } = require('../constants');
const isAlphanumeric = require('./is-alphanumeric');
const isValidString = require('./is-valid-string');

const isGuidFormat = value => {
  if (!isValidString(value)) {
    return null;
  }
  const emptyParts = EMPTY_GUID.split('-');
  const parts = value.split('-');
  if (emptyParts.length !== parts.length) { return false; }
  for (let i = 0; i < parts.length; i += 1) {
    if (parts[i].length !== emptyParts[i].length) { return false; }
    if (!isAlphanumeric(parts[i])) { return false; }
  }
  return true;
};

module.exports = isGuidFormat;
