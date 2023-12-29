const isObject     = require('./is-object');
const copyObject   = require('./copy-object');
const isUidFormat  = require('./is-uid-format');
const isGuidFormat = require('./is-guid-format');

const KEYS = ['uid'];

const getUid = (itemOrId, strict = false) => {

  if (isUidFormat(itemOrId)) {
    return itemOrId;
  }
  if (!strict && isGuidFormat(itemOrId)) {
    return itemOrId;
  }

  if (!isObject(itemOrId)) {
    return undefined;
  }

  const copy = copyObject(itemOrId);

  const key = KEYS.find(x => (
    x && (isUidFormat(copy[x]) || (!strict && isGuidFormat(copy[x])))
  ));

  return key
    ? copy[key]
    : undefined;
};

module.exports = getUid;
