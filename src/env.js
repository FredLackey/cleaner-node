const path = require('path');
const { isValid: isValidBool, ifValid: ifValidBool } = require('./booleans');
const { isFile, isFolder } = require('./files');
const { isNumber } = require('./numbers');
const { ifValid: ifValidString, isValid: isValidString } = require('./strings');
const { min } = require('./numbers');

const me = { };

Object.keys((process.env || {}))
  .filter(key => (isValidString(key) && key === key.toUpperCase()))
  .filter(key => (isValidString(process.env[key]) || isNumber(process.env[key]) || isValidBool(process.env[key])))
  .forEach(key => {
    if (isValidBool(process.env[key])) { me[key] = ifValidBool(process.env[key]); }
    else if (isNumber(process.env[key])) { me[key] = Number(process.env[key]); }
    else { me[key] = process.env[key].trim(); }
  });

me.NODE_ENV = ifValidString(process.env.NODE_ENV, '');
me.IS_NODE_ENV_SET = isValidString(me.NODE_ENV);
me.IS_DEV = me.NODE_ENV.trim().toUpperCase().startsWith('DEV');
me.IS_PROD = me.NODE_ENV.trim().toUpperCase().startsWith('PROD');

me.NODE_DEBUG = ifValidString(process.env.NODE_DEBUG, '');
me.IS_DEBUG = me.NODE_DEBUG.trim().toUpperCase() === 'TRUE';

me.MODULE_PATH = ifValidString((process.mainModule || {}).filename, '');

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
    if (me.IS_DEV || me.IS_DEBUG) { console.error(ex); }
  }

};
const getPackages = () => {
  const results = { items: [] };
  _packages(me.MODULE_PATH, results);
  return results.items;
};

me.PACKAGES = getPackages().filter(x => (x && x.trim().length > 0));

const getPackage = () => {
  if (me.PACKAGES.length === 0) { return undefined; }
  const length = min(me.PACKAGES.map(x => (x.length)));
  const result = me.PACKAGES.find(p => (p.length === length));
  return result;
};
me.PACKAGE_PATH = getPackage();
me.PACKAGE = isFile(me.PACKAGE_PATH) ? require(me.PACKAGE_PATH) : undefined;
me.MODULE_NAME = (me.PACKAGE || {}).name;
me.MODULE_DESC = (me.PACKAGE || {}).description || (me.PACKAGE || {}).name;
me.MODULE_VER  = (me.PACKAGE || {}).version;

me.MODULE_DESCRIPTION = me.MODULE_DESC;
me.MODULE_VERSION = me.MODULE_VER;

module.exports = me;
