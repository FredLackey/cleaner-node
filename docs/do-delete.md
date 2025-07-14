# doDelete

## Purpose
Performs an HTTP DELETE request to the specified URL with optional request data and returns the JSON response. Handles errors gracefully by returning `null` on failure.

## Syntax
```javascript
const _ = require('cleaner-node');

_.doDelete(url, data, creds, headers)
```

## Parameters
- **url** (string): The target URL for the DELETE request.
- **data** (any, optional): Optional request body data to send.
- **creds** (object, optional): Credentials object for Authorization header. Defaults to `{}`.
- **headers** (object, optional): Additional request headers. Defaults to `{}`.

## Returns
- **Promise<any|null>**: A promise that resolves with the JSON response data, or `null` if the request fails.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Simple DELETE request
const response = await _.doDelete('https://api.example.com/users/123');

if (response) {
  console.log('User deleted:', response);
} else {
  console.log('Delete failed');
}
```

### With Authentication
```javascript
const _ = require('cleaner-node');

const creds = { token: 'bearer-token-here' };
const result = await _.doDelete(
  'https://api.example.com/posts/456',
  null,
  creds
);

if (result) {
  console.log('Post deleted successfully');
}
```

### With Request Body
```javascript
const _ = require('cleaner-node');

// DELETE with reason data
const deleteData = { 
  reason: 'User requested deletion',
  confirm: true 
};

const response = await _.doDelete(
  'https://api.example.com/account',
  deleteData,
  { token: 'auth-token' }
);
```

### Bulk Delete
```javascript
const _ = require('cleaner-node');

const bulkData = { 
  ids: [1, 2, 3, 4, 5],
  cascade: true 
};

const result = await _.doDelete(
  'https://api.example.com/bulk-delete',
  bulkData,
  { token: 'admin-token' }
);
```

## Related Functions
- **[doGet](./do-get.md)** - Performs HTTP GET requests.
- **[doPost](./do-post.md)** - Performs HTTP POST requests.
- **[doPut](./do-put.md)** - Performs HTTP PUT requests.
- **[ping](./ping.md)** - Tests connectivity with a simple GET request.
