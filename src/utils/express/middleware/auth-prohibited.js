const c = require('../../../constants');
const { METHOD_NOT_ALLOWED } = c.HTTP.STATUS.PHRASES;

const authProhibited = (req, res, next) => {
  if (req.session) {
    if (req.session.valid === true || req.session.expired === false) {
      return res.status(METHOD_NOT_ALLOWED.code).json({ message: 'Not accessible while logged in.' });
    }
  }
  return next();
};

module.exports = authProhibited;
