const isValidString = require('../is-valid-string');
const isValidArray  = require('../is-valid-array');
const isString = value => isValidString(value, true);

const QUOTES = [
  '"',
  "'",
];
const DELIMITERS = [
  '#',
  '//',
];
const TYPES = {
  QUOTE: 'quote',
  DELIMITER: 'delimiter',
};

const getDelimPosition = line => {
  
  if (!isString(line)) {
    return -1;
  }

  let inQuote  = false;
  let curQuote = null;

  for (let i = 0; i < line.length; i += 1) {

    const char    = line[i];
    const isQuote = QUOTES.includes(char);

    if (isQuote && !inQuote) {
      inQuote = true;
      curQuote = char;
      continue;
    }

    if (isQuote && inQuote && curQuote === char) {
      inQuote = false;
      curQuote = null;
      continue;
    }

    if (isQuote) {
      inQuote = !inQuote;
      continue;
    }
    if (inQuote) {
      continue;
    }
    
    const delim = DELIMITERS.find(delim => line.startsWith(delim, i));
    if (delim) {
      return i;
    }

  }

  return -1;

};
const hasDelimeter = line => getDelimPosition(line) >= 0;
const removeComment = line => {
  const pos = getDelimPosition(line);
  if (pos < 0) { return line; }
  const trimmed = line.substring(0, pos);
  return trimmed;
};
const removeComments = lineOrLines => {
  const result = isString(lineOrLines)
    ? removeComment(lineOrLines)
    : isValidArray(lineOrLines, true)
      ? lineOrLines.map(x => removeComment(x))
      : undefined;
  return result;
};

module.exports = {
  getDelimPosition,
  hasDelimeter,
  removeComment,
  removeComments,
};
