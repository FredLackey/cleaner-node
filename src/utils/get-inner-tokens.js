const { isValidString } = require('./is-valid-string');

function getInnerTokens (str, bracket) {

  if (!bracket) {
    throw new Error('Bracket was not supplied.');
  }
  if (!isValidString(bracket.open) || !isValidString(bracket.close)) {
    throw new Error('Bracket is invalid.');
  }

  let maxDepth = 0;
  let currentDepth = 0;
  let innermostStart = -1;
  let innermostEnd = -1;
  const startLen = bracket.open.length;
  const endLen = bracket.close.length;

  for (let i = 0; i < str.length; i += 1) {
    if (str.substring(i, i + startLen) === bracket.open) {
      currentDepth += 1;
      if (currentDepth > maxDepth) {
        maxDepth = currentDepth;
        innermostStart = i;
      }
      i += startLen - 1; // Skip the length of the start bracket minus 1 (since for loop will increment i)
    } else if (str.substring(i, i + endLen) === bracket.close) {
      if (currentDepth === maxDepth) {
        innermostEnd = i + endLen - 1;
      }
      currentDepth -= 1;
      i += endLen - 1; // Skip the length of the end bracket minus 1
    }
  }

  if (innermostStart !== -1 && innermostEnd !== -1) {
    return str.substring(innermostStart, innermostEnd + 1);
  }

  return null;
}

module.exports = getInnerTokens;
