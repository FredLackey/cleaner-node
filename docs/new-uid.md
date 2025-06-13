# newUid

## Purpose
Generates a new unique identifier (UID) string. It creates a standard GUID, removes the hyphens, and converts it to uppercase, resulting in a 32-character uppercase alphanumeric UID string.

## Syntax
```javascript
const _ = require('cleaner-node');

_.newUid()
```

## Parameters
None

## Returns
- **string**: A 32-character uppercase alphanumeric UID string

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Generate new UIDs
console.log(_.newUid());                                     // 'A1B2C3D4E5F6789012345678901234AB'
console.log(_.newUid());                                     // 'F7E8D9C0B1A2345678901234567890CD'
console.log(_.newUid());                                     // '123456789ABCDEF0123456789ABCDEF0'

// Each call generates a unique UID
const uid1 = _.newUid();
const uid2 = _.newUid();
console.log(uid1 === uid2);                                  // false (extremely unlikely to be equal)

// UID format characteristics
const uid = _.newUid();
console.log(uid.length);                                     // 32
console.log(/^[A-Z0-9]{32}$/.test(uid));                     // true (uppercase alphanumeric)
console.log(uid.includes('-'));                              // false (no hyphens)
```

### Practical Applications
```javascript
const _ = require('cleaner-node');

// Database record IDs
function createUser(userData) {
  return {
    id: _.newUid(),
    ...userData,
    createdAt: new Date().toISOString()
  };
}

const user = createUser({ name: 'John Doe', email: 'john@example.com' });
console.log(user);
// {
//   id: 'A1B2C3D4E5F6789012345678901234AB',
//   name: 'John Doe',
//   email: 'john@example.com',
//   createdAt: '2024-01-01T12:00:00.000Z'
// }

// Session management
class SessionManager {
  constructor() {
    this.sessions = new Map();
  }
  
  createSession(userId) {
    const sessionId = _.newUid();
    const session = {
      id: sessionId,
      userId,
      createdAt: Date.now(),
      lastAccessed: Date.now()
    };
    
    this.sessions.set(sessionId, session);
    return sessionId;
  }
  
  getSession(sessionId) {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.lastAccessed = Date.now();
    }
    return session;
  }
}

const sessionManager = new SessionManager();
const sessionId = sessionManager.createSession('user123');
console.log(`Session created: ${sessionId}`);

// File naming
function generateUniqueFileName(originalName) {
  const extension = originalName.split('.').pop();
  const uid = _.newUid();
  return `${uid}.${extension}`;
}

console.log(generateUniqueFileName('document.pdf'));        // 'A1B2C3D4E5F6789012345678901234AB.pdf'
console.log(generateUniqueFileName('image.jpg'));          // 'F7E8D9C0B1A2345678901234567890CD.jpg'

// API request tracking
function createApiRequest(endpoint, data) {
  const requestId = _.newUid();
  
  console.log(`[${requestId}] Starting request to ${endpoint}`);
  
  return {
    id: requestId,
    endpoint,
    data,
    timestamp: Date.now(),
    status: 'pending'
  };
}

const request = createApiRequest('/api/users', { name: 'John' });
console.log(request);

// Cache keys
class CacheManager {
  constructor() {
    this.cache = new Map();
  }
  
  generateKey(prefix = 'cache') {
    return `${prefix}_${_.newUid()}`;
  }
  
  set(data, prefix) {
    const key = this.generateKey(prefix);
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
    return key;
  }
  
  get(key) {
    return this.cache.get(key);
  }
}

const cache = new CacheManager();
const cacheKey = cache.set({ users: [] }, 'users');
console.log(`Data cached with key: ${cacheKey}`);

// Transaction IDs
function processPayment(amount, currency) {
  const transactionId = _.newUid();
  
  return {
    transactionId,
    amount,
    currency,
    status: 'processing',
    timestamp: new Date().toISOString()
  };
}

const payment = processPayment(99.99, 'USD');
console.log(`Payment transaction: ${payment.transactionId}`);
```

### Edge Cases and Common Pitfalls

#### UID Format Consistency
```javascript
const _ = require('cleaner-node');

// UIDs are always 32 characters, uppercase, alphanumeric
const uid = _.newUid();
console.log(uid.length);                                     // Always 32
console.log(uid === uid.toUpperCase());                      // Always true
console.log(/^[A-Z0-9]+$/.test(uid));                       // Always true
console.log(uid.includes('-'));                              // Always false

// Comparison with GUID format
const guid = _.newGuid();
const uid2 = _.newUid();
console.log(guid.length);                                    // 36 (includes hyphens)
console.log(uid2.length);                                    // 32 (no hyphens)
console.log(guid.includes('-'));                             // true
console.log(uid2.includes('-'));                             // false
```

#### Uniqueness Considerations
```javascript
const _ = require('cleaner-node');

// Generate multiple UIDs to demonstrate uniqueness
const uids = new Set();
for (let i = 0; i < 1000; i++) {
  uids.add(_.newUid());
}
console.log(uids.size);                                      // Should be 1000 (all unique)

// Collision probability is extremely low
function testUniqueness(count = 10000) {
  const generated = new Set();
  let collisions = 0;
  
  for (let i = 0; i < count; i++) {
    const uid = _.newUid();
    if (generated.has(uid)) {
      collisions++;
    }
    generated.add(uid);
  }
  
  return {
    generated: count,
    unique: generated.size,
    collisions
  };
}

console.log(testUniqueness(10000));
// { generated: 10000, unique: 10000, collisions: 0 } (expected)
```

#### Storage and Database Considerations
```javascript
const _ = require('cleaner-node');

// UIDs are ideal for database primary keys
const users = [
  { id: _.newUid(), name: 'Alice' },
  { id: _.newUid(), name: 'Bob' },
  { id: _.newUid(), name: 'Charlie' }
];

// Efficient for indexing (fixed length, alphanumeric)
function createDatabaseRecord(data) {
  return {
    id: _.newUid(),
    ...data,
    created_at: new Date(),
    updated_at: new Date()
  };
}

// URL-safe (no special characters)
function createShareableLink(resourceId) {
  const shareId = _.newUid();
  return `https://example.com/share/${shareId}`;
}

console.log(createShareableLink('resource123'));
// 'https://example.com/share/A1B2C3D4E5F6789012345678901234AB'
```

## Implementation Details
The function generates a new GUID using `newGuid()`, then removes all hyphens and converts the result to uppercase:

```javascript
const newUid = () => {
  const guid = newGuid();
  return guid.split('-').join('').toUpperCase();
};
```

This ensures that:
1. The underlying randomness comes from the same source as GUIDs
2. The format is consistent (32 uppercase alphanumeric characters)
3. No hyphens are included in the result

## Related Functions
- **[newGuid](./new-guid.md)** - Generates new GUID with hyphens (source for UID generation)
- **[isUidFormat](./is-uid-format.md)** - Validates UID format
- **[isGuidFormat](./is-guid-format.md)** - Validates GUID format
- **[toUidFormat](./to-uid-format.md)** - Converts GUID to UID format
- **[toGuidFormat](./to-guid-format.md)** - Converts UID to GUID format

## Use Cases
- **Database Primary Keys**: Unique identifiers for database records
- **Session Management**: Creating unique session identifiers
- **File Naming**: Generating unique file names to prevent conflicts
- **API Request Tracking**: Unique identifiers for request/response tracking
- **Cache Keys**: Creating unique cache identifiers
- **Transaction IDs**: Unique identifiers for financial or business transactions
- **URL Generation**: Creating unique, shareable URLs
- **Temporary Resource IDs**: Identifiers for temporary resources or processes

## Performance Notes
- Very fast generation (builds on efficient GUID generation)
- Minimal string manipulation overhead
- Fixed 32-character length is efficient for storage and indexing
- No network calls or external dependencies
- Safe for high-frequency generation

## Best Practices
- Use for systems that prefer compact identifiers without hyphens
- Ideal for database primary keys and indexes
- Perfect for URL parameters (no special characters to encode)
- Store as fixed-length strings in databases for optimal performance
- Consider using GUIDs if you need the standard format with hyphens
- Always treat as opaque identifiers (don't parse or extract meaning)
- Use consistently throughout your application for the same type of resource 