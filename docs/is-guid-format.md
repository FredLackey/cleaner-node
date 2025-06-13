# isGuidFormat

## Purpose
Checks if a value conforms to the standard GUID format (e.g., 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'). It validates the structure by splitting the string by hyphens and comparing the length and content of each part against a template GUID.

## Syntax
```javascript
const _ = require('cleaner-node');

_.isGuidFormat(value)
```

## Parameters
- **value** (string): The string value to check for GUID format compliance

## Returns
- **boolean**: `true` if the value is in a valid GUID format, `false` otherwise

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Valid GUID formats
console.log(_.isGuidFormat('550e8400-e29b-41d4-a716-446655440000'));    // true
console.log(_.isGuidFormat('6ba7b810-9dad-11d1-80b4-00c04fd430c8'));    // true
console.log(_.isGuidFormat('00000000-0000-0000-0000-000000000000'));    // true
console.log(_.isGuidFormat('FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF'));    // true

// With curly braces (also valid)
console.log(_.isGuidFormat('{550e8400-e29b-41d4-a716-446655440000}'));  // true
console.log(_.isGuidFormat('{6ba7b810-9dad-11d1-80b4-00c04fd430c8}'));  // true

// Invalid formats
console.log(_.isGuidFormat('550e8400-e29b-41d4-a716'));                 // false (too short)
console.log(_.isGuidFormat('550e8400-e29b-41d4-a716-446655440000-extra')); // false (too long)
console.log(_.isGuidFormat('550e8400e29b41d4a716446655440000'));         // false (no hyphens)
console.log(_.isGuidFormat('550e8400-e29b-41d4-a716-44665544000g'));    // false (invalid character 'g')
console.log(_.isGuidFormat(''));                                         // false (empty string)
console.log(_.isGuidFormat(null));                                       // false (not a string)
console.log(_.isGuidFormat(undefined));                                  // false (not a string)
```

### Practical Applications
```javascript
const _ = require('cleaner-node');

// Validate user input
function validateGuidInput(userInput) {
  if (!_.isGuidFormat(userInput)) {
    throw new Error(`Invalid GUID format: ${userInput}`);
  }
  return userInput.toLowerCase();
}

try {
  const validGuid = validateGuidInput('550e8400-e29b-41d4-a716-446655440000');
  console.log(`Valid GUID: ${validGuid}`);
} catch (error) {
  console.error(error.message);
}

try {
  validateGuidInput('invalid-guid');
} catch (error) {
  console.error(error.message);                              // 'Invalid GUID format: invalid-guid'
}

// Database query validation
class UserRepository {
  async findById(id) {
    if (!_.isGuidFormat(id)) {
      throw new Error('User ID must be a valid GUID format');
    }
    
    // Proceed with database query
    return this.database.query('SELECT * FROM users WHERE id = ?', [id]);
  }
  
  async updateUser(id, userData) {
    if (!_.isGuidFormat(id)) {
      return { error: 'Invalid user ID format' };
    }
    
    // Proceed with update
    return this.database.update('users', userData, { id });
  }
}

// API endpoint validation
function getUserHandler(req, res) {
  const { userId } = req.params;
  
  if (!_.isGuidFormat(userId)) {
    return res.status(400).json({
      error: 'Invalid user ID format',
      message: 'User ID must be a valid GUID'
    });
  }
  
  // Proceed with user lookup
  // ... rest of handler logic
}

// Configuration validation
function validateDatabaseConfig(config) {
  const errors = [];
  
  if (config.connectionId && !_.isGuidFormat(config.connectionId)) {
    errors.push('connectionId must be a valid GUID format');
  }
  
  if (config.sessionId && !_.isGuidFormat(config.sessionId)) {
    errors.push('sessionId must be a valid GUID format');
  }
  
  return errors;
}

const config = {
  connectionId: '550e8400-e29b-41d4-a716-446655440000',
  sessionId: 'invalid-session-id',
  host: 'localhost'
};

const configErrors = validateDatabaseConfig(config);
console.log(configErrors);                                   // ['sessionId must be a valid GUID format']

// Form validation
function validateRegistrationForm(formData) {
  const validation = {
    isValid: true,
    errors: []
  };
  
  // Check if referral ID is provided and valid
  if (formData.referralId) {
    if (!_.isGuidFormat(formData.referralId)) {
      validation.isValid = false;
      validation.errors.push('Referral ID must be a valid GUID format');
    }
  }
  
  return validation;
}

const form1 = { email: 'user@example.com', referralId: '550e8400-e29b-41d4-a716-446655440000' };
const form2 = { email: 'user@example.com', referralId: 'invalid-referral' };

console.log(validateRegistrationForm(form1));               // { isValid: true, errors: [] }
console.log(validateRegistrationForm(form2));               // { isValid: false, errors: ['Referral ID must be a valid GUID format'] }

// URL parameter validation
function parseResourceUrl(url) {
  const match = url.match(/\/resource\/([^\/]+)/);
  if (!match) {
    return { error: 'Invalid URL format' };
  }
  
  const resourceId = match[1];
  if (!_.isGuidFormat(resourceId)) {
    return { error: 'Resource ID must be a valid GUID format' };
  }
  
  return { resourceId };
}

console.log(parseResourceUrl('/resource/550e8400-e29b-41d4-a716-446655440000'));
// { resourceId: '550e8400-e29b-41d4-a716-446655440000' }

console.log(parseResourceUrl('/resource/invalid-id'));
// { error: 'Resource ID must be a valid GUID format' }
```

### Edge Cases and Common Pitfalls

#### Case Sensitivity
```javascript
const _ = require('cleaner-node');

// GUID format validation is case-insensitive for hex characters
console.log(_.isGuidFormat('550e8400-e29b-41d4-a716-446655440000'));    // true (lowercase)
console.log(_.isGuidFormat('550E8400-E29B-41D4-A716-446655440000'));    // true (uppercase)
console.log(_.isGuidFormat('550e8400-E29B-41d4-A716-446655440000'));    // true (mixed case)

// But invalid hex characters are still rejected
console.log(_.isGuidFormat('550g8400-e29b-41d4-a716-446655440000'));    // false ('g' is not hex)
console.log(_.isGuidFormat('550e8400-e29z-41d4-a716-446655440000'));    // false ('z' is not hex)
```

#### Curly Braces Handling
```javascript
const _ = require('cleaner-node');

// Curly braces are automatically stripped and ignored
console.log(_.isGuidFormat('{550e8400-e29b-41d4-a716-446655440000}'));  // true
console.log(_.isGuidFormat('550e8400-e29b-41d4-a716-446655440000'));    // true

// But malformed braces are not handled
console.log(_.isGuidFormat('{550e8400-e29b-41d4-a716-446655440000'));   // false (missing closing brace)
console.log(_.isGuidFormat('550e8400-e29b-41d4-a716-446655440000}'));   // false (missing opening brace)
console.log(_.isGuidFormat('{{550e8400-e29b-41d4-a716-446655440000}}'));// false (double braces)
```

#### Length and Structure Validation
```javascript
const _ = require('cleaner-node');

// Each segment must be the correct length
console.log(_.isGuidFormat('550e840-e29b-41d4-a716-446655440000'));     // false (first segment too short)
console.log(_.isGuidFormat('550e84000-e29b-41d4-a716-446655440000'));   // false (first segment too long)
console.log(_.isGuidFormat('550e8400-e29-41d4-a716-446655440000'));     // false (second segment too short)
console.log(_.isGuidFormat('550e8400-e29bb-41d4-a716-446655440000'));   // false (second segment too long)

// Must have exactly 5 segments separated by hyphens
console.log(_.isGuidFormat('550e8400-e29b-41d4-446655440000'));         // false (only 4 segments)
console.log(_.isGuidFormat('550e8400-e29b-41d4-a716-4466-55440000'));   // false (6 segments)

// Empty segments are invalid
console.log(_.isGuidFormat('-e29b-41d4-a716-446655440000'));            // false (empty first segment)
console.log(_.isGuidFormat('550e8400--41d4-a716-446655440000'));        // false (empty second segment)
```

#### Non-String Input Handling
```javascript
const _ = require('cleaner-node');

// Non-string inputs return false
console.log(_.isGuidFormat(null));                                       // false
console.log(_.isGuidFormat(undefined));                                  // false
console.log(_.isGuidFormat(123));                                        // false
console.log(_.isGuidFormat({}));                                         // false
console.log(_.isGuidFormat([]));                                         // false
console.log(_.isGuidFormat(true));                                       // false

// Empty or whitespace strings
console.log(_.isGuidFormat(''));                                         // false
console.log(_.isGuidFormat('   '));                                      // false
console.log(_.isGuidFormat('\t'));                                       // false
console.log(_.isGuidFormat('\n'));                                       // false
```

## Implementation Details
The function performs comprehensive validation by:

1. **String Validation**: Checks if the input is a valid string using `isValidString()`
2. **Brace Handling**: Removes curly braces if present (`{` and `}`)
3. **Structure Validation**: Splits by hyphens and compares segment count with template
4. **Length Validation**: Ensures each segment matches the expected length
5. **Character Validation**: Verifies each segment contains only valid hexadecimal characters

The validation uses the `EMPTY_GUID` constant as a template and validates against hexadecimal characters (`0123456789abcdef`).

## Related Functions
- **[newGuid](./new-guid.md)** - Generates new GUID in valid format
- **[isUidFormat](./is-uid-format.md)** - Validates UID format (32 chars, no hyphens)
- **[toGuidFormat](./to-guid-format.md)** - Converts UID to GUID format
- **[toUidFormat](./to-uid-format.md)** - Converts GUID to UID format
- **[isValidString](./is-valid-string.md)** - Validates string input (used internally)

## Use Cases
- **API Input Validation**: Ensuring GUID parameters are properly formatted
- **Database Query Safety**: Validating IDs before database operations
- **Configuration Validation**: Checking GUID values in configuration files
- **Form Validation**: Validating GUID inputs in web forms
- **URL Parameter Validation**: Ensuring URL parameters contain valid GUIDs
- **Data Import/Export**: Validating GUID fields during data processing
- **Authentication**: Validating session IDs or token formats
- **Resource Identification**: Ensuring resource identifiers are properly formatted

## Performance Notes
- Fast validation using string splitting and character checking
- No regular expressions (more predictable performance)
- Early exit on invalid string input
- Efficient character validation using predefined character set
- Debug logging available for troubleshooting (can be disabled in production)

## Best Practices
- Always validate GUID format before using in database queries
- Use for input sanitization in APIs and web applications
- Combine with other validation functions for comprehensive input checking
- Consider normalizing GUIDs to lowercase after validation
- Handle curly braces consistently in your application
- Use debug logging to troubleshoot validation failures during development
- Validate early in your application flow to catch format errors quickly 