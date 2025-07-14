# isJson

Checks if a string is valid JSON (either an object or array).

## Purpose

The `isJson` function determines whether a string represents valid JSON data. It validates that the string can be parsed as either a JSON object or a JSON array, making it useful for validating JSON input from APIs, configuration files, or user input.

## Syntax

```javascript
const _ = require('cleaner-node');
const result = _.isJson(str);
```

## Parameters

- **str** (string): The string to validate as JSON

## Returns

**boolean**: `true` if the string is valid JSON, `false` otherwise

## Examples

### Basic Usage

```javascript
const _ = require('cleaner-node');

// Valid JSON objects
console.log(_.isJson('{"name": "John", "age": 30}'));     // true
console.log(_.isJson('{"key": "value"}'));               // true
console.log(_.isJson('{}'));                             // true

// Valid JSON arrays
console.log(_.isJson('[1, 2, 3]'));                      // true
console.log(_.isJson('["a", "b", "c"]'));                // true
console.log(_.isJson('[]'));                             // true

// Valid nested JSON
console.log(_.isJson('{"users": [{"id": 1}]}'));         // true
console.log(_.isJson('[{"name": "John"}, {"name": "Jane"}]')); // true

// Invalid JSON
console.log(_.isJson('{"invalid": json}'));              // false (unquoted value)
console.log(_.isJson('{name: "John"}'));                 // false (unquoted key)
console.log(_.isJson('just text'));                      // false
console.log(_.isJson(''));                               // false
console.log(_.isJson(null));                             // false
console.log(_.isJson(undefined));                        // false
```

### API Request Validation

```javascript
const _ = require('cleaner-node');

function validateApiRequest(req) {
  const validation = {
    isValid: true,
    errors: []
  };
  
  // Validate JSON body
  if (req.body && typeof req.body === 'string') {
    if (!_.isJson(req.body)) {
      validation.isValid = false;
      validation.errors.push('Request body must be valid JSON');
    }
  }
  
  // Validate custom headers that should contain JSON
  if (req.headers['x-custom-data'] && !_.isJson(req.headers['x-custom-data'])) {
    validation.isValid = false;
    validation.errors.push('x-custom-data header must be valid JSON');
  }
  
  return validation;
}

// Valid API request
const validRequest = {
  body: '{"username": "john", "email": "john@example.com"}',
  headers: {
    'content-type': 'application/json',
    'x-custom-data': '{"source": "mobile", "version": "1.2.0"}'
  }
};
console.log(validateApiRequest(validRequest)); 
// { isValid: true, errors: [] }

// Invalid API request
const invalidRequest = {
  body: '{username: "john"}',  // Invalid JSON (unquoted key)
  headers: {
    'content-type': 'application/json',
    'x-custom-data': 'not valid json'
  }
};
console.log(validateApiRequest(invalidRequest)); 
// { isValid: false, errors: ['Request body must be valid JSON', 'x-custom-data header must be valid JSON'] }
```

### Configuration File Validation

```javascript
const _ = require('cleaner-node');

function validateConfigFiles(configData) {
  const results = {};
  
  Object.entries(configData).forEach(([fileName, content]) => {
    const errors = [];
    
    if (!_.isJson(content)) {
      errors.push('Configuration file must contain valid JSON');
    } else {
      // Additional validation could be added here
      try {
        const parsed = JSON.parse(content);
        if (!parsed || typeof parsed !== 'object') {
          errors.push('Configuration must be a JSON object or array');
        }
      } catch (e) {
        errors.push('Failed to parse configuration JSON');
      }
    }
    
    results[fileName] = {
      isValid: errors.length === 0,
      errors
    };
  });
  
  return results;
}

const configFiles = {
  'app.json': '{"port": 3000, "database": {"host": "localhost"}}',
  'users.json': '[{"id": 1, "name": "John"}, {"id": 2, "name": "Jane"}]',
  'invalid.json': '{port: 3000}',  // Invalid JSON
  'empty.json': ''
};

const configValidation = validateConfigFiles(configFiles);
console.log(configValidation);
// {
//   'app.json': { isValid: true, errors: [] },
//   'users.json': { isValid: true, errors: [] },
//   'invalid.json': { isValid: false, errors: ['Configuration file must contain valid JSON'] },
//   'empty.json': { isValid: false, errors: ['Configuration file must contain valid JSON'] }
// }
```

### WebSocket Message Validation

```javascript
const _ = require('cleaner-node');

function validateWebSocketMessages(messages) {
  const validMessages = [];
  const invalidMessages = [];
  
  messages.forEach((message, index) => {
    if (_.isJson(message.data)) {
      try {
        const parsed = JSON.parse(message.data);
        validMessages.push({
          ...message,
          parsedData: parsed
        });
      } catch (e) {
        invalidMessages.push({
          ...message,
          index,
          error: 'Failed to parse valid JSON'
        });
      }
    } else {
      invalidMessages.push({
        ...message,
        index,
        error: 'Message data is not valid JSON'
      });
    }
  });
  
  return {
    valid: invalidMessages.length === 0,
    totalCount: messages.length,
    validCount: validMessages.length,
    invalidCount: invalidMessages.length,
    validMessages,
    invalidMessages
  };
}

const wsMessages = [
  { id: 1, data: '{"type": "message", "content": "Hello"}' },
  { id: 2, data: '{"type": "notification", "count": 5}' },
  { id: 3, data: '{type: "invalid"}' },  // Invalid JSON
  { id: 4, data: '["array", "message"]' },
  { id: 5, data: 'plain text message' }  // Not JSON
];

const messageValidation = validateWebSocketMessages(wsMessages);
console.log(messageValidation);
// Results show valid and invalid messages with parsed data where applicable
```

### Database Record Validation

```javascript
const _ = require('cleaner-node');

function validateDatabaseRecords(records) {
  const errors = [];
  
  records.forEach((record, index) => {
    // Validate metadata field (should be JSON)
    if (record.metadata && !_.isJson(record.metadata)) {
      errors.push(`Record ${index}: metadata field must be valid JSON`);
    }
    
    // Validate settings field (should be JSON)
    if (record.settings && !_.isJson(record.settings)) {
      errors.push(`Record ${index}: settings field must be valid JSON`);
    }
    
    // Validate preferences field (should be JSON)
    if (record.preferences && !_.isJson(record.preferences)) {
      errors.push(`Record ${index}: preferences field must be valid JSON`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors,
    totalRecords: records.length
  };
}

const dbRecords = [
  {
    id: 1,
    name: 'User 1',
    metadata: '{"created": "2023-01-01", "source": "web"}',
    settings: '{"theme": "dark", "notifications": true}'
  },
  {
    id: 2,
    name: 'User 2',
    metadata: '{created: "2023-01-02"}',  // Invalid JSON
    settings: '{"theme": "light"}'
  },
  {
    id: 3,
    name: 'User 3',
    metadata: '{"created": "2023-01-03"}',
    settings: 'invalid json string',       // Invalid JSON
    preferences: '{"language": "en"}'
  }
];

const dbValidation = validateDatabaseRecords(dbRecords);
console.log(dbValidation);
// { isValid: false, errors: ['Record 1: metadata field must be valid JSON', 'Record 2: settings field must be valid JSON'], totalRecords: 3 }
```

### Import/Export Data Validation

```javascript
const _ = require('cleaner-node');

function validateImportData(importPayload) {
  const validation = {
    canImport: false,
    errors: [],
    summary: {
      totalFiles: 0,
      validFiles: 0,
      invalidFiles: 0
    }
  };
  
  if (!_.isJson(importPayload.manifest)) {
    validation.errors.push('Import manifest must be valid JSON');
    return validation;
  }
  
  let manifest;
  try {
    manifest = JSON.parse(importPayload.manifest);
  } catch (e) {
    validation.errors.push('Failed to parse import manifest');
    return validation;
  }
  
  if (!Array.isArray(manifest.files)) {
    validation.errors.push('Manifest must contain a files array');
    return validation;
  }
  
  validation.summary.totalFiles = manifest.files.length;
  
  manifest.files.forEach((file, index) => {
    if (_.isJson(file.content)) {
      validation.summary.validFiles++;
    } else {
      validation.summary.invalidFiles++;
      validation.errors.push(`File ${index} (${file.name || 'unnamed'}): content is not valid JSON`);
    }
  });
  
  validation.canImport = validation.summary.invalidFiles === 0;
  
  return validation;
}

const importData = {
  manifest: '{"version": "1.0", "files": [{"name": "data1.json", "content": "{\\"key\\": \\"value\\"}"}, {"name": "data2.json", "content": "invalid json"}]}',
  timestamp: Date.now()
};

const importValidation = validateImportData(importData);
console.log(importValidation);
// { canImport: false, errors: [...], summary: { totalFiles: 2, validFiles: 1, invalidFiles: 1 } }
```

## Related Functions

- [`isJsonObject`](./is-json-object.md) - Validates JSON object strings specifically
- [`isJsonArray`](./is-json-array.md) - Validates JSON array strings specifically
- [`parseJson`](./parse-json.md) - Parses JSON strings safely
- [`isValidString`](./is-valid-string.md) - Validates string values
- [`isObject`](./is-object.md) - Validates object values 