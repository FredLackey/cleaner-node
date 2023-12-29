const isValidString = require('./is-valid-string');

const ACCEPTABLE_IP_ADDRESS = [
  '0.0.0.0',
  'localhost'
];

const isIpAddress = value => {
  if (!isValidString(value) || value.length > 15) {
    return false;
  }
  if (ACCEPTABLE_IP_ADDRESS.includes(value.toLowerCase())) {
    return true;
  }
  let parts = value.split('.');
  if (parts.length !== 4) {
    return false;
  }
  parts = parts.filter(x => {
    const p = Number(x);
    return !isNaN(p) && p >= 0 && p <= 255;
  });
  return Number(parts[0]) !== 0;
};

module.exports = isIpAddress;
