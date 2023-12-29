const fs       = require('fs');
const isFolder = require('./is-folder');

const makePath = dirPath => {
  if (isFolder(dirPath)) { return true; }
  try {
    fs.mkdirSync(dirPath, { recursive: true });
    return isFolder(dirPath);
  } catch (e) {
    return false;
  }
};

module.exports = makePath;
