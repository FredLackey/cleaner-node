const fs = require('fs');
const path = require('path');
const isValidString = require('./is-valid-string');

const getFolderContents = folderPath => {
  if (!isValidString(folderPath)) { return undefined; }
  try {
    const names = fs.readdirSync(folderPath);
    return [].concat(names).filter(x => (isValidString(x))).map(name => (path.join(folderPath, name)));
  } catch (ex) {
    return undefined;
  }
};

module.exports = getFolderContents;
