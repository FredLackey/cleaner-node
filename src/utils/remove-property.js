const isObject = require('./is-object');
const isValidArray = require('./is-valid-array');
const isDefined = require('./is-defined');

const remove = (obj, prop, cache) => {  
  if (isValidArray(obj)) {
    obj.forEach(x => remove(x, prop, cache));
    return;
  }
  if (!isObject(obj) || cache.items.includes(obj)) {
    return;
  }
  cache.items.push(obj);
  if (isDefined(obj[prop])) {
    Reflect.deleteProperty(obj, prop);
  }

  Object.keys(obj)
    .filter(key => (key && isObject(obj[key])))
    .forEach(key => remove(obj[key], prop, cache));

  Object.values(obj)
    .filter(key => (key && isValidArray(key)))
    .forEach(key => remove(obj[key], prop, cache));
  
};

const removeProperty = (obj, prop) => {
  const cache = {
    items: []
  };
  remove(obj, prop, cache);
  return obj;
};

module.exports = removeProperty;
