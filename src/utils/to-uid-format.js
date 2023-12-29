const { ALPHANUMERIC } = require('../constants');
const cleanString      = require('./clean-string');
const isGuidFormat     = require('./is-guid-format');
const isUidFormat      = require('./is-uid-format');

const toUidFormat = value => {
  return isUidFormat(value) || isGuidFormat(value)
    ? cleanString(value, ALPHANUMERIC).toUpperCase()
    : null;
};

module.exports = toUidFormat;
