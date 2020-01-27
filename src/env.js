const path = require('path');
const { isFile, isFolder } = require('./files');
const { ifValid: ifValidString, isValid: isValidString } = require('./strings');
const { min } = require('./numbers');

const NODE_ENV = ifValidString(process.env.NODE_ENV, ''); 
const IS_NODE_ENV_SET = isValidString(NODE_ENV);
const IS_DEV = NODE_ENV.trim().toUpperCase().startsWith('DEV');
const IS_PROD = NODE_ENV.trim().toUpperCase().startsWith('PROD');

const NODE_DEBUG = ifValidString(process.env.NODE_DEBUG, '');
const IS_DEBUG = NODE_DEBUG.trim().toUpperCase() === 'TRUE';

const MODULE_PATH = ifValidString((process.mainModule || {}).filename, '');

const _packages = (curPath, results) => {

  if (!isValidString(curPath)) { return; }

  const curDir = isFolder(curPath)
    ? curPath
    : isFile(curPath)
      ? path.dirname(curPath)
      : null;

  if (!curDir) { return; }

  if (isFile(path.join(curDir, 'package.json'))) {
    results.items.push(path.join(curDir, 'package.json'));
  }

  try {
    const nextDir = path.dirname(curDir);
    _packages(nextDir, results);
  } catch (ex) {
    if (IS_DEV || IS_DEBUG) { console.error(ex); }
  }

};
const getPackages = () => {
  const results = { items: [] };
  _packages(MODULE_PATH, results);
  return results.items;
};
const PACKAGES = getPackages().filter(x => (x && x.trim().length > 0));

const getPackage = () => {
  if (PACKAGES.length === 0) { return undefined; }
  const length = min(PACKAGES.map(x => (x.length)));
  const result = PACKAGES.find(p => (p.length === length));
  return result;
};
const PACKAGE_PATH = getPackage();
const PACKAGE = isFile(PACKAGE_PATH) ? require(PACKAGE_PATH) : undefined;
const MODULE_NAME = (PACKAGE || {}).name;
const MODULE_DESC = (PACKAGE || {}).description || (PACKAGE || {}).name;
const MODULE_VER  = (PACKAGE || {}).version;

module.exports = {
  NODE_ENV,
  NODE_DEBUG,
  IS_DEV,
  IS_DEBUG,
  IS_PROD,
  IS_NODE_ENV_SET,
  
  MODULE_PATH,
  PACKAGE_PATH,
  PACKAGES,
  PACKAGE,

  MODULE_NAME,
  MODULE_DESC,
  MODULE_DESCRIPTION : MODULE_DESC,
  MODULE_VER,
  MODULE_VERSION : MODULE_VER
};
