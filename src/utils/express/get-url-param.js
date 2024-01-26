const getUrlParam = (urlText, name) => {
  const url = new URL(urlText);
  return url.searchParams.get(name);
};

module.exports = getUrlParam;
