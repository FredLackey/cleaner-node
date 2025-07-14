# doPut

## Purpose
Performs an HTTP PUT request to the specified URL with request data and returns the JSON response. Handles errors gracefully by returning `null` on failure.

## Syntax
```javascript
const _ = require('cleaner-node');

_.doPut(url, data, creds, headers)
```

## Parameters
- **url** (string): The target URL for the PUT request.
- **data** (any): The request body data to send.
- **creds** (object, optional): Credentials object for Authorization header. Defaults to `{}`.
- **headers** (object, optional): Additional request headers. Defaults to `{}`.

## Returns
- **Promise<any|null>**: A promise that resolves with the JSON response data, or `null` if the request fails.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// PUT to update a resource
const updateData = { 
  id: 123,
  name: 'Updated Name',
  email: 'updated@example.com' 
};

const response = await _.doPut('https://api.example.com/users/123', updateData);

if (response) {
  console.log('User updated:', response);
} else {
  console.log('Update failed');
}
```

### With Authentication
```javascript
const _ = require('cleaner-node');

const creds = { token: 'bearer-token-here' };
const profileData = {
  bio: 'Software developer',
  location: 'San Francisco'
};

const result = await _.doPut(
  'https://api.example.com/profile',
  profileData,
  creds
);
```

### With Custom Headers
```javascript
const _ = require('cleaner-node');

const xmlData = '<user><name>John</name></user>';
const response = await _.doPut(
  'https://api.example.com/users/123',
  xmlData,
  {},
  { 'Content-Type': 'application/xml' }
);
```

## Related Functions
- **[doGet](./do-get.md)** - Performs HTTP GET requests.
- **[doPost](./do-post.md)** - Performs HTTP POST requests.
- **[doDelete](./do-delete.md)** - Performs HTTP DELETE requests.
- **[ping](./ping.md)** - Tests connectivity with a simple GET request.
