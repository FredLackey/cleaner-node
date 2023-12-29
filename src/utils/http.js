const fetch           = require('node-fetch');
const removePrefix    = require('./remove-prefix');
const removeSuffix    = require('./remove-suffix');
const isValidString = require('./is-valid-string');
const isObject        = require('./is-object');

const IS_EMPTY_STRING_OKAY = true;

const toUrl = (value = '/') => {

  let url = value;
      url = removePrefix(url, '/');
      url = removeSuffix(url, '/');

  return url.toLowerCase().startsWith('http')
    ? url
    : `http://${url}`;
};
const toBody = value => {
  if (isObject(value)) {
    return JSON.stringify(value);
  }
  if (isValidString(value)) {
    return value;
  }
  return undefined;
};

const addHeaders = (creds = {}, headers = {}) => {

  const { user, pass, password, token } = creds;

  const result = { 'Content-Type': 'application/json' };
  if (user || pass || password) {
    result.Authorization = `Basic ${Buffer.from(`${user}:${pass || password}`).toString('base64')}`;
  }
  if (token) {
    result.Authorization = `Bearer ${token}`;
  }

  Object.keys(headers)
    .filter(key => (key && isValidString(headers[key], IS_EMPTY_STRING_OKAY)))
    .forEach(key => {
      result[key] = headers[key];
    });
  
  return result;
};

const doPromise = ({ method = 'GET', url, data, creds = {}, headers = {} }) => {
  return fetch(toUrl(url), {
    // credentials: 'same-origin', // 'include', default: 'omit'
    method,
    body   : toBody(data),
    headers: addHeaders(creds, headers),
  })
  .then(response => response.json())
  .catch(error => console.debug(error));
};


const doGet = async (url, creds = {}, headers = {}) => {
  try {
    const response = await doPromise({ url, creds, headers });
    return response;
  } catch (ex) {
    console.debug(`doGet Error calling ${url}`);
    console.debug(ex);
    return null;
  }
};
const doPost = async (url, data, creds = {}, headers = {}) => {
  try {
    const response = await doPromise({ method: 'POST', url, data, creds, headers });
    return response;
  } catch (ex) {
    console.debug(`doPost Error calling ${url}`);
    console.debug(ex);
    return null;
  }
};
const doPut = async (url, data, creds = {}, headers = {}) => {
  try {
    const response = await doPromise({ method: 'PUT', url, data, creds, headers });
    return response;
  } catch (ex) {
    console.debug(`doPut Error calling ${url}`);
    console.debug(ex);
    return null;
  }
};
const doDelete = async (url, data, creds = {}, headers = {}) => {
  try {
    const response = await doPromise({ method: 'DELETE', url, data, creds, headers });
    return response;
  } catch (ex) {
    console.debug(`doDelete Error calling ${url}`);
    console.debug(ex);
    return null;
  }
};

const ping = async (creds = {}, headers = {}) => {
  const response = await doGet('/', creds, headers);
  return response || 'FAILURE';
};

module.exports = {
  ping,

  doGet,
  doPost,
  doPut,
  doDelete
};
