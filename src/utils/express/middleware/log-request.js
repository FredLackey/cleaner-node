const { NODE_ENV } = process.env;

const logRequest = (req, res, next) => {
  
  if (NODE_ENV === 'development') {
    console.log(JSON.stringify({
      url: `${req.method} ${req.url}`,
      origin: req.header('Origin'),
      referrer: req.header('Referrer'),
      body: req.body
    }, null, 2));
  }

  return next();
};

module.exports = logRequest;
