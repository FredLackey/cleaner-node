const ensureOrigin = (req, res, next) => {
  const value = req.header('Origin');
  if (!value) {
    return res.status(400).json({ message: 'Missing origin.' });
  }
  if (!value.toLowerCase().startsWith('http://') && !value.toLowerCase().startsWith('https://')) {
    return res.status(400).json({ message: 'Invalid origin.' });
  }
  const host = value.split('://')[1];
  if (!host) {
    return res.status(400).json({ message: 'Invalid host.' });
  }
  return next();
};

module.exports = ensureOrigin;
