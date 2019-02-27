const fs    = require('fs');
const path  = require('path');

const getStats = itemPath => {
  try {
    const stats = fs.lstatSync(itemPath);
    return stats;
  } catch (ex) {
    return undefined;
  }
}
const isFile = itemPath => {
  const stats = getStats(itemPath);
  return stats && stats.isFile();
}
const isFolder = itemPath => {
  const stats = getStats(itemPath);
  return stats && stats.isFolder();
}
const folderContents = folderPath => {
  try {
    const names = fs.readdirSync(folderPath);
    return [].concat(names).filter(n => (typeof n === 'string' && n.trim().length > 0)).map(n => (path.join(folderPath, n)));
  } catch (ex) {
    return undefined;
  }
}
const walkFolder = (folderPath, results) => {
  const paths = folderContents(folderPath) || [];
  paths.forEach(p => {
    if (isFile(p)) {
      results.files.push(p.substr(results.root.length));
    } else if (isFolder(p)) {
      results.folders.push(p.substr(results.root.length));
      walkFolder(p, results);
    }
  });
  return;
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

module.exports = {
  getStats,
  isFile,
  isFolder,
  folderContents,
  walk
}