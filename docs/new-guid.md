# newGuid

Generates a new version 4 UUID (GUID) using the industry-standard `uuid` library.

## Purpose

This function creates a universally unique identifier (UUID) following the version 4 specification. UUIDs are 128-bit values that are practically guaranteed to be unique across time and space, making them ideal for database primary keys, session identifiers, file names, and any scenario where you need a unique identifier without coordination between systems.

## Syntax

```javascript
newGuid()
```

## Parameters

This function takes no parameters.

## Return Value

- **Type**: `string`
- **Returns**: A standard v4 UUID string in the format `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` where each `x` is a hexadecimal digit (0-9, a-f)

## Examples

### Basic Usage

```javascript
const _ = require('cleaner-node');

// Generate new GUIDs
console.log(_.newGuid()); // '550e8400-e29b-41d4-a716-446655440000'
console.log(_.newGuid()); // 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
console.log(_.newGuid()); // '6ba7b810-9dad-11d1-80b4-00c04fd430c8'

// Each call generates a unique value
const guid1 = _.newGuid();
const guid2 = _.newGuid();
console.log(guid1 === guid2); // false (extremely unlikely to be true)
```

### Database Primary Keys

```javascript
const _ = require('cleaner-node');

// Creating database records with GUID primary keys
function createUser(userData) {
  return {
    id: _.newGuid(),
    ...userData,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

const user1 = createUser({ name: 'John Doe', email: 'john@example.com' });
const user2 = createUser({ name: 'Jane Smith', email: 'jane@example.com' });

console.log(user1.id); // '123e4567-e89b-12d3-a456-426614174000'
console.log(user2.id); // '987fcdeb-51a2-43d1-b789-123456789abc'
```

### Session Management

```javascript
const _ = require('cleaner-node');

class SessionManager {
  constructor() {
    this.sessions = new Map();
  }
  
  createSession(userId) {
    const sessionId = _.newGuid();
    this.sessions.set(sessionId, {
      userId,
      createdAt: Date.now(),
      lastAccessed: Date.now()
    });
    return sessionId;
  }
  
  getSession(sessionId) {
    return this.sessions.get(sessionId);
  }
}

const sessionManager = new SessionManager();
const sessionId = sessionManager.createSession('user123');
console.log(sessionId); // 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
```

### File Naming

```javascript
const _ = require('cleaner-node');
const fs = require('fs');

function saveTemporaryFile(data, extension = '.tmp') {
  const filename = _.newGuid() + extension;
  const filepath = `/tmp/${filename}`;
  
  fs.writeFileSync(filepath, data);
  return filepath;
}

// Create unique temporary files
const file1 = saveTemporaryFile('Hello World', '.txt');
const file2 = saveTemporaryFile('{"key": "value"}', '.json');

console.log(file1); // '/tmp/f47ac10b-58cc-4372-a567-0e02b2c3d479.txt'
console.log(file2); // '/tmp/6ba7b810-9dad-11d1-80b4-00c04fd430c8.json'
```

### API Request Tracking

```javascript
const _ = require('cleaner-node');

function logApiRequest(req, res, next) {
  const requestId = _.newGuid();
  req.requestId = requestId;
  
  console.log(`[${requestId}] ${req.method} ${req.path} - Started`);
  
  res.on('finish', () => {
    console.log(`[${requestId}] ${req.method} ${req.path} - Completed (${res.statusCode})`);
  });
  
  next();
}

// Usage in Express.js
// app.use(logApiRequest);
```

### Batch Processing

```javascript
const _ = require('cleaner-node');

function processBatch(items) {
  const batchId = _.newGuid();
  console.log(`Starting batch ${batchId} with ${items.length} items`);
  
  const results = items.map((item, index) => {
    const itemId = _.newGuid();
    return {
      batchId,
      itemId,
      index,
      data: item,
      processedAt: new Date()
    };
  });
  
  console.log(`Completed batch ${batchId}`);
  return results;
}

const batch = processBatch(['item1', 'item2', 'item3']);
console.log(batch[0].batchId); // '123e4567-e89b-12d3-a456-426614174000'
console.log(batch[0].itemId);  // '987fcdeb-51a2-43d1-b789-123456789abc'
```

## UUID Version 4 Specification

Version 4 UUIDs are generated using random or pseudo-random numbers:

- **Format**: `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`
- **Length**: 36 characters including hyphens (32 hex digits + 4 hyphens)
- **Version**: The 13th character is always '4'
- **Variant**: The 17th character is always '8', '9', 'a', or 'b'
- **Randomness**: 122 bits of randomness (6 bits are fixed for version and variant)

```javascript
const _ = require('cleaner-node');

const guid = _.newGuid();
console.log(guid.length); // 36
console.log(guid[14]); // '4' (version identifier)
console.log(['8', '9', 'a', 'b'].includes(guid[19])); // true (variant identifier)
```

## Common Use Cases

1. **Database Primary Keys**: Unique identifiers for database records
2. **Session IDs**: Unique session identifiers for web applications
3. **File Names**: Unique file names to prevent conflicts
4. **Request Tracking**: Correlation IDs for distributed systems
5. **Cache Keys**: Unique keys for caching systems
6. **Message IDs**: Unique identifiers for messages in queues
7. **Transaction IDs**: Unique identifiers for financial transactions
8. **API Keys**: Base for generating API keys (with additional processing)

## Performance Notes

- Very fast generation (microseconds per GUID)
- Uses cryptographically strong random number generation
- No network calls or external dependencies beyond the uuid library
- Safe for high-frequency generation scenarios

## Uniqueness Guarantees

While theoretically possible for duplicates to occur, the probability is so low that it's considered practically impossible:

- **Probability of collision**: Approximately 1 in 2^122 (5.3 x 10^36)
- **Safe generation rate**: Billions of GUIDs per second for centuries without collision
- **No coordination required**: Can be generated independently across systems

## Error Handling

This function does not throw errors under normal circumstances. The underlying `uuid` library handles all edge cases internally.

```javascript
const _ = require('cleaner-node');

// Safe to call repeatedly
const guids = Array.from({ length: 1000 }, () => _.newGuid());
console.log(guids.length); // 1000
console.log(new Set(guids).size); // 1000 (all unique)
```

## Related Functions

- [`newUid`](./new-uid.md) - Generates a shorter UID without hyphens
- [`isGuidFormat`](./is-guid-format.md) - Validates if a string is in GUID format
- [`toGuidFormat`](./to-guid-format.md) - Converts a string to GUID format
- [`newCode`](./new-code.md) - Generates shorter random codes
- [`newSalt`](./new-salt.md) - Generates random salt for cryptographic purposes

## Constants

- [`EMPTY_GUID`](./README.md#constants) - Constant representing an empty GUID (`00000000-0000-0000-0000-000000000000`)

## See Also

- [Utility Functions](./README.md#utility-functions) - All utility functions
- [UUID RFC 4122](https://tools.ietf.org/html/rfc4122) - Official UUID specification 