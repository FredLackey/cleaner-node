# doPost

## Purpose
Performs an HTTP POST request to the specified URL with request data and returns the JSON response. Handles errors gracefully by returning `null` on failure.

## Syntax
```javascript
const _ = require('cleaner-node');

_.doPost(url, data, creds, headers)
```

## Parameters
- **url** (string): The target URL for the POST request.
- **data** (any): The request body data to send.
- **creds** (object, optional): Credentials object for Authorization header. Defaults to `{}`.
- **headers** (object, optional): Additional request headers. Defaults to `{}`.

## Returns
- **Promise<any|null>**: A promise that resolves with the JSON response data, or `null` if the request fails.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// POST with JSON data
const postData = { name: 'John', email: 'john@example.com' };
const response = await _.doPost('https://api.example.com/users', postData);

if (response) {
  console.log('User created:', response);
} else {
  console.log('Request failed');
}
```

### With Custom Headers
```javascript
const _ = require('cleaner-node');

const formData = { username: 'user', password: 'pass' };
const result = await _.doPost(
  'https://api.example.com/login',
  formData,
  {},
  { 'Content-Type': 'application/x-www-form-urlencoded' }
);
```

### With Authentication
```javascript
const _ = require('cleaner-node');

const creds = { token: 'bearer-token-here' };
const updateData = { status: 'active' };

const response = await _.doPost(
  'https://api.example.com/update',
  updateData,
  creds
);
```

## Related Functions
- **[doGet](./do-get.md)** - Performs HTTP GET requests.
- **[doPut](./do-put.md)** - Performs HTTP PUT requests.
- **[doDelete](./do-delete.md)** - Performs HTTP DELETE requests.
- **[ping](./ping.md)** - Tests connectivity with a simple GET request.
