const constants = require('./constants');

const EMPTY_GUID = '00000000-0000-0000-0000-000000000000';
const EMPTY_UID = '00000000000000000000000000000000';

const isUuidFormat = value => {
  return (
    typeof value === 'string' &&
    value.length === EMPTY_UID.length &&
    value.toLowerCase().split('').filter(x => (constants.strings.ALPHANUMERIC.toLowerCase()).length === 32)
  );
};

const isGuidFormat = value => {
  if (typeof value !== 'string') { return false; }
  if (value.length !== EMPTY_GUID.length) { return false; }
  if (value !== value.toLowerCase().split('').filter(ch => ((constants.strings.ALPHANUMERIC + '-').toLowerCase().indexOf(ch) >= 0)).join('-')) { return false; }
  const parts = value.split('-');
  return (parts.length === 5 &&
    parts[0].length === 8 &&
    parts[1].length === 4 &&
    parts[2].length === 4 &&
    parts[3].length === 4 &&
    parts[4].length === 12);
};

module.exports = {
  EMPTY_GUID,
  EMPTY_UID,

  isUuidFormat,
  isGuidFormat
};
