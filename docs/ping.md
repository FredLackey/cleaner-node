# ping

## Purpose
Performs a GET request to the root path ('/') to test connectivity with a server. Returns the response or 'FAILURE' if the request fails.

## Syntax
```javascript
const _ = require('cleaner-node');

_.ping(creds, headers)
```

## Parameters
- **creds** (object, optional): Credentials object for Authorization header. Defaults to `{}`.
- **headers** (object, optional): Additional request headers. Defaults to `{}`.

## Returns
- **Promise<any|string>**: A promise that resolves with the server response, or the string 'FAILURE' if the request fails.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Simple connectivity test
const result = await _.ping();

if (result === 'FAILURE') {
  console.log('Server is unreachable');
} else {
  console.log('Server is responding:', result);
}
```

### With Authentication
```javascript
const _ = require('cleaner-node');

// Test authenticated endpoint
const creds = { token: 'bearer-token-here' };
const response = await _.ping(creds);

if (response !== 'FAILURE') {
  console.log('Authenticated connection successful');
} else {
  console.log('Authentication or connection failed');
}
```

### Health Check with Custom Headers
```javascript
const _ = require('cleaner-node');

const headers = {
  'User-Agent': 'HealthChecker/1.0',
  'Accept': 'application/json'
};

const healthStatus = await _.ping({}, headers);
console.log('Health status:', healthStatus);
```

### Server Monitoring
```javascript
const _ = require('cleaner-node');

async function monitorServer() {
  const start = Date.now();
  const response = await _.ping();
  const duration = Date.now() - start;
  
  if (response === 'FAILURE') {
    console.log(`Server DOWN (${duration}ms)`);
  } else {
    console.log(`Server UP (${duration}ms)`);
  }
}

// Check every 30 seconds
setInterval(monitorServer, 30000);
```

## Related Functions
- **[doGet](./do-get.md)** - Performs HTTP GET requests.
- **[doPost](./do-post.md)** - Performs HTTP POST requests.
- **[doPut](./do-put.md)** - Performs HTTP PUT requests.
- **[doDelete](./do-delete.md)** - Performs HTTP DELETE requests.
