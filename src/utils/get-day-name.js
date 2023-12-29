const isDate = require('./is-date');
const isIsoDate = require('./is-iso-date');
const fromIso = require('./from-iso-date');

const getDayName = (date) => {

  if (!isDate(date) && !isIsoDate(date)) {
    return undefined;
  }

  if (isIsoDate(date)) {
    date = fromIso(date);
  }

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
};

module.exports = getDayName;
