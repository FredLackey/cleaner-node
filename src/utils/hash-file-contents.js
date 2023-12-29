const crypto = require('crypto');
const fs     = require('fs');
const c      = require('../constants');

const isFile            = require('./is-file');
const { isValidString } = require('./is-valid-string');
const getFileContents   = require('./get-file-contents');
const readLines         = require('./read-lines');

const ALGORITHMS = [
  'md5', 'sha1', 'sha256'
];
const DIGESTS = [
  'hex', 'base64'
];
const DEFAULT_DIGEST = 'hex';
const DEFAULT_ALGORITHM = 'md5';

const hashFileContents = async (value, trim = false, algorithm = DEFAULT_ALGORITHM, digest = DEFAULT_DIGEST) => {

  if (!isFile(value)) { 
    return null; 
  }
  if (!isValidString(algorithm) || !ALGORITHMS.includes(algorithm.trim().toLowerCase())) {
    console.error(`Invalid algorithm: ${algorithm}`);
    return undefined;
  }
  if (!isValidString(digest) || !DIGESTS.includes(digest.trim().toLowerCase())) {
    console.error(`Invalid digest: ${digest}`);
    return undefined;
  }

  let fileBuffer;
  try {
    if (!trim) {
      fileBuffer = getFileContents(value);
    } else {
      fileBuffer = await readLines(value);
      fileBuffer = [].concat(fileBuffer).filter(x => (isValidString(x))).map(x => x.trim()).join('\n');
    }
  } catch (ex) {
    console.error(`Failure reading file: ${value}`);
    return undefined;
  }

  let hashSum;
  try {
    hashSum = crypto.createHash(algorithm.trim().toLowerCase());
  } catch (ex) {
    console.error(`Failure creating hash: ${algorithm}`);
    return undefined;
  }

  try {
    hashSum.update(fileBuffer);
  } catch (ex) {
    console.error(`Failure updating hash: ${value}`);
    return undefined;
  }

  let result;
  try {
    result = hashSum.digest(digest.trim().toLowerCase());
  } catch (ex) {
    console.error(`Failure digesting hash: ${digest}`);
    return undefined;
  }

  return result;
};

module.exports = hashFileContents;
