const { isValidString } = require('./is-valid-string');
const getBracket        = require('./get-bracket');

const isBracketted = value => {
  const bracket = getBracket(value);
  return (bracket && isValidString(value));
};

module.exports = isBracketted;
