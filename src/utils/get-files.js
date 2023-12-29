const fs                = require('fs');
const path              = require('path');
const isFolder          = require('./is-folder');
const isValidString = require('./is-valid-string');

const getFiles = folderPath => {
  if (!isFolder(folderPath)) { return null; }
  try {
    const names = fs.readdirSync(folderPath);
    return [].concat(names)
      .filter(isValidString)
      .map(name => (path.join(folderPath, name)));
  } catch (ex) {
    return null;
  }
};

module.exports = getFiles;
