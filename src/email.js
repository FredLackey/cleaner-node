const email = require('email-addresses');
const gravatar = require('gravatar');
const strings = require('./strings');

const isValid = value => {
  if (!strings.isValid(value)) { return false; }
  try {
    const address = email.parseOneAddress(value);
    return (address &&
      strings.isValid(address.local) &&
      strings.isValid(address.domain));
  } catch (err) { return false; }
};

const getText = value => {
  if (!isValid(value)) { return undefined; }
  const address = email.parseOneAddress(value);
  return (address.local + '@' + address.domain);
};

const isValidText = value => {
  if (!isValid(value)) { return false; }
  const address = getText(value);
  return (address === value);
};

const getLocalPart = value => {
  if (!isValid(value)) { return undefined; }
  return email.parseOneAddress(value).local;
};

const isValidLocalPart = value => {
  if (!strings.isValid(value)) { return false; }
  if (!isValid(`${value}@nowhere.com`)) { return false; }
  return getLocalPart(`${value}@nowhere.com`);
};

const getDomainName = value => {
  if (!isValid(value)) { return undefined; }
  return email.parseOneAddress(value).domain;
};

const isValidDomainName = value => {
  if (!strings.isValid(value)) { return false; }
  if (!isValid(`test@${value}`)) { return false; }
  return getDomainName(`test@${value}`);
};

const toGravatarUrl = (value, options, protocol) => {
  if (!isValidText(value)) { return null; }
  return gravatar.url(value, options, protocol);
};

module.exports = {
  isValid,
  isValidText,
  isValidLocalPart,
  isValidDomainName,
  getLocalPart,
  getDomainName,
  getText,

  toGravatarUrl
};
