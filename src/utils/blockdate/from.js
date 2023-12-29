const parse = require('./parse');

const fromBlockDate = (value) => {

  const item = parse(value);
  if (!item) { return null; }

  if (item.hour.value < 0) {
    return new Date(item.year.value, item.month.value, item.day.value);
  }
  if (item.second.value < 0) {
    return new Date(item.year.value, item.month.value, item.day.value, item.hour.value, item.minute.value);
  }
  if (item.millisecond.value < 0) {
    return new Date(item.year.value, item.month.value, item.day.value, item.hour.value, item.minute.value, item.second.value);
  }
  
  return new Date(item.year.value, item.month.value, item.day.value, item.hour.value, item.minute.value, item.second.value, item.millisecond.value);

};

module.exports = fromBlockDate;
