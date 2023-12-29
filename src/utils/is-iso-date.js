const { isValidString } = require('./is-valid-string');
const removeSuffix = require('./remove-suffix');

const isIsoDate = value => {
  
  if (!isValidString(value)) { return false; }
  
  let date = null;
  try {
    date = new Date(Date.parse(value));
  } catch (ex) {
    return false;
  }

  // Shamefully borrowed from...
  // https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
  if (Object.prototype.toString.call(date) === '[object Date]') {
    // it is a date
    if (isNaN(date)) { // d.getTime() or d.valueOf() will also work
      // date object is not valid
      return false;
    // } else {
      // date object is valid
    }
  } else {
    // not a date object
    return false;
  }

  // Tweak the MS value without allowing the Date class to fix it.
  const isoString     = date.toISOString();
  const isoStringA    = isoString.substr(0, isoString.lastIndexOf('.') + 1);
  const isoStringB    = removeSuffix(isoString.substr(isoStringA.length), 'Z');
  const valueStringA  = value.substr(0, value.lastIndexOf('.') + 1);
  const valueStringB  = removeSuffix(value.substr(valueStringA.length), 'Z');
  const padLength     = isoStringB.length > valueStringB.length ? isoStringB.length : valueStringB.length;
  const isoMs         = isoStringB.padEnd(padLength, '0');
  const valMs         = valueStringB.padEnd(padLength, '0');
  if (isoStringA !== valueStringA) {
    return false;
  }
  if (isoMs !== valMs) {
    return false;
  }

  // Double-check with a UTC comparison
  const utcString = date.toUTCString();
  return utcString === (new Date(value)).toUTCString();
};

module.exports = isIsoDate;
