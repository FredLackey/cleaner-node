const getBlockDate = (value = new Date()) => {
  return [
    `${value.getFullYear()}`,
    `${value.getMonth() + 1}`.padStart(2, '0'),
    `${value.getDate()}`.padStart(2, '0'),
    `${value.getHours()}`.padStart(2, '0'),
    `${value.getMinutes()}`.padStart(2, '0'),
    `${value.getSeconds()}`.padStart(2, '0'),
    `${value.getMilliseconds()}`.padStart(3, '0'),
  ].join('');
};

module.exports = getBlockDate;
