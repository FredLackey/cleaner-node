const toEpoch = (date = new Date()) => {
  const seconds = Math.floor(date.getTime() / 1000);
  return seconds;
};

module.exports = toEpoch;
