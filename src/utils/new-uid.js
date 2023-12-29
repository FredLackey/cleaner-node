const newGuid = require('./new-guid');

const newUid = () => {
  const guid = newGuid();
  return guid.split('-').join('').toUpperCase();
};

module.exports = newUid;
