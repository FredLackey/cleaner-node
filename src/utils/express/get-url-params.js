const getParams = urlText => {
  const url = new URL(urlText);
  const keys = url.searchParams.keys();
  const result = {};
  keys.forEach(key => {
    result[key] = url.searchParams.get(key);
  });
  return result;
};

module.exports = getParams;
