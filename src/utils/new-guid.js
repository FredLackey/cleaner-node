const { v4: uuidV4 } = require('uuid');

const newGuid = () => {
  return uuidV4();
};

module.exports = newGuid;
