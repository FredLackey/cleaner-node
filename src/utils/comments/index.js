const multiLine  = require('./multi-line');
const singleLine = require('./single-line');
const toResult   = require('../to-result');

const hasComments = (lineOrLines) => {
  return singleLine.hasComments(lineOrLines) || multiLine.hasComments(lineOrLines);
};
const removeComments = (lineOrLines) => {

  const results = [].concat(lineOrLines).map(line => {

    let newLines = singleLine.removeComments(line);
        newLines = multiLine.removeComments(newLines);

    return newLines;

  });

  return toResult(results, lineOrLines);

};

module.exports = {
  multiLine,
  singleLine,

  hasComments,
  removeComments,
};
