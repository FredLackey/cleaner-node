const DEFAULT_FORMAT = 'YYYYMMDDHHmmSS:SSS';

const getBlockDate = (value = new Date(), format = DEFAULT_FORMAT) => {

  const result = [
    `${value.getFullYear()}`,
    `${value.getMonth() + 1}`.padStart(2, '0'),
    `${value.getDate()}`.padStart(2, '0'),
    `${value.getHours()}`.padStart(2, '0'),
    `${value.getMinutes()}`.padStart(2, '0'),
    `${value.getSeconds()}`.padStart(2, '0'),
    `${value.getMilliseconds()}`.padStart(3, '0'),
  ].join('');

  return format ? result.substring(0, format.length) : result;

};

module.exports = getBlockDate;
