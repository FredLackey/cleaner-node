const { isValidString } = require('./is-valid-string');

const isUrl = value => {
  if (!isValidString(value)) return false;
  value = value.toLowerCase();
  if (value !== value.trim()) {
    return false;
  }
  if (!value.startsWith('http://') && !value.startsWith('https://')) {
    return false;
  }
  try {
    const url = new URL(value);
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = isUrl;
