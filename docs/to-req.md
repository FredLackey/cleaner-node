# toReq

## Purpose
Transforms a raw request object into a standardized request format. This is a convenience alias for the `toRequest` function. Extracts path, request metadata, token, session information, and the request body while removing internal properties.

## Syntax
```javascript
const _ = require('cleaner-node');

_.toReq(req)
```

## Parameters
- **req** (object): The raw request object containing `_headers`, `_path`, and body data.

## Returns
- **object|undefined**: A standardized request object, or `undefined` if the input is not a valid object.

## Return Object Structure
- **path** (string): The request path from `req._path`.
- **request** (object): Request metadata.
  - **id** (string): The request ID from headers.
  - **date** (Date|undefined): The request date parsed from headers.
- **token** (string|undefined): The authorization token (Bearer prefix removed).
- **session** (object|undefined): The session object, potentially transformed.
- **body** (object): A copy of the request body with internal properties removed.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

const rawRequest = {
  _path: '/api/users',
  _headers: {
    'RestUtils-Request': 'req-123',
    'RestUtils-Time': '1640995200000',
    'RestUtils-Token': 'Bearer abc123xyz'
  },
  userId: 456,
  action: 'update',
  data: { name: 'John' }
};

const standardized = _.toReq(rawRequest);

console.log(standardized);
// {
//   path: '/api/users',
//   request: {
//     id: 'req-123',
//     date: 2022-01-01T00:00:00.000Z
//   },
//   token: 'abc123xyz',
//   session: undefined,
//   body: {
//     userId: 456,
//     action: 'update',
//     data: { name: 'John' }
//   }
// }
```

### With Session Data
```javascript
const _ = require('cleaner-node');

const requestWithSession = {
  _path: '/api/profile',
  _headers: {
    'RestUtils-Request': 'req-456',
    'RestUtils-Session': {
      session: 'sess-789',
      userId: 123,
      role: 'admin'
    }
  },
  profileData: { bio: 'Software developer' }
};

const result = _.toReq(requestWithSession);

console.log(result.session);
// {
//   id: 'sess-789',
//   userId: 123,
//   role: 'admin',
//   session: undefined  // Original session property removed
// }
```

### Middleware Usage
```javascript
const _ = require('cleaner-node');

// Express-like middleware
function requestTransformer(req, res, next) {
  // Add internal headers
  req._headers = req.headers;
  req._path = req.path;
  
  // Transform to standard format
  req.standardized = _.toReq(req);
  
  next();
}

// Usage in route handler
app.use(requestTransformer);

app.post('/api/data', (req, res) => {
  const { path, request, token, body } = req.standardized;
  
  console.log(`Processing ${request.id} for path ${path}`);
  
  if (!token) {
    return res.status(401).json({ error: 'Authorization required' });
  }
  
  // Process body...
});
```

### API Gateway Integration
```javascript
const _ = require('cleaner-node');

// Transform API Gateway event to standard format
function processApiGatewayEvent(event) {
  const rawRequest = {
    _path: event.path,
    _headers: {
      'RestUtils-Request': event.requestContext.requestId,
      'RestUtils-Time': event.requestContext.requestTimeEpoch.toString(),
      'RestUtils-Token': event.headers.Authorization
    },
    ...JSON.parse(event.body || '{}')
  };
  
  return _.toReq(rawRequest);
}

const lambdaHandler = async (event) => {
  const standardRequest = processApiGatewayEvent(event);
  
  if (!standardRequest) {
    return { statusCode: 400, body: 'Invalid request format' };
  }
  
  // Process standardRequest...
};
```

### Internal Property Cleanup
```javascript
const _ = require('cleaner-node');

const messyRequest = {
  _path: '/api/cleanup',
  _headers: { 'RestUtils-Request': 'req-cleanup' },
  _internalFlag: true,      // Will be removed
  _debugInfo: 'testing',    // Will be removed
  validData: 'keep this',
  moreData: { nested: 'value' }
};

const cleaned = _.toReq(messyRequest);

console.log(cleaned.body);
// {
//   validData: 'keep this',
//   moreData: { nested: 'value' }
// }
// Note: _internalFlag and _debugInfo are removed
```

### Invalid Inputs
```javascript
const _ = require('cleaner-node');

// Non-object inputs return undefined
console.log(_.toReq(null));      // undefined
console.log(_.toReq(undefined)); // undefined
console.log(_.toReq('string'));  // undefined
console.log(_.toReq(123));       // undefined
console.log(_.toReq([]));        // undefined
```

## Related Functions
- **[toRequest](./to-request.md)** - The full function that this aliases.
- **[toResponse](./to-response.md)** - Transforms response objects.
- **[copyObject](./copy-object.md)** - Creates deep copies of objects.
- **[isObject](./is-object.md)** - Checks if a value is an object.
- **[isDigits](./is-digits.md)** - Checks if a value contains only digits.
