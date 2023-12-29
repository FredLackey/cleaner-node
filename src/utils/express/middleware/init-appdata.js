const initAppData = (req, res, next) => {
  req.appData = req.appData || {};
  return next();
};

module.exports = initAppData;
