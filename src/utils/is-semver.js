const isValidString = require('./is-valid-string');
// const isDigits = require('./is-digits');
const semver = require('semver');

// const isSemver = value => {
//   if (!isValidString(value) || value.length < 5) {
//     return false;
//   }
//   if (value.startsWith('v')) {
//     value = value.slice(1);
//   }
//   const clean = value.split('.').filter(x => isDigits(x)).join('.');
//   if (value !== clean) {
//     return false;
//   }
//   return true;
// }

const isSemver = value => {
  return isValidString(value) && semver.valid(value) !== null;
};

module.exports = isSemver;
