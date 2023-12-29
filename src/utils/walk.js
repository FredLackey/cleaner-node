const isValidString = require('./is-valid-string');
const getFolderContents = require('./get-folder-contents');
const isFile = require('./is-file');
const isFolder = require('./is-folder');
const os = require('os');

const walkFolder = (folderPath, results) => {
  if (!isValidString(folderPath)) { return; }
  const paths = getFolderContents(folderPath) || [];
  paths.forEach(p => {
    if (isFile(p)) {
      results.files.push(p.substring(results.root.length));
    } else if (isFolder(p)) {
      results.folders.push(p.substring(results.root.length));
      walkFolder(p, results);
    }
  });
};
const walk = (folderPath) => {
  if (!isFolder(folderPath)) { return undefined; }
  const results = {
    root    : folderPath,
    folders : [],
    files   : []
  };
  walkFolder(folderPath, results);
  return results;
};

module.exports = walk;
