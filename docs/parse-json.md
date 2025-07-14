# parseJson

Safely parses a JSON string into a JavaScript object.

## Purpose

The `parseJson` function provides a safe way to parse JSON strings with built-in error handling. Unlike the native `JSON.parse()`, this function returns `undefined` instead of throwing errors when given invalid JSON, making it ideal for processing untrusted or potentially malformed JSON data.

## Syntax

```javascript
const _ = require('cleaner-node');
const result = _.parseJson(rawJson, debugErrors);
```

## Parameters

- **rawJson** (string): The JSON string to parse
- **debugErrors** (boolean, optional): Whether to log parsing errors to the console. Defaults to `true`

## Returns

**object|undefined**: The parsed JavaScript object, or `undefined` if parsing fails

## Examples

### Basic Usage

```javascript
const _ = require('cleaner-node');

// Valid JSON
const validJson = '{"name": "John", "age": 30}';
const parsed = _.parseJson(validJson);
console.log(parsed); // { name: 'John', age: 30 }

// Invalid JSON
const invalidJson = '{name: "John"}'; // Missing quotes around key
const failed = _.parseJson(invalidJson);
console.log(failed); // undefined

// Array JSON
const arrayJson = '[1, 2, 3, "hello"]';
const array = _.parseJson(arrayJson);
console.log(array); // [1, 2, 3, 'hello']
```

### API Response Processing

```javascript
const _ = require('cleaner-node');

function processApiResponse(responseText) {
  const data = _.parseJson(responseText);
  
  if (!data) {
    return {
      success: false,
      error: 'Invalid JSON response',
      data: null
    };
  }
  
  return {
    success: true,
    error: null,
    data: data
  };
}

// Simulate API responses
const validResponse = '{"users": [{"id": 1, "name": "John"}], "count": 1}';
const invalidResponse = '{users: [invalid json}';

console.log(processApiResponse(validResponse));
// { success: true, error: null, data: { users: [...], count: 1 } }

console.log(processApiResponse(invalidResponse));
// { success: false, error: 'Invalid JSON response', data: null }
```

### Configuration File Loading

```javascript
const _ = require('cleaner-node');
const fs = require('fs');

function loadConfigFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const config = _.parseJson(fileContent, false); // Don't log errors
    
    if (!config) {
      throw new Error(`Invalid JSON in config file: ${filePath}`);
    }
    
    // Apply default values
    return {
      port: 3000,
      host: 'localhost',
      debug: false,
      ...config
    };
  } catch (error) {
    console.error('Failed to load config:', error.message);
    return null;
  }
}

// Usage
const config = loadConfigFile('./config.json');
if (config) {
  console.log('Config loaded:', config);
} else {
  console.log('Using default configuration');
}
```

### Form Data Validation

```javascript
const _ = require('cleaner-node');

function validateFormSubmission(formData) {
  const errors = [];
  const parsed = {};
  
  // Check if metadata field contains valid JSON
  if (formData.metadata) {
    const metadata = _.parseJson(formData.metadata, false);
    if (!metadata) {
      errors.push('Metadata field must contain valid JSON');
    } else {
      parsed.metadata = metadata;
    }
  }
  
  // Check if preferences field contains valid JSON
  if (formData.preferences) {
    const preferences = _.parseJson(formData.preferences, false);
    if (!preferences) {
      errors.push('Preferences field must contain valid JSON');
    } else {
      parsed.preferences = preferences;
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    parsed
  };
}

// Valid form submission
const validForm = {
  name: 'John Doe',
  metadata: '{"source": "web", "campaign": "spring2023"}',
  preferences: '{"theme": "dark", "notifications": true}'
};

console.log(validateFormSubmission(validForm));
// { isValid: true, errors: [], parsed: { metadata: {...}, preferences: {...} } }

// Invalid form submission
const invalidForm = {
  name: 'Jane Doe',
  metadata: '{source: "web"}', // Invalid JSON
  preferences: '{"theme": "light"}'
};

console.log(validateFormSubmission(invalidForm));
// { isValid: false, errors: ['Metadata field must contain valid JSON'], parsed: { preferences: {...} } }
```

### WebSocket Message Processing

```javascript
const _ = require('cleaner-node');

class WebSocketHandler {
  constructor() {
    this.messageHandlers = new Map();
  }
  
  registerHandler(messageType, handler) {
    this.messageHandlers.set(messageType, handler);
  }
  
  processMessage(rawMessage) {
    // Parse the incoming message
    const message = _.parseJson(rawMessage, false);
    
    if (!message) {
      return {
        success: false,
        error: 'Invalid JSON message format'
      };
    }
    
    if (!message.type) {
      return {
        success: false,
        error: 'Message must have a type field'
      };
    }
    
    const handler = this.messageHandlers.get(message.type);
    if (!handler) {
      return {
        success: false,
        error: `Unknown message type: ${message.type}`
      };
    }
    
    try {
      const result = handler(message.data);
      return {
        success: true,
        result
      };
    } catch (error) {
      return {
        success: false,
        error: `Handler error: ${error.message}`
      };
    }
  }
}

const wsHandler = new WebSocketHandler();

// Register message handlers
wsHandler.registerHandler('chat', (data) => {
  return { action: 'broadcast', message: data.message, user: data.user };
});

wsHandler.registerHandler('ping', () => {
  return { action: 'pong', timestamp: Date.now() };
});

// Process messages
const validMessage = '{"type": "chat", "data": {"user": "john", "message": "Hello!"}}';
const invalidMessage = '{type: "chat", data: {invalid json}}';
const unknownMessage = '{"type": "unknown", "data": {}}';

console.log(wsHandler.processMessage(validMessage));
// { success: true, result: { action: 'broadcast', message: 'Hello!', user: 'john' } }

console.log(wsHandler.processMessage(invalidMessage));
// { success: false, error: 'Invalid JSON message format' }

console.log(wsHandler.processMessage(unknownMessage));
// { success: false, error: 'Unknown message type: unknown' }
```

### Error Handling with Debugging

```javascript
const _ = require('cleaner-node');

function parseWithErrorHandling(jsonString, context = 'unknown') {
  console.log(`Attempting to parse JSON from: ${context}`);
  
  // Parse with debug enabled to see errors
  const result = _.parseJson(jsonString, true);
  
  if (result === undefined) {
    console.log(`JSON parsing failed for: ${context}`);
    return { error: 'Parse failed', context };
  }
  
  console.log(`JSON parsed successfully for: ${context}`);
  return { data: result, context };
}

// Examples with different error scenarios
const testCases = [
  { json: '{"valid": true}', context: 'valid-json' },
  { json: '{invalid: json}', context: 'unquoted-key' },
  { json: '{"incomplete":', context: 'incomplete-json' },
  { json: '', context: 'empty-string' },
  { json: 'not json at all', context: 'plain-text' }
];

testCases.forEach(testCase => {
  const result = parseWithErrorHandling(testCase.json, testCase.context);
  console.log('Result:', result);
  console.log('---');
});
```

### Silent Error Handling

```javascript
const _ = require('cleaner-node');

function silentJsonParse(jsonString, fallback = null) {
  // Parse without logging errors (debugErrors = false)
  const result = _.parseJson(jsonString, false);
  return result !== undefined ? result : fallback;
}

// Usage with fallback values
const userSettings = silentJsonParse(
  localStorage.getItem('userSettings'), 
  { theme: 'light', language: 'en' }
);

const cacheData = silentJsonParse(
  sessionStorage.getItem('cache'),
  {}
);

const apiResponse = silentJsonParse(
  httpResponse.body,
  { error: 'Invalid response format' }
);

console.log('User settings:', userSettings);
console.log('Cache data:', cacheData);
console.log('API response:', apiResponse);
```

## Error Handling

The function handles JSON parsing errors gracefully:

- **Invalid JSON syntax**: Returns `undefined`
- **Empty strings**: Returns `undefined`
- **Non-string inputs**: May cause errors (validate input first)
- **Debug logging**: Controlled by the `debugErrors` parameter

```javascript
const _ = require('cleaner-node');

// Common error scenarios
console.log(_.parseJson(''));                    // undefined
console.log(_.parseJson('{'));                  // undefined
console.log(_.parseJson('{"key": }'));          // undefined
console.log(_.parseJson('{key: "value"}'));     // undefined (unquoted key)
console.log(_.parseJson('{"key": "value",}'));  // undefined (trailing comma)
```

## Related Functions

- [`isJson`](./is-json.md) - Validates if a string is valid JSON
- [`isJsonObject`](./is-json-object.md) - Validates JSON object strings
- [`isJsonArray`](./is-json-array.md) - Validates JSON array strings
- [`stringify`](./stringify.md) - Converts objects to JSON strings
- [`isValidString`](./is-valid-string.md) - Validates string values 