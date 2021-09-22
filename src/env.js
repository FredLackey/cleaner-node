const path = require('path');
const { isValid: isValidObject, notDefined } = require('./objects');
const { isValid: isValidBool, ifValid: ifValidBool } = require('./booleans');
const { isFile, isFolder, findPackage } = require('./files');
const { isNumber } = require('./numbers');
const { ifValid: ifValidString, isValid: isValidString } = require('./strings');
const { min } = require('./numbers');

const me = { };

const getModulePath = () => {
  if (isValidString(me.MODULE_PATH)) {
    return me.MODULE_PATH;
  }
  me.MODULE_PATH = (process.mainModule || {}).filename;
  return me.MODULE_PATH;
};
const getPackagePath = () => {
  if (isValidString(me.PACKAGE_PATH)) {
    return me.PACKAGE_PATH;
  }
  me.PACKAGE_PATH = findPackage(getModulePath());
  return me.PACKAGE_PATH;
};
const getPackage = () => {
  if (isValidObject(me.PACKAGE)) {
    return me.PACKAGE;
  }
  if (!isValidString(me.PACKAGE_PATH)) {
    return {};
  }
  try {
    me.PACKAGE = require(getPackagePath());
  } catch (ex) {
    if (process.env.IS_DEV || process.env.IS_DEBUG) {
      console.error(ex);
    }
  }
  return me.PACKAGE;
};

const importProcess = () => {
  Object.keys(process.env)
  .filter(key => (isValidString(key) && key === key.toUpperCase()))
  .filter(key => (isValidString(process.env[key]) || isNumber(process.env[key]) || isValidBool(process.env[key])))
  .forEach(key => {
    if (isValidBool(process.env[key])) { 
      me[key] = ifValidBool(process.env[key]); 
    } else if (isNumber(process.env[key])) { 
      me[key] = Number(process.env[key]); 
    } else if (isValidString(process.env[key])) {
      me[key] = process.env[key].trim();
    }
  });
};

const setDefaults = () => {

  me.IS_NODE_ENV_SET = isValidString(me.NODE_ENV);
  me.IS_DEV = isValidString(me.NODE_ENV) && me.NODE_ENV.trim().toUpperCase().startsWith('DEV');
  me.IS_PROD = isValidString(me.NODE_ENV) && me.NODE_ENV.trim().toUpperCase().startsWith('PROD');

  me.IS_NODE_DEBUG_SET = isValidString(me.NODE_DEBUG);
  me.IS_DEBUG = isValidString(me.NODE_DEBUG) && me.NODE_DEBUG.trim().toUpperCase() === 'TRUE';
 
  me.IS_MODULE_PATH_SET = isValidString(getModulePath());
  me.IS_PACKAGE_PATH_SET = isValidString(getPackagePath());
  
  me.PACKAGE = getPackage();
  me.MODULE_NAME = (me.PACKAGE || {}).name;

  me.MODULE_DESC = (me.PACKAGE || {}).description || (me.PACKAGE || {}).name;
  me.MODULE_DESCRIPTION = me.MODULE_DESC;

  me.MODULE_VER  = (me.PACKAGE || {}).version;
  me.MODULE_VERSION = me.MODULE_VER;
};

importProcess();
setDefaults();

me.applyDefaults = defaults => {

  if (!isValidObject(defaults)) {
    throw new Error('Default values must be an object.'); 
  }

  Object.keys(defaults)
    .filter(key => (isValidString(key) && key === key.toUpperCase()))
    .filter(key => (isValidString(defaults[key]) || isNumber(defaults[key]) || isValidBool(defaults[key])))
    .filter(key => (notDefined(me[key])))
    .forEach(key => {
      if (isValidBool(defaults[key])) { 
        me[key] = ifValidBool(defaults[key]); 
      } else if (isNumber(defaults[key])) { 
        me[key] = Number(defaults[key]); 
      } else if (isValidString(defaults[key])) {
        me[key] = defaults[key].trim();
      }
    });

  setDefaults();
};

module.exports = me;
