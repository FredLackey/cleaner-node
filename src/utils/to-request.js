const copyObject = require('./copy-object');
const isDigits   = require('./is-digits');
const isObject   = require('./is-object');

const toRequest = (req) => {
  
  if (!isObject(req)) {
    return undefined;
  }

  const head = req._headers || {};

  const token   = head['RestUtils-Token'];
  const session = head['RestUtils-Session'];

  const time = head['RestUtils-Time'];
  const date = isDigits(time) ? new Date(time) : undefined;

  const body = copyObject(req);
  if (body._headers) {
    Reflect.deleteProperty(body, '_headers');
  }
  if (body._path) {
    Reflect.deleteProperty(body, '_path');
  }


  return {
    path: req._path,
    request: {
      id: head['RestUtils-Request'],
      date,
    },
    token  : (token && token.startsWith('Bearer ') ? token.substring(7) : token),
    session : (session && session.session) 
      ? {
          ...session,
          id: session.session,
          session: undefined
        }
      : undefined,
    body
  };
};

module.exports = toRequest;
