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

const setDefaults = () => {

  process.env.IS_NODE_ENV_SET = isValidString(process.env.NODE_ENV);
  process.env.IS_DEV = (process.env.NODE_ENV || '').trim().toUpperCase().startsWith('DEV');
  process.env.IS_PROD = (process.env.NODE_ENV || '').trim().toUpperCase().startsWith('PROD');

  process.env.IS_NODE_DEBUG_SET = isValidString(process.env.NODE_DEBUG);
  process.env.IS_DEBUG = (process.env.NODE_ENV || '').trim().toUpperCase() === 'TRUE';
 
  process.env.IS_MODULE_PATH_SET = isValidString(getModulePath());
  process.env.IS_PACKAGE_PATH_SET = isValidString(getPackagePath());
  
  me.PACKAGE = isFile(getPackagePath()) ? require(getPackagePath()) : undefined;
  me.MODULE_NAME = (me.PACKAGE || {}).name;

  me.MODULE_DESC = (me.PACKAGE || {}).description || (me.PACKAGE || {}).name;
  me.MODULE_DESCRIPTION = me.MODULE_DESC;

  me.MODULE_VER  = (me.PACKAGE || {}).version;
  me.MODULE_VERSION = me.MODULE_VER;
};

me.applyDefaults = defaults => {

  if (!isValidObject(defaults)) {
    throw new Error('Default values must be an object.'); 
  }

  Object.keys(defaults)
    .filter(key => (isValidString(key) && key === key.toUpperCase()))
    .filter(key => (isValidString(defaults[key]) || isNumber(defaults[key]) || isValidBool(defaults[key])))
    .filter(key => (notDefined(me[key]) && notDefined(process.env[key])))
    .forEach(key => {
      if (isValidBool(defaults[key])) { 
        me[key] = ifValidBool(defaults[key]); 
      }
      if (isNumber(defaults[key])) { 
        me[key] = Number(defaults[key]); 
      }
      if (isValidString(defaults[key])) {
        me[key] = defaults[key].trim();
      }
    });

  setDefaults();
};

module.exports = me;
