const rimraf   = require('rimraf');
const isFolder = require('./is-folder');

const deleteDirectory = (folderPath) => {
  if (!isFolder(folderPath)) {
    return true;
  }
  try {
    rimraf.sync(folderPath);
    return (!isFolder(folderPath));
  } catch (ex) {
    console.debug(ex);
    return (!isFolder(folderPath));
  }
};

module.exports = deleteDirectory;
