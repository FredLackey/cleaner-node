const c = require('../constants');
const { isValidString } = require('./is-valid-string');

const getBracket = value => {
  if (!isValidString(value)) { return false; }
  return c.BRACKETS.find(b => {
    return value.startsWith(b.open) && value.endsWith(b.close);
  });
};

module.exports = getBracket;
