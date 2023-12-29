/* eslint-disable no-use-before-define */
const isDefined         = require('./is-defined');
const isObject          = require('./is-object');
const isValidArray  = require('./is-valid-array');
const isValidString = require('./is-valid-string');
const removeSuffix      = require('./remove-suffix');

const DEFAULT_PARAMS = {
  id   : '',
  uid  : '',
  audit: [],
  force: false,
  nulls: false 
};
const DELIMETERS = ['-', '_'];

const removeId = (item, params) => {
  if (!isObject(item) || !isValidString(params.id) || !isDefined(item[params.id])) {
    return;
  }
  if (!params.force && (!params.uid || !isDefined(item[params.uid]))) {
    return;
  }
  Reflect.deleteProperty(item, params.id);
  if (isValidString(params.id) && isValidString(params.uid)) {
    if (isDefined(item[params.uid]) && !isDefined(item[params.id])) {
      item[params.id] = item[params.uid];
      Reflect.deleteProperty(item, params.uid);
    }
  }
};
const removeAudit = (item, params) => {
  if (!isObject(item) || !isValidArray(params.audit)) {
    return;
  }
  Object.keys(item).filter(x => (x && params.audit.includes(x))).forEach(key => {
    Reflect.deleteProperty(item, key);
  });
};
const moveUid = (item, params) => {
  if (!item) { return; }
  if (!isValidString(params.uid) || !isValidString(params.id)) {
    return;
  }
  if (isDefined(item[params.id]) || !isDefined(params.uid)) {
    return;
  }
  item[params.id] = item[params.uid];
  Reflect.deleteProperty(item, params.uid);
};
  
const moveIds = (item, params) => {
  if (!item || !isValidString(params.uid) || !isValidString(params.id)) {
    return;
  }
  for (let d = 0; d < DELIMETERS.length; d += 1) {
    const suffix = `${DELIMETERS[d]}${params.uid}`;
    const keysWithSuffix = Object.keys(item)
      .filter(x => (x && x.endsWith(suffix) && x.length > suffix.length));
    for (let s = 0; s < keysWithSuffix.length; s += 1) {
      const oldKey = keysWithSuffix[s];
      const newKey = removeSuffix(oldKey, suffix);
      if (!isDefined(item[oldKey]) || isDefined(item[newKey])) {
        continue;
      }
      item[newKey] = item[oldKey];
      Reflect.deleteProperty(item, oldKey);
    }
  } 
};
const trimIds = (item, params) => {
  if (!item) { return; }

  [params.uid, params.id].filter(isValidString).forEach(idKey => {
    DELIMETERS.forEach(delim => {
    const suffix = `${delim}${idKey}`;
    Object.keys(item)
      .filter(x => (x && x.endsWith(suffix) && x.length > suffix.length))
      .forEach(oldKey => {

        const newKey = removeSuffix(oldKey, suffix);
        if (isDefined(item[oldKey]) && !isDefined(item[newKey])) {
          item[newKey] = item[oldKey];
          Reflect.deleteProperty(item, oldKey);
        }
      });
    });
  });
};
const removeNulls = (item, params) => {
  if (!isObject(item) || params.nulls === true) {
    return;
  }
  Object.keys(item).filter(x => (x && item[x] === null)).forEach(key => {
    Reflect.deleteProperty(item, key);
  });
};

const processItems = (items, params) => {
  [].concat(items).filter(x => (x && isObject(x))).forEach(item => {
    processItem(item, params);
  });
  [].concat(items).filter(x => (x && isValidArray(x))).forEach(item => {
    processItems(item, params);
  });
};
const processItem = (item, params) => {
  if (!isObject(item)) {
    return;
  }
  
  if (!params.cache.items.includes(item)) {
    params.cache.items.push(item);
    removeId(item, params);
    removeAudit(item, params);
    moveIds(item, params);
    moveUid(item, params);
    trimIds(item, params);
    removeNulls(item, params);
  }

  Object.keys(item).filter(key => (isObject(item[key]))).forEach(key => {
    processItem(item[key], params);
  });
  Object.keys(item).filter(key => (isValidArray(item[key]))).forEach(key => {
    processItems(item[key], params);
  });
};

const cleanDto = (itemOrItems, params = DEFAULT_PARAMS) => {
  params.cache = {
    items: []
  };
  if (isValidArray(itemOrItems)) {
    processItems(itemOrItems, params);
  }
  if (isObject(itemOrItems)) {
    processItem(itemOrItems, params);
  }
};

module.exports = cleanDto;
