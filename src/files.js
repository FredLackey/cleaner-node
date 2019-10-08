const fs    = require('fs');
const path  = require('path');
const md5File = require('md5-file');
const { isValid: isValidString } = require('./strings');

const LOCK_SUFFIX = '.lock';

// ----- GENERAL

const checksum = filePath => {
  try {
    const value = md5File.sync(filePath);
    return value;
  } catch (ex) {
    return undefined;
  }
}
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

// ----- FOLDERS

const createPath = value => {
  if (!isValidString(value)) { return false; }
  if (isFolder(value)) { return true; }
  try {
    fs.mkdirSync(value, {
      recursive: true
    })
  } catch (ex) {
    console.error(ex);
  }
  return isFolder(value);
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
const writeFile = (filePath, contents = '', createPath = true, overwrite = false) => {
  if (isFile(filePath) && !overwrite) { return false; }
  if (!isFolder(path.dirname(filePath) && 
    (!createPath || !createPath(path.dirname(filePath))))) { return false; }
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

const folderStructureChildren = (parent, childPaths, calculateChecksums) => {
  [].concat(childPaths).filter(name => (isValidString(name))).forEach(childPath => {
    const stats = getStats(childPath);
    if (stats && (stats.isDirectory() || stats.isFile())) {
      const child = {
        name      : path.basename(childPath),
        type      : (stats.isDirectory() ? 'D' : 'F'),
        size      : stats.size,
        modified  : stats.mtime,
        created   : stats.ctime
      };
      if (child.type === 'F' && calculateChecksums) {
        child.checksum = checksum(childPath);
      }

      parent.children = parent.children || [];
      parent.children.push(child);

      if (child.type === 'D') {
        const children = folderContents(childPath);
        folderStructureChildren(child, children, calculateChecksums);
      }
    }
  });
}
const folderStructure = (folderPath, calculateChecksums = true) => {
  const stats = getStats(folderPath);
  if (!stats || !stats.isDirectory()) { return undefined; }
  const root = {
    path      : folderPath,
    name      : stats.name,
    type      : 'D',
    size      : stats.size,
    modified  : stats.mtime,
    created   : stats.ctime
  };
  const children = folderContents(folderPath);
  folderStructureChildren(root, children, calculateChecksums);
  return root;
}

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
  checksum,
  getStats,
  toPath,
  isFile,
  isFolder,
  createPath,
  
  fileContents,
  folderContents,
  writeFile,
  deleteFile,

  walk,
  folderStructure,

  isLocked,
  lock,
  unlock,
  cleanLock
};
