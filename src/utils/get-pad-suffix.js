const { SPACE } = require('../constants');
const getPads = require('./get-pads');
const isValidString = require('./is-valid-string');

const getPadSuffix = value => {
  if (!isValidString(value, true)) { return null; }
  const pads = getPads(value);
  if (pads.suffix === 0) { return ''; }
  return ''.padStart(pads.suffix, SPACE);
};

module.exports = getPadSuffix;
