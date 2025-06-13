# isUidFormat

## Purpose
Checks if a value is a valid UID format. A valid UID must be exactly 32 characters long and contain only alphanumeric characters (no hyphens or special characters).

## Syntax
```javascript
const _ = require('cleaner-node');

_.isUidFormat(value)
```

## Parameters
- **value** (string): The value to check for UID format compliance

## Returns
- **boolean**: `true` if the value is a valid UID format, `false` otherwise

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid UID formats (32 alphanumeric characters)
console.log(_.isUidFormat('A1B2C3D4E5F6789012345678901234AB'));          // true
console.log(_.isUidFormat('550E8400E29B41D4A716446655440000'));          // true
console.log(_.isUidFormat('00000000000000000000000000000000'));          // true
console.log(_.isUidFormat('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF'));          // true
console.log(_.isUidFormat('123456789ABCDEF0123456789ABCDEF0'));          // true

// Mixed case is valid (alphanumeric)
console.log(_.isUidFormat('A1b2C3d4E5f6789012345678901234aB'));          // true
console.log(_.isUidFormat('550e8400E29B41d4A716446655440000'));          // true

// Invalid formats
console.log(_.isUidFormat('550e8400-e29b-41d4-a716-446655440000'));      // false (contains hyphens)
console.log(_.isUidFormat('A1B2C3D4E5F6789012345678901234A'));           // false (31 chars - too short)
console.log(_.isUidFormat('A1B2C3D4E5F6789012345678901234ABC'));         // false (33 chars - too long)
console.log(_.isUidFormat('A1B2C3D4E5F6789012345678901234A!'));          // false (contains special char)
console.log(_.isUidFormat('A1B2C3D4E5F6789012345678901234A '));          // false (contains space)
console.log(_.isUidFormat(''));                                          // false (empty string)
console.log(_.isUidFormat(null));                                        // false (not a string)
console.log(_.isUidFormat(undefined));                                   // false (not a string)
```

### Practical Applications
```javascript
const _ = require('cleaner-node');

// Validate database record IDs
function validateRecordId(id) {
  if (!_.isUidFormat(id)) {
    throw new Error(`Invalid record ID format: ${id}. Must be 32 alphanumeric characters.`);
  }
  return id.toUpperCase();
}

try {
  const validId = validateRecordId('A1B2C3D4E5F6789012345678901234AB');
  console.log(`Valid ID: ${validId}`);
} catch (error) {
  console.error(error.message);
}

try {
  validateRecordId('invalid-id');
} catch (error) {
  console.error(error.message);                               // 'Invalid record ID format: invalid-id. Must be 32 alphanumeric characters.'
}

// Session ID validation
class SessionManager {
  isValidSessionId(sessionId) {
    return _.isUidFormat(sessionId);
  }
  
  getSession(sessionId) {
    if (!this.isValidSessionId(sessionId)) {
      return { error: 'Invalid session ID format' };
    }
    
    // Proceed with session lookup
    return this.sessions.get(sessionId);
  }
  
  createSession(userId) {
    const sessionId = _.newUid(); // This will create a valid UID format
    const session = {
      id: sessionId,
      userId,
      createdAt: Date.now()
    };
    
    this.sessions.set(sessionId, session);
    return sessionId;
  }
}

// API key validation
function validateApiKey(apiKey) {
  const validation = {
    isValid: false,
    errors: []
  };
  
  if (!apiKey) {
    validation.errors.push('API key is required');
    return validation;
  }
  
  if (!_.isUidFormat(apiKey)) {
    validation.errors.push('API key must be 32 alphanumeric characters');
    return validation;
  }
  
  validation.isValid = true;
  return validation;
}

console.log(validateApiKey('A1B2C3D4E5F6789012345678901234AB'));         // { isValid: true, errors: [] }
console.log(validateApiKey('invalid-key'));                              // { isValid: false, errors: ['API key must be 32 alphanumeric characters'] }
console.log(validateApiKey(''));                                         // { isValid: false, errors: ['API key is required'] }

// File naming validation
function validateUniqueFileName(fileName) {
  // Extract the base name (without extension)
  const parts = fileName.split('.');
  if (parts.length < 2) {
    return { error: 'File must have an extension' };
  }
  
  const baseName = parts[0];
  const extension = parts.slice(1).join('.');
  
  if (!_.isUidFormat(baseName)) {
    return { 
      error: 'File name must be a valid UID format (32 alphanumeric characters)',
      suggestion: `${_.newUid()}.${extension}`
    };
  }
  
  return { valid: true, baseName, extension };
}

console.log(validateUniqueFileName('A1B2C3D4E5F6789012345678901234AB.pdf'));
// { valid: true, baseName: 'A1B2C3D4E5F6789012345678901234AB', extension: 'pdf' }

console.log(validateUniqueFileName('document.pdf'));
// { error: 'File name must be a valid UID format (32 alphanumeric characters)', suggestion: '...' }

// Cache key validation
class CacheValidator {
  static validateKey(key) {
    // Expect format: prefix_UID
    const parts = key.split('_');
    if (parts.length !== 2) {
      return { valid: false, error: 'Cache key must be in format: prefix_UID' };
    }
    
    const [prefix, uid] = parts;
    
    if (!prefix) {
      return { valid: false, error: 'Cache key prefix cannot be empty' };
    }
    
    if (!_.isUidFormat(uid)) {
      return { valid: false, error: 'Cache key UID part must be valid UID format' };
    }
    
    return { valid: true, prefix, uid };
  }
}

console.log(CacheValidator.validateKey('users_A1B2C3D4E5F6789012345678901234AB'));
// { valid: true, prefix: 'users', uid: 'A1B2C3D4E5F6789012345678901234AB' }

console.log(CacheValidator.validateKey('users_invalid-uid'));
// { valid: false, error: 'Cache key UID part must be valid UID format' }

// URL parameter validation
function parseResourceUrl(url) {
  const match = url.match(/\/api\/resource\/([A-Za-z0-9]+)/);
  if (!match) {
    return { error: 'Invalid URL format' };
  }
  
  const resourceId = match[1];
  if (!_.isUidFormat(resourceId)) {
    return { 
      error: 'Resource ID must be valid UID format (32 alphanumeric characters)',
      received: resourceId,
      length: resourceId.length
    };
  }
  
  return { resourceId: resourceId.toUpperCase() };
}

console.log(parseResourceUrl('/api/resource/A1B2C3D4E5F6789012345678901234AB'));
// { resourceId: 'A1B2C3D4E5F6789012345678901234AB' }

console.log(parseResourceUrl('/api/resource/short-id'));
// { error: 'Resource ID must be valid UID format (32 alphanumeric characters)', received: 'short-id', length: 8 }
```

### Edge Cases and Common Pitfalls

#### Length Validation
```javascript
const _ = require('cleaner-node');

// Must be exactly 32 characters
console.log(_.isUidFormat('A1B2C3D4E5F6789012345678901234A'));           // false (31 chars)
console.log(_.isUidFormat('A1B2C3D4E5F6789012345678901234AB'));          // true (32 chars)
console.log(_.isUidFormat('A1B2C3D4E5F6789012345678901234ABC'));         // false (33 chars)

// Empty string or very short strings
console.log(_.isUidFormat(''));                                          // false
console.log(_.isUidFormat('A'));                                         // false
console.log(_.isUidFormat('A1B2C3D4'));                                  // false (8 chars)
```

#### Character Validation
```javascript
const _ = require('cleaner-node');

// Only alphanumeric characters allowed
console.log(_.isUidFormat('A1B2C3D4E5F6789012345678901234AB'));          // true (letters and numbers)
console.log(_.isUidFormat('12345678901234567890123456789012'));          // true (only numbers)
console.log(_.isUidFormat('ABCDEFGHIJKLMNOPQRSTUVWXYZ123456'));          // true (only letters and numbers)

// Special characters not allowed
console.log(_.isUidFormat('A1B2C3D4E5F6789012345678901234A-'));          // false (hyphen)
console.log(_.isUidFormat('A1B2C3D4E5F6789012345678901234A_'));          // false (underscore)
console.log(_.isUidFormat('A1B2C3D4E5F6789012345678901234A!'));          // false (exclamation)
console.log(_.isUidFormat('A1B2C3D4E5F6789012345678901234A '));          // false (space)
console.log(_.isUidFormat('A1B2C3D4E5F6789012345678901234A.'));          // false (period)
console.log(_.isUidFormat('A1B2C3D4E5F6789012345678901234A@'));          // false (at symbol)
```

#### Case Sensitivity
```javascript
const _ = require('cleaner-node');

// Both uppercase and lowercase letters are valid
console.log(_.isUidFormat('A1B2C3D4E5F6789012345678901234AB'));          // true (uppercase)
console.log(_.isUidFormat('a1b2c3d4e5f6789012345678901234ab'));          // true (lowercase)
console.log(_.isUidFormat('A1b2C3d4E5f6789012345678901234aB'));          // true (mixed case)
```

#### Non-String Input Handling
```javascript
const _ = require('cleaner-node');

// Non-string inputs return false
console.log(_.isUidFormat(null));                                        // false
console.log(_.isUidFormat(undefined));                                   // false
console.log(_.isUidFormat(123));                                         // false
console.log(_.isUidFormat({}));                                          // false
console.log(_.isUidFormat([]));                                          // false
console.log(_.isUidFormat(true));                                        // false

// Numbers that might look like UIDs
console.log(_.isUidFormat(12345678901234567890123456789012));            // false (number, not string)
```

#### Whitespace Handling
```javascript
const _ = require('cleaner-node');

// Whitespace is not trimmed - exact format required
console.log(_.isUidFormat(' A1B2C3D4E5F6789012345678901234AB'));         // false (leading space)
console.log(_.isUidFormat('A1B2C3D4E5F6789012345678901234AB '));         // false (trailing space)
console.log(_.isUidFormat(' A1B2C3D4E5F6789012345678901234AB '));        // false (both)
console.log(_.isUidFormat('A1B2C3D4E5F6 789012345678901234AB'));         // false (space in middle)
```

## Implementation Details
The function performs validation by:

1. **Alphanumeric Check**: Uses `isAlphanumeric()` to ensure only letters and numbers
2. **Length Check**: Verifies the string is exactly 32 characters long
3. **Debug Logging**: Provides detailed debug information for validation failures

The validation is strict and requires exact compliance with both character set and length requirements.

## Related Functions
- **[newUid](./new-uid.md)** - Generates new UID in valid format
- **[isGuidFormat](./is-guid-format.md)** - Validates GUID format (with hyphens)
- **[toUidFormat](./to-uid-format.md)** - Converts GUID to UID format
- **[toGuidFormat](./to-guid-format.md)** - Converts UID to GUID format
- **[isAlphanumeric](./is-alphanumeric.md)** - Validates alphanumeric characters (used internally)

## Use Cases
- **Database Primary Keys**: Validating compact unique identifiers
- **Session Management**: Ensuring session IDs are properly formatted
- **API Keys**: Validating API key format
- **File Naming**: Ensuring unique file names follow UID format
- **Cache Keys**: Validating cache identifier components
- **URL Parameters**: Ensuring URL parameters contain valid UIDs
- **Resource Identification**: Validating compact resource identifiers
- **Token Validation**: Checking token format in authentication systems

## Performance Notes
- Very fast validation using alphanumeric check and length comparison
- Early exit on non-alphanumeric input
- No complex string manipulation or regular expressions
- Debug logging available for troubleshooting (can be disabled in production)
- Efficient for high-frequency validation scenarios

## Best Practices
- Use for validating compact identifiers without hyphens
- Always validate before using in database queries or API calls
- Consider normalizing to uppercase after validation for consistency
- Combine with other validation functions for comprehensive input checking
- Use debug logging during development to troubleshoot validation failures
- Validate early in your application flow to catch format errors quickly
- Store as fixed-length strings in databases for optimal indexing performance 