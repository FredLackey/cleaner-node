const c = require('../constants');
const isValidString = require('./is-valid-string');

function getTokenizedSegments (str, brackets) {

  brackets = [].concat(brackets).filter(x => (x && isValidString(x.open) && isValidString(x.close)));

  const results = [];
  const stack = [];

  for (let i = 0; i < str.length; i += 1) {
    brackets.forEach((bracket) => {
      const { open, close } = bracket;
      const startLen = open.length;
      const endLen = close.length;

      if (str.substring(i, i + startLen) === open) {
        stack.push({ type: bracket, start: i });
      } else if (
        str.substring(i, i + endLen) === close &&
        stack.length > 0 &&
        stack[stack.length - 1].type === bracket
      ) {
        const startInfo = stack.pop();
        if (stack.length === 0) {
          // Only add bracket if it's not nested within another
          results.push(str.substring(startInfo.start, i + endLen));
        }
      }
    });
  }

  return results;
}

module.exports = getTokenizedSegments;
