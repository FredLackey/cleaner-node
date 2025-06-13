# toUidFormat

## Purpose
Converts a value to a standardized UID format (32 uppercase alphanumeric characters). It accepts values that are already in UID format or GUID format. If the input value is not in either format, it returns null. Otherwise, it cleans the string by removing non-alphanumeric characters and converts it to uppercase.

## Syntax
```javascript
const _ = require('cleaner-node');

_.toUidFormat(value)
```

## Parameters
- **value** (string): The value to convert (expected to be in UID or GUID format)

## Returns
- **string|null**: The formatted UID string (32 uppercase alphanumeric chars) or `null` if the input is invalid

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Convert GUID to UID format
console.log(_.toUidFormat('550e8400-e29b-41d4-a716-446655440000'));
// '550E8400E29B41D4A716446655440000'

console.log(_.toUidFormat('6ba7b810-9dad-11d1-80b4-00c04fd430c8'));
// '6BA7B8109DAD11D180B400C04FD430C8'

// Convert UID to uppercase (normalize)
console.log(_.toUidFormat('550e8400e29b41d4a716446655440000'));
// '550E8400E29B41D4A716446655440000'

console.log(_.toUidFormat('A1b2C3d4E5f6789012345678901234aB'));
// 'A1B2C3D4E5F6789012345678901234AB'

// Already uppercase UID remains unchanged
console.log(_.toUidFormat('550E8400E29B41D4A716446655440000'));
// '550E8400E29B41D4A716446655440000'

// Invalid inputs return null
console.log(_.toUidFormat('invalid-string'));                           // null
console.log(_.toUidFormat(''));                                         // null
console.log(_.toUidFormat(null));                                       // null
console.log(_.toUidFormat(undefined));                                  // null
console.log(_.toUidFormat('550e8400-e29b-41d4'));                       // null (incomplete GUID)
console.log(_.toUidFormat('A1B2C3D4E5F6789012345678901234A'));          // null (31 chars, not valid UID)
```

### Practical Applications
```javascript
const _ = require('cleaner-node');

// Normalize database IDs to UID format
function normalizeToUid(id) {
  const normalized = _.toUidFormat(id);
  if (!normalized) {
    throw new Error(`Cannot normalize ID to UID format: ${id}. Must be valid GUID or UID format.`);
  }
  return normalized;
}

try {
  console.log(normalizeToUid('550e8400-e29b-41d4-a716-446655440000'));   // '550E8400E29B41D4A716446655440000'
  console.log(normalizeToUid('A1b2C3d4E5f6789012345678901234aB'));       // 'A1B2C3D4E5F6789012345678901234AB'
} catch (error) {
  console.error(error.message);
}

// File naming system using UID format
class FileManager {
  generateFileName(originalName) {
    const extension = originalName.split('.').pop();
    const uid = _.newUid();
    return `${uid}.${extension}`;
  }
  
  validateFileName(fileName) {
    const parts = fileName.split('.');
    if (parts.length < 2) {
      return { valid: false, error: 'File must have an extension' };
    }
    
    const baseName = parts[0];
    const extension = parts.slice(1).join('.');
    
    // Try to normalize to UID format
    const normalizedUid = _.toUidFormat(baseName);
    if (!normalizedUid) {
      return { 
        valid: false, 
        error: 'File name must be valid UID or GUID format',
        suggestion: this.generateFileName(`file.${extension}`)
      };
    }
    
    return { 
      valid: true, 
      normalizedName: `${normalizedUid}.${extension}`,
      uid: normalizedUid 
    };
  }
}

const fileManager = new FileManager();

console.log(fileManager.validateFileName('550e8400-e29b-41d4-a716-446655440000.pdf'));
// { valid: true, normalizedName: '550E8400E29B41D4A716446655440000.pdf', uid: '550E8400E29B41D4A716446655440000' }

console.log(fileManager.validateFileName('document.pdf'));
// { valid: false, error: 'File name must be valid UID or GUID format', suggestion: '...' }

// API key management
class ApiKeyManager {
  generateApiKey() {
    return _.toUidFormat(_.newGuid());
  }
  
  validateApiKey(apiKey) {
    const normalizedKey = _.toUidFormat(apiKey);
    if (!normalizedKey) {
      return { valid: false, error: 'API key must be valid UID or GUID format' };
    }
    
    return { valid: true, normalizedKey };
  }
  
  normalizeApiKey(apiKey) {
    // Accept both GUID and UID formats, normalize to UID
    return _.toUidFormat(apiKey);
  }
}

const apiKeyManager = new ApiKeyManager();

const newKey = apiKeyManager.generateApiKey();
console.log(`Generated API key: ${newKey}`);

console.log(apiKeyManager.validateApiKey('550e8400-e29b-41d4-a716-446655440000'));
// { valid: true, normalizedKey: '550E8400E29B41D4A716446655440000' }

console.log(apiKeyManager.validateApiKey('invalid-key'));
// { valid: false, error: 'API key must be valid UID or GUID format' }

// Session management with UID format
class SessionStore {
  constructor() {
    this.sessions = new Map();
  }
  
  createSession(userId) {
    const sessionId = _.toUidFormat(_.newGuid());
    const session = {
      id: sessionId,
      userId: _.toUidFormat(userId) || userId, // Normalize if possible
      createdAt: Date.now(),
      lastAccessed: Date.now()
    };
    
    this.sessions.set(sessionId, session);
    return sessionId;
  }
  
  getSession(sessionId) {
    const normalizedId = _.toUidFormat(sessionId);
    if (!normalizedId) {
      return null;
    }
    
    const session = this.sessions.get(normalizedId);
    if (session) {
      session.lastAccessed = Date.now();
    }
    
    return session;
  }
  
  deleteSession(sessionId) {
    const normalizedId = _.toUidFormat(sessionId);
    if (!normalizedId) {
      return false;
    }
    
    return this.sessions.delete(normalizedId);
  }
}

const sessionStore = new SessionStore();

// Create session with GUID format user ID
const sessionId = sessionStore.createSession('550e8400-e29b-41d4-a716-446655440000');
console.log(`Session created: ${sessionId}`);

// Retrieve session using either GUID or UID format
const session1 = sessionStore.getSession(sessionId);
const session2 = sessionStore.getSession('550e8400-e29b-41d4-a716-446655440000'); // GUID format
console.log(session1 === session2); // Should be the same session

// Cache key generation
class CacheManager {
  constructor() {
    this.cache = new Map();
  }
  
  generateKey(prefix, identifier) {
    const normalizedId = _.toUidFormat(identifier);
    if (!normalizedId) {
      throw new Error(`Invalid identifier for cache key: ${identifier}`);
    }
    
    return `${prefix}_${normalizedId}`;
  }
  
  set(key, data, ttl = 3600000) {
    // Normalize key if it contains a UID/GUID component
    const parts = key.split('_');
    if (parts.length === 2) {
      const normalizedId = _.toUidFormat(parts[1]);
      if (normalizedId) {
        key = `${parts[0]}_${normalizedId}`;
      }
    }
    
    this.cache.set(key, {
      data,
      expires: Date.now() + ttl
    });
    
    return key;
  }
  
  get(key) {
    // Normalize key for lookup
    const parts = key.split('_');
    if (parts.length === 2) {
      const normalizedId = _.toUidFormat(parts[1]);
      if (normalizedId) {
        key = `${parts[0]}_${normalizedId}`;
      }
    }
    
    const entry = this.cache.get(key);
    if (!entry) return null;
    
    if (Date.now() > entry.expires) {
      this.cache.delete(key);
      return null;
    }
    
    return entry.data;
  }
}

const cache = new CacheManager();

// Set cache with GUID format
const cacheKey1 = cache.set('user_550e8400-e29b-41d4-a716-446655440000', { name: 'John' });
console.log(`Cache key: ${cacheKey1}`); // 'user_550E8400E29B41D4A716446655440000'

// Retrieve with either format
const data1 = cache.get('user_550e8400-e29b-41d4-a716-446655440000'); // GUID format
const data2 = cache.get('user_550E8400E29B41D4A716446655440000');     // UID format
console.log(data1 === data2); // true (same data)

// URL generation for compact URLs
function generateCompactUrl(resourceId, baseUrl = 'https://short.ly') {
  const uidFormat = _.toUidFormat(resourceId);
  if (!uidFormat) {
    throw new Error(`Invalid resource ID for URL: ${resourceId}`);
  }
  
  return `${baseUrl}/${uidFormat}`;
}

console.log(generateCompactUrl('550e8400-e29b-41d4-a716-446655440000'));
// 'https://short.ly/550E8400E29B41D4A716446655440000'

console.log(generateCompactUrl('A1B2C3D4E5F6789012345678901234AB'));
// 'https://short.ly/A1B2C3D4E5F6789012345678901234AB'
```

### Edge Cases and Common Pitfalls

#### Input Format Detection
```javascript
const _ = require('cleaner-node');

// Function correctly identifies and converts different formats
console.log(_.toUidFormat('550e8400-e29b-41d4-a716-446655440000'));     // '550E8400E29B41D4A716446655440000' (GUID to UID)
console.log(_.toUidFormat('550E8400E29B41D4A716446655440000'));         // '550E8400E29B41D4A716446655440000' (UID, already uppercase)
console.log(_.toUidFormat('550e8400e29b41d4a716446655440000'));         // '550E8400E29B41D4A716446655440000' (UID to uppercase)

// Mixed case inputs are normalized
console.log(_.toUidFormat('550e8400-E29B-41d4-A716-446655440000'));     // '550E8400E29B41D4A716446655440000'
console.log(_.toUidFormat('550e8400E29B41d4A716446655440000'));         // '550E8400E29B41D4A716446655440000'
```

#### Invalid Input Handling
```javascript
const _ = require('cleaner-node');

// Various invalid inputs return null
console.log(_.toUidFormat(''));                                         // null (empty string)
console.log(_.toUidFormat('invalid'));                                  // null (not GUID or UID)
console.log(_.toUidFormat('550e8400-e29b-41d4'));                       // null (incomplete GUID)
console.log(_.toUidFormat('550E8400E29B41D4A716446655440'));            // null (31 chars, not valid UID)
console.log(_.toUidFormat('550E8400E29B41D4A716446655440000X'));        // null (33 chars, not valid UID)
console.log(_.toUidFormat('550e8400-e29b-41d4-a716-44665544000g'));     // null (invalid hex char)

// Non-string inputs
console.log(_.toUidFormat(null));                                       // null
console.log(_.toUidFormat(undefined));                                  // null
console.log(_.toUidFormat(123));                                        // null
console.log(_.toUidFormat({}));                                         // null
console.log(_.toUidFormat([]));                                         // null
```

#### Curly Braces Handling
```javascript
const _ = require('cleaner-node');

// Curly braces are handled by isGuidFormat validation
console.log(_.toUidFormat('{550e8400-e29b-41d4-a716-446655440000}'));   // '550E8400E29B41D4A716446655440000'
console.log(_.toUidFormat('{550E8400-E29B-41D4-A716-446655440000}'));   // '550E8400E29B41D4A716446655440000'

// Malformed braces result in null
console.log(_.toUidFormat('{550e8400-e29b-41d4-a716-446655440000'));    // null (missing closing brace)
console.log(_.toUidFormat('550e8400-e29b-41d4-a716-446655440000}'));    // null (missing opening brace)
```

#### Character Cleaning Process
```javascript
const _ = require('cleaner-node');

// Understanding how the cleaning works
const guid = '550e8400-e29b-41d4-a716-446655440000';
const uid = _.toUidFormat(guid);
console.log(`GUID: ${guid}`);
console.log(`UID:  ${uid}`);
// GUID: 550e8400-e29b-41d4-a716-446655440000
// UID:  550E8400E29B41D4A716446655440000

// The function removes hyphens and converts to uppercase
// Original: '550e8400-e29b-41d4-a716-446655440000'
// Cleaned:  '550e8400e29b41d4a716446655440000' (hyphens removed)
// Final:    '550E8400E29B41D4A716446655440000' (uppercase)

// Only alphanumeric characters are kept
const testString = '550e8400-e29b-41d4-a716-446655440000';
const cleanedString = _.cleanString(testString, _.ALPHANUMERIC);
console.log(`Cleaned: ${cleanedString}`);                               // '550e8400e29b41d4a716446655440000'
console.log(`Final:   ${cleanedString.toUpperCase()}`);                 // '550E8400E29B41D4A716446655440000'
```

#### Null vs Undefined Return
```javascript
const _ = require('cleaner-node');

// This function returns null (not undefined) for invalid inputs
const result = _.toUidFormat('invalid-input');
console.log(result);                                                     // null
console.log(result === null);                                           // true
console.log(result === undefined);                                      // false

// Compare with toGuidFormat which returns undefined
const guidResult = _.toGuidFormat('invalid-input');
console.log(guidResult);                                                 // undefined
console.log(guidResult === undefined);                                  // true
console.log(guidResult === null);                                       // false

// Handle both cases appropriately
function handleConversion(id) {
  const uidResult = _.toUidFormat(id);
  const guidResult = _.toGuidFormat(id);
  
  if (uidResult === null && guidResult === undefined) {
    console.log('Invalid ID format');
  } else {
    console.log(`UID: ${uidResult}, GUID: ${guidResult}`);
  }
}
```

## Implementation Details
The function performs conversion through these steps:

1. **Format Validation**: Uses `isUidFormat()` and `isGuidFormat()` to check input validity
   - If neither format is valid, returns `null`
2. **Character Cleaning**: Uses `cleanString()` with `ALPHANUMERIC` constant to remove non-alphanumeric characters
   - This removes hyphens from GUIDs and any other special characters
3. **Case Conversion**: Converts the cleaned string to uppercase using `toUpperCase()`

The cleaning process ensures that only alphanumeric characters (0-9, A-Z) remain in the final UID.

## Related Functions
- **[newUid](./new-uid.md)** - Generates new UID in standard format
- **[newGuid](./new-guid.md)** - Generates new GUID format
- **[isUidFormat](./is-uid-format.md)** - Validates UID format (used internally)
- **[isGuidFormat](./is-guid-format.md)** - Validates GUID format (used internally)
- **[toGuidFormat](./to-guid-format.md)** - Converts UID to GUID format
- **[cleanString](./clean-string.md)** - Cleans strings (used internally)

## Use Cases
- **Compact URL Generation**: Creating shorter URLs with UID format identifiers
- **File Naming**: Generating compact file names without special characters
- **API Key Management**: Normalizing API keys to consistent UID format
- **Session Management**: Using compact session identifiers
- **Cache Keys**: Creating compact cache keys without special characters
- **Database Storage**: Storing identifiers in compact format
- **Mobile Applications**: Using shorter identifiers for mobile-friendly URLs
- **QR Code Generation**: Creating compact identifiers for QR codes

## Performance Notes
- Fast validation using existing format checking functions
- Efficient string cleaning using `cleanString()` with predefined character set
- Simple case conversion using built-in `toUpperCase()`
- No regular expressions or complex parsing
- Minimal memory allocation for string operations

## Best Practices
- Always check the return value for `null` before using the result
- Use for systems that prefer compact identifiers without special characters
- Ideal for URL generation where shorter identifiers are preferred
- Perfect for file naming systems that avoid special characters
- Consider using for mobile applications where shorter identifiers are beneficial
- Handle `null` returns gracefully in your application logic
- Use consistently throughout your application for the same type of resource
- Document expected input formats when using in APIs or public interfaces
``` 