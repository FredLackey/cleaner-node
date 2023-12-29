const fs = require('fs');
const isFile = require('./is-file');

const readFile = (filePath) => {

  if (!isFile(filePath)) {
    return null;
  }


  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data;
  } catch (err) {
    console.debug(`Error reading JSON file ${filePath}: ${err}`);
    return null;
  }
};

module.exports = readFile;
