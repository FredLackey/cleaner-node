const fs    = require('fs');
const path  = require('path');
const readline  = require('readline');
const md5File   = require('md5-file');
const { isValid: isValidString, isJSON } = require('./strings');

const LOCK_SUFFIX = '.lock';

// ----- GENERAL

const checksum = filePath => {
  try {
    const value = md5File.sync(filePath);
    return value;
  } catch (ex) {
    return undefined;
  }
};
const getStats = itemPath => {
  try {
    const stats = fs.lstatSync(itemPath);
    return stats;
  } catch (ex) {
    return undefined;
  }
};
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
};
const isFile = itemPath => {
  if (!isValidString(itemPath)) { return false; }
  const stats = getStats(itemPath);
  return stats && stats.isFile();
};
const isFolder = itemPath => {
  if (!isValidString(itemPath)) { return false; }
  const stats = getStats(itemPath);
  return stats && stats.isDirectory();
};

// ----- FOLDERS

const createPath = value => {
  if (!isValidString(value)) { return false; }
  if (isFolder(value)) { return true; }
  try {
    fs.mkdirSync(value, {
      recursive: true
    });
  } catch (ex) {
    console.error(ex);
  }
  return isFolder(value);
};

// ----- CONTENTS

const folderContents = folderPath => {
  if (!isValidString(folderPath)) { return undefined; }
  try {
    const names = fs.readdirSync(folderPath);
    return [].concat(names).filter(n => (typeof n === 'string' && n.trim().length > 0)).map(n => (path.join(folderPath, n)));
  } catch (ex) {
    return undefined;
  }
};
const fileContents = (filePath, options) => {
  if (!isValidString(filePath)) { return undefined; }
  try {
    const contents = fs.readFileSync(filePath, options);
    return contents;
  } catch (ex) {
    return undefined;
  }
};
const writeFile = (filePath, contents = '', overwrite = false) => {
  if (isFile(filePath) && !overwrite) { return false; }
  if (!isFolder(path.dirname(filePath)) && !createPath(path.dirname(filePath))) {
    return false;
  }
  try {
    fs.writeFileSync(filePath, String(contents));
  } catch (ex) {
    return false;
  }
  return isFile(filePath);
};
const deleteFile = filePath => {
  if (!isFile(filePath)) { return true; }
  try {
    fs.unlinkSync(filePath);
  } catch (ex) {
    return !isFile(filePath);
  }
  return !isFile(filePath);
};

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
};
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

const getLockPath = filePath => {
  if (isFile(filePath)) { return undefined; }
  return filePath + LOCK_SUFFIX;
};
const isLocked = filePath => {
  if (!isValidString(filePath)) { return false; }
  return (isFile(filePath) && isFile(getLockPath(filePath)));
};
const forceUnlock = filePath => {
  if (!isLocked(filePath)) { return true; }
  deleteFile(getLockPath(filePath));
  return !isLocked(filePath);
};
const getLockOwner = filePath => {
  if (!isLocked(filePath)) { return undefined; }
  const contents = fileContents(getLockPath(filePath));
  if (!isJSON(contents)) { return undefined; }
  return JSON.parse(contents).owner;
};
const verifyLockOwner = (filePath, ownerSignature) => {
  if (!isValidString(ownerSignature)) { return false; }
  const currentOwner = getLockOwner(filePath);
  return isValidString(currentOwner) && currentOwner.trim().toLowerCase() === ownerSignature.trim().toLowerCase();
};
const unlock = (filePath, ownerSignature) => {
  if (!isLocked(filePath)) { return true; }
  if (!verifyLockOwner(filePath, ownerSignature)) { return false; }
  deleteFile(getLockPath(filePath));
  return !isLocked(filePath);
};
const lock = (filePath, ownerSignature) => {
  if (!isValidString(filePath)) { return false; }
  if (!isValidString(ownerSignature)) { return false; }
  if (isLocked(filePath)) {
    return verifyLockOwner(filePath, ownerSignature);
  }
  if (!isFile(filePath)) { return false; }
  const newFile = writeFile({
    filePath: getLockPath(filePath),
    contents: JSON.stringify({
      date  : (new Date()).toUTCString(),
      owner : ownerSignature
    }),
    createPath: true, 
    overwrite : false
  });
  return newFile && isLocked(filePath) && verifyLockOwner(filePath, ownerSignature);
};

// --- READ LINES

const readLines = async (filePath) => {
  const lines = [];
  try {
    const stream  = fs.createReadStream(filePath);
    const file    = readline.createInterface({
      input: stream,
      crlfDelay: Infinity
    });
    for await (const line of file) {
      lines.push(line);
    }
    return lines;
  } catch (ex) {
    return undefined;
  }
};

const copyFile = (sourcePath, targetPath, overwrite = true) => {
  if (!isFile(sourcePath)) { return false; }
  if (!overwrite && isFile(targetPath)) { return false; }
  if (!createPath(path.dirname(targetPath))) { return false; }
  fs.copyFileSync(sourcePath, targetPath);
  return isFile(targetPath);
}
const moveFile = (sourcePath, targetPath, overwrite = true) => {
  if (!copyFile(sourcePath, targetPath, overwrite)) { return false; }
  return deleteFile(sourcePath);
}


const isEmptyFolder = folderPath => {
  if (!isFolder(folderPath)) { return false; }
  const children = folderContents(folderPath);
  return (typeof children === 'object' && children instanceof Array && children.length === 0);
};
const pruneFolders = folder => {
  
  if (!fs.statSync(folder).isDirectory()) { 
    return; 
  }
  
  let files = fs.readdirSync(folder);
  
  if (files.length > 0) {
    files.forEach(file => {
      pruneFolders(path.join(folder, file));
    });

    files = fs.readdirSync(folder);
  }

  if (files.length == 0) {
    fs.rmdirSync(folder);
    return;
  }
};

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

  getLockPath,
  getLockOwner,
  isLocked,
  forceUnlock,
  verifyLockOwner,
  lock,
  unlock,
  
  readLines,
  
  copyFile,
  moveFile,
  isEmptyFolder,
  pruneFolders
};
