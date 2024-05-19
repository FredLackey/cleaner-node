const { SPACE } = require('../constants');
const getPads = require('./get-pads');
const isValidString = require('./is-valid-string');

const getPadPrefix = value => {
  if (!isValidString(value, true)) { return null; }
  const pads = getPads(value);
  if (pads.prefix === 0) { return ''; }
  return ''.padStart(pads.prefix, SPACE);
};

module.exports = getPadPrefix;
