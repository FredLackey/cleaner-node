const hasString = (value, target, isCaseSensitive = false) => {
  if (typeof value !== 'string') { return false; }
  if (typeof target !== 'string') { return false; }
  return (isCaseSensitive && value.indexOf(target) >= 0) ||
    (value.toUpperCase().indexOf(target.toUpperCase()) >= 0);
};

module.exports = hasString;
