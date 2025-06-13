# toGuidFormat

## Purpose
Converts a value (potentially a GUID or UID) into the standard lowercase GUID format (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx). If the value is already a valid GUID format, it's converted to lowercase. If the value is a valid UID format (32 alphanumeric chars), it's formatted into a GUID string. Returns undefined if the input is neither a valid GUID nor a valid UID format.

## Syntax
```javascript
const _ = require('cleaner-node');

_.toGuidFormat(value)
```

## Parameters
- **value** (string): The string value to convert (expected GUID or UID format)

## Returns
- **string|undefined**: The formatted lowercase GUID string, or `undefined` if conversion is not possible

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Convert existing GUID to lowercase
console.log(_.toGuidFormat('550E8400-E29B-41D4-A716-446655440000'));
// '550e8400-e29b-41d4-a716-446655440000'

console.log(_.toGuidFormat('6BA7B810-9DAD-11D1-80B4-00C04FD430C8'));
// '6ba7b810-9dad-11d1-80b4-00c04fd430c8'

// Already lowercase GUID remains unchanged
console.log(_.toGuidFormat('550e8400-e29b-41d4-a716-446655440000'));
// '550e8400-e29b-41d4-a716-446655440000'

// Convert UID to GUID format
console.log(_.toGuidFormat('550E8400E29B41D4A716446655440000'));
// '550e8400-e29b-41d4-a716-446655440000'

console.log(_.toGuidFormat('A1B2C3D4E5F6789012345678901234AB'));
// 'a1b2c3d4-e5f6-7890-1234-5678901234ab'

// Invalid inputs return undefined
console.log(_.toGuidFormat('invalid-string'));                           // undefined
console.log(_.toGuidFormat(''));                                         // undefined
console.log(_.toGuidFormat(null));                                       // undefined
console.log(_.toGuidFormat(undefined));                                  // undefined
console.log(_.toGuidFormat('550e8400-e29b-41d4'));                       // undefined (incomplete GUID)
console.log(_.toGuidFormat('A1B2C3D4E5F6789012345678901234A'));          // undefined (31 chars, not valid UID)
```

### Practical Applications
```javascript
const _ = require('cleaner-node');

// Normalize database IDs
function normalizeId(id) {
  const normalized = _.toGuidFormat(id);
  if (!normalized) {
    throw new Error(`Cannot normalize ID: ${id}. Must be valid GUID or UID format.`);
  }
  return normalized;
}

try {
  console.log(normalizeId('550E8400-E29B-41D4-A716-446655440000'));      // '550e8400-e29b-41d4-a716-446655440000'
  console.log(normalizeId('550E8400E29B41D4A716446655440000'));          // '550e8400-e29b-41d4-a716-446655440000'
} catch (error) {
  console.error(error.message);
}

// API response formatting
class UserService {
  async getUser(userId) {
    // Normalize the ID format for consistent API responses
    const normalizedId = _.toGuidFormat(userId);
    if (!normalizedId) {
      return { error: 'Invalid user ID format' };
    }
    
    const user = await this.database.findById(normalizedId);
    if (user) {
      // Ensure consistent ID format in response
      user.id = normalizedId;
    }
    
    return user;
  }
  
  async createUser(userData) {
    const userId = _.newUid();
    const user = {
      id: _.toGuidFormat(userId), // Convert to standard GUID format
      ...userData,
      createdAt: new Date().toISOString()
    };
    
    await this.database.save(user);
    return user;
  }
}

// Configuration normalization
function normalizeConfig(config) {
  const normalized = { ...config };
  
  // Normalize all ID fields to GUID format
  const idFields = ['connectionId', 'sessionId', 'clientId', 'tenantId'];
  
  for (const field of idFields) {
    if (normalized[field]) {
      const guidFormat = _.toGuidFormat(normalized[field]);
      if (guidFormat) {
        normalized[field] = guidFormat;
      } else {
        throw new Error(`Invalid ${field} format: ${normalized[field]}`);
      }
    }
  }
  
  return normalized;
}

const config = {
  connectionId: '550E8400E29B41D4A716446655440000',  // UID format
  sessionId: '6BA7B810-9DAD-11D1-80B4-00C04FD430C8', // GUID format (uppercase)
  host: 'localhost',
  port: 3000
};

const normalizedConfig = normalizeConfig(config);
console.log(normalizedConfig);
// {
//   connectionId: '550e8400-e29b-41d4-a716-446655440000',
//   sessionId: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
//   host: 'localhost',
//   port: 3000
// }

// Data migration utility
class DataMigrator {
  static convertIdsToGuidFormat(records) {
    return records.map(record => {
      const converted = { ...record };
      
      // Convert ID fields to GUID format
      if (converted.id) {
        const guidId = _.toGuidFormat(converted.id);
        if (guidId) {
          converted.id = guidId;
        } else {
          console.warn(`Skipping record with invalid ID: ${converted.id}`);
          return null;
        }
      }
      
      // Convert foreign key references
      if (converted.userId) {
        const guidUserId = _.toGuidFormat(converted.userId);
        if (guidUserId) {
          converted.userId = guidUserId;
        }
      }
      
      if (converted.parentId) {
        const guidParentId = _.toGuidFormat(converted.parentId);
        if (guidParentId) {
          converted.parentId = guidParentId;
        }
      }
      
      return converted;
    }).filter(record => record !== null);
  }
}

const records = [
  { id: '550E8400E29B41D4A716446655440000', name: 'Record 1', userId: '6BA7B810-9DAD-11D1-80B4-00C04FD430C8' },
  { id: 'A1B2C3D4E5F6789012345678901234AB', name: 'Record 2', userId: 'F1E2D3C4B5A6789012345678901234CD' },
  { id: 'invalid-id', name: 'Record 3' } // This will be filtered out
];

const convertedRecords = DataMigrator.convertIdsToGuidFormat(records);
console.log(convertedRecords);
// [
//   { id: '550e8400-e29b-41d4-a716-446655440000', name: 'Record 1', userId: '6ba7b810-9dad-11d1-80b4-00c04fd430c8' },
//   { id: 'a1b2c3d4-e5f6-7890-1234-5678901234ab', name: 'Record 2', userId: 'f1e2d3c4-b5a6-7890-1234-5678901234cd' }
// ]

// URL generation with consistent format
function generateResourceUrl(resourceId, baseUrl = 'https://api.example.com') {
  const guidId = _.toGuidFormat(resourceId);
  if (!guidId) {
    throw new Error(`Invalid resource ID format: ${resourceId}`);
  }
  
  return `${baseUrl}/resources/${guidId}`;
}

console.log(generateResourceUrl('550E8400E29B41D4A716446655440000'));
// 'https://api.example.com/resources/550e8400-e29b-41d4-a716-446655440000'

console.log(generateResourceUrl('6BA7B810-9DAD-11D1-80B4-00C04FD430C8'));
// 'https://api.example.com/resources/6ba7b810-9dad-11d1-80b4-00c04fd430c8'

// Database query helper
class DatabaseHelper {
  static prepareIdForQuery(id) {
    // Ensure consistent GUID format for database queries
    const guidFormat = _.toGuidFormat(id);
    if (!guidFormat) {
      throw new Error(`Invalid ID format for database query: ${id}`);
    }
    return guidFormat;
  }
  
  static async findByIds(ids) {
    const normalizedIds = ids.map(id => {
      const guidFormat = _.toGuidFormat(id);
      if (!guidFormat) {
        throw new Error(`Invalid ID in batch: ${id}`);
      }
      return guidFormat;
    });
    
    // Use normalized IDs in query
    return this.database.query('SELECT * FROM records WHERE id IN (?)', [normalizedIds]);
  }
}

// Logging with consistent ID format
class Logger {
  static logUserAction(userId, action, details = {}) {
    const normalizedUserId = _.toGuidFormat(userId);
    if (!normalizedUserId) {
      console.error(`Invalid user ID in log: ${userId}`);
      return;
    }
    
    console.log(`[${new Date().toISOString()}] User ${normalizedUserId} performed ${action}`, details);
  }
}

Logger.logUserAction('550E8400E29B41D4A716446655440000', 'login');
// [2024-01-01T12:00:00.000Z] User 550e8400-e29b-41d4-a716-446655440000 performed login {}

Logger.logUserAction('A1B2C3D4E5F6789012345678901234AB', 'update_profile', { field: 'email' });
// [2024-01-01T12:00:00.000Z] User a1b2c3d4-e5f6-7890-1234-5678901234ab performed update_profile { field: 'email' }
```

### Edge Cases and Common Pitfalls

#### Input Format Detection
```javascript
const _ = require('cleaner-node');

// Function correctly identifies and converts different formats
console.log(_.toGuidFormat('550e8400-e29b-41d4-a716-446655440000'));     // '550e8400-e29b-41d4-a716-446655440000' (already GUID)
console.log(_.toGuidFormat('550E8400-E29B-41D4-A716-446655440000'));     // '550e8400-e29b-41d4-a716-446655440000' (GUID to lowercase)
console.log(_.toGuidFormat('550E8400E29B41D4A716446655440000'));         // '550e8400-e29b-41d4-a716-446655440000' (UID to GUID)

// Mixed case UID is handled correctly
console.log(_.toGuidFormat('550e8400E29B41d4A716446655440000'));         // '550e8400-e29b-41d4-a716-446655440000'
```

#### Invalid Input Handling
```javascript
const _ = require('cleaner-node');

// Various invalid inputs return undefined
console.log(_.toGuidFormat(''));                                         // undefined (empty string)
console.log(_.toGuidFormat('invalid'));                                  // undefined (not GUID or UID)
console.log(_.toGuidFormat('550e8400-e29b-41d4'));                       // undefined (incomplete GUID)
console.log(_.toGuidFormat('550E8400E29B41D4A716446655440'));            // undefined (31 chars, not valid UID)
console.log(_.toGuidFormat('550E8400E29B41D4A716446655440000X'));        // undefined (33 chars, not valid UID)
console.log(_.toGuidFormat('550e8400-e29b-41d4-a716-44665544000g'));     // undefined (invalid hex char)

// Non-string inputs
console.log(_.toGuidFormat(null));                                       // undefined
console.log(_.toGuidFormat(undefined));                                  // undefined
console.log(_.toGuidFormat(123));                                        // undefined
console.log(_.toGuidFormat({}));                                         // undefined
console.log(_.toGuidFormat([]));                                         // undefined
```

#### Curly Braces Handling
```javascript
const _ = require('cleaner-node');

// Curly braces are handled by isGuidFormat validation
console.log(_.toGuidFormat('{550e8400-e29b-41d4-a716-446655440000}'));   // '550e8400-e29b-41d4-a716-446655440000'
console.log(_.toGuidFormat('{550E8400-E29B-41D4-A716-446655440000}'));   // '550e8400-e29b-41d4-a716-446655440000'

// Malformed braces result in undefined
console.log(_.toGuidFormat('{550e8400-e29b-41d4-a716-446655440000'));    // undefined (missing closing brace)
console.log(_.toGuidFormat('550e8400-e29b-41d4-a716-446655440000}'));    // undefined (missing opening brace)
```

#### UID to GUID Conversion Logic
```javascript
const _ = require('cleaner-node');

// Understanding the conversion pattern
const uid = 'A1B2C3D4E5F6789012345678901234AB';
const guid = _.toGuidFormat(uid);
console.log(`UID:  ${uid}`);
console.log(`GUID: ${guid}`);
// UID:  A1B2C3D4 E5F6 7890 1234 5678901234AB
// GUID: a1b2c3d4-e5f6-7890-1234-5678901234ab

// The conversion follows this pattern:
// UID:  A1B2C3D4 E5F6 7890 1234 5678901234AB
// GUID: a1b2c3d4-e5f6-7890-1234-5678901234ab
//       8 chars   4    4    4    12 chars

// Verify the segments
const segments = [
  uid.substr(0, 8),   // 'A1B2C3D4'
  uid.substr(8, 4),   // 'E5F6'
  uid.substr(12, 4),  // '7890'
  uid.substr(16, 4),  // '1234'
  uid.substr(20)      // '5678901234AB'
];
console.log(segments.join('-').toLowerCase());                           // 'a1b2c3d4-e5f6-7890-1234-5678901234ab'
```

## Implementation Details
The function performs conversion through these steps:

1. **GUID Format Check**: Uses `isGuidFormat()` to check if input is already a GUID
   - If true, converts to lowercase and returns
2. **UID Format Check**: Uses `isUidFormat()` to check if input is a valid UID
   - If false, returns `undefined`
3. **UID to GUID Conversion**: Splits the 32-character UID into segments:
   - Characters 0-7: First segment (8 characters)
   - Characters 8-11: Second segment (4 characters)  
   - Characters 12-15: Third segment (4 characters)
   - Characters 16-19: Fourth segment (4 characters)
   - Characters 20-31: Fifth segment (12 characters)
4. **Format Assembly**: Joins segments with hyphens and converts to lowercase

## Related Functions
- **[newGuid](./new-guid.md)** - Generates new GUID in standard format
- **[newUid](./new-uid.md)** - Generates new UID format
- **[isGuidFormat](./is-guid-format.md)** - Validates GUID format (used internally)
- **[isUidFormat](./is-uid-format.md)** - Validates UID format (used internally)
- **[toUidFormat](./to-uid-format.md)** - Converts GUID to UID format

## Use Cases
- **API Response Normalization**: Ensuring consistent GUID format in API responses
- **Database Storage**: Converting various ID formats to standard GUID format
- **Data Migration**: Converting UID-based systems to GUID-based systems
- **Configuration Processing**: Normalizing configuration file ID values
- **URL Generation**: Creating consistent URLs with standard GUID format
- **Logging**: Ensuring consistent ID format in log entries
- **Cross-System Integration**: Converting between systems using different ID formats
- **Data Export**: Standardizing ID formats for data export/import

## Performance Notes
- Fast format detection using existing validation functions
- Efficient string manipulation using `substr()` and `join()`
- Early return for already-formatted GUIDs (just lowercase conversion)
- No regular expressions or complex parsing
- Minimal memory allocation for string operations

## Best Practices
- Always check the return value for `undefined` before using the result
- Use for normalizing IDs from external sources or user input
- Combine with validation functions for comprehensive input processing
- Consider caching results if converting the same IDs repeatedly
- Use consistently throughout your application for ID format standardization
- Handle `undefined` returns gracefully in your application logic
- Document expected input formats when using in APIs or public interfaces
``` 