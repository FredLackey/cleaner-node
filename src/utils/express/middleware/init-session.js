const jwt = require('../../jwt');
const removePrefix = require('../../remove-prefix');

const { JWT_SECRET } = process.env;

const initSession = (req, res, next) => {

  const key    = Object.keys(req.headers).find(key => key.toLowerCase() === 'authorization');
  console.log('initSession', key);

  const header = key ? req.headers[key] : null;
  
  const token  = header ? removePrefix(header, 'Bearer').trim() : null;

  if (token) {
    
    req.session = jwt.decode(token);
    req.session = jwt.fromClaims(req.session);
    req.session = req.session || {};
    
    if (jwt.verify(token, JWT_SECRET, true)) {
      req.session.valid = true;
    } else {
      req.session.valid = false;
    }

    if (req.session.expiry) {
      req.session.expired = req.session.expiry < Date.now();
    }
  
  }

  return next();

};

module.exports = initSession;
