const fs    = require('fs');
const path  = require('path');
const { isValid: isValidString } = require('./strings');

const LOCK_SUFFIX = '.lock';

// ----- GENERAL

const getStats = itemPath => {
  try {
    const stats = fs.lstatSync(itemPath);
    return stats;
  } catch (ex) {
    return undefined;
  }
}
const toPath = value => {
  if (!isValidString(value)) { return undefined; }
  try {
    const result = path.parse(value);
    return (result && 
      isValidString(result.root) && 
      (isValidString(result.dir) || isValidString(result.base))) ? result : undefined;
  } catch (ex) {
    return undefined;
  }
}
const isFile = itemPath => {
  if (!isValidString(itemPath)) { return false; }
  const stats = getStats(itemPath);
  return stats && stats.isFile();
}
const isFolder = itemPath => {
  if (!isValidString(itemPath)) { return false; }
  const stats = getStats(itemPath);
  return stats && stats.isDirectory();
}

// ----- CONTENTS

const folderContents = folderPath => {
  if (!isValidString(folderPath)) { return undefined; }
  try {
    const names = fs.readdirSync(folderPath);
    return [].concat(names).filter(n => (typeof n === 'string' && n.trim().length > 0)).map(n => (path.join(folderPath, n)));
  } catch (ex) {
    return undefined;
  }
}
const fileContents = (filePath, options) => {
  if (!isValidString(filePath)) { return undefined; }
  try {
    const contents = fs.readFileSync(filePath, options);
    return contents;
  } catch (ex) {
    return undefined;
  }
}
const writeFile = (filePath, contents = '', overwrite = false) => {
  if (isFile(filePath) && !overwrite) { return false; }
  try {
    fs.writeFileSync(filePath, String(contents));
  } catch (ex) {
    return false;
  }
  return isFile(filePath);
}
const deleteFile = filePath => {
  if (!isFile(filePath)) { return true; }
  try {
    fs.unlinkSync(filePath);
  } catch (ex) {
    return !isFile(filePath);
  }
  return !isFile(filePath);
}

// ----- WALKING

const walkFolder = (folderPath, results) => {
  if (!isValidString(folderPath)) { return; }
  const paths = folderContents(folderPath) || [];
  paths.forEach(p => {
    if (isFile(p)) {
      results.files.push(p.substr(results.root.length));
    } else if (isFolder(p)) {
      results.folders.push(p.substr(results.root.length));
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

/**
┌─────────────────────┬────────────┐
│          dir        │    base    │
├──────┬              ├──────┬─────┤
│ root │              │ name │ ext │
" C:\      path\dir   \ file  .txt "
└──────┴──────────────┴──────┴─────┘
 */









// --- LOCKING ---

const isLocked = filePath => {
  if (!isValidString(filePath)) { return false; }
  return (isFile(filePath) && isFile(filePath + LOCK_SUFFIX));
}
const lock = filePath => {
  if (!isValidString(filePath)) { return false; }
  if (!isFile(filePath)) { return false; }
  if (isFile(filePath + LOCK_SUFFIX)) { return true; }
  writeFile(filePath + LOCK_SUFFIX, (new Date()).toISOString());
  return isLocked(filePath);
}
const unlock = filePath => {
  if (!isValidString(filePath)) { return false; }
  if (!isFile(filePath + LOCK_SUFFIX)) { return true; }
  deleteFile(filePath + LOCK_SUFFIX);
  return !isLocked(filePath);
}
const cleanLock = filePath => {
  if (!isValidString(filePath)) { return; }
  const info = toPath(filePath);
  if (!info) { return; }
  if (isFile(filePath + LOCK_SUFFIX) && !isFile(filePath)) {
    deleteFile(filePath + LOCK_SUFFIX);
  }
}

module.exports = {
  getStats,
  toPath,
  isFile,
  isFolder,

  fileContents,
  folderContents,
  writeFile,
  deleteFile,

  walk,

  isLocked,
  lock,
  unlock,
  cleanLock
};
