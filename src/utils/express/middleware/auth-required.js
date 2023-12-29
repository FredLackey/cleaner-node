const c = require('../../../constants');
const { UNAUTHORIZED } = c.HTTP.STATUS.PHRASES;


const authRequired = (req, res, next) => {
  console.log('authRequired', req.session);
  if (!req.session) {
    return res.status(UNAUTHORIZED.code).json({ message: 'Login required.' });
  }
  if (req.session.valid !== true) {
    return res.status(UNAUTHORIZED.code).json({ message: 'Invalid session.' });
  }
  if (req.session.expired !== false) {
    return res.status(UNAUTHORIZED.code).json({ message: 'Expired session.' });
  }
  
  return next();
};

module.exports = authRequired;
