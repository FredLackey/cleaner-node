# doGet

## Purpose
Performs an HTTP GET request to the specified URL and returns the JSON response. Handles errors gracefully by returning `null` on failure.

## Syntax
```javascript
const _ = require('cleaner-node');

_.doGet(url, creds, headers)
```

## Parameters
- **url** (string): The target URL for the GET request.
- **creds** (object, optional): Credentials object for Authorization header. Defaults to `{}`.
- **headers** (object, optional): Additional request headers. Defaults to `{}`.

## Returns
- **Promise<any|null>**: A promise that resolves with the JSON response data, or `null` if the request fails.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Simple GET request
const data = await _.doGet('https://api.example.com/users');
console.log(data); // API response or null

// GET with custom headers
const result = await _.doGet('https://api.example.com/data', {}, {
  'Accept': 'application/json',
  'User-Agent': 'MyApp/1.0'
});
```

### With Credentials
```javascript
const _ = require('cleaner-node');

// GET with authentication
const creds = { token: 'bearer-token-here' };
const userData = await _.doGet('https://api.example.com/profile', creds);

if (userData) {
  console.log('User data:', userData);
} else {
  console.log('Request failed');
}
```

## Related Functions
- **[doPost](./do-post.md)** - Performs HTTP POST requests.
- **[doPut](./do-put.md)** - Performs HTTP PUT requests.
- **[doDelete](./do-delete.md)** - Performs HTTP DELETE requests.
- **[ping](./ping.md)** - Tests connectivity with a simple GET request.
