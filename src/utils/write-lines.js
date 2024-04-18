const os            = require('os');
const writeFile     = require('./write-file');
const isValidArray  = require('./is-valid-array');
const isValidString = require('./is-valid-string');

const writeLines = async (filePath, lines) => {

  if (!isValidString(lines) && !isValidArray(lines)) {
    return false;
  }

  const data = lines.filter(x => (x && isValidString(x, true))).join(os.EOL);
  return writeFile(filePath, data);
};

module.exports = writeLines;
