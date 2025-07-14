# isFunction

Checks if a value is a function.

## Purpose

The `isFunction` function determines whether a value is of type `function`. This is useful for validating callbacks, event handlers, and other functional parameters before attempting to invoke them.

## Syntax

```javascript
const _ = require('cleaner-node');
const result = _.isFunction(value);
```

## Parameters

- **value** (any): The value to check

## Returns

**boolean**: `true` if the value is of type `function`, `false` otherwise

## Examples

### Basic Usage

```javascript
const _ = require('cleaner-node');

// Function types
console.log(_.isFunction(function() {}));        // true
console.log(_.isFunction(() => {}));             // true
console.log(_.isFunction(async function() {}));  // true
console.log(_.isFunction(async () => {}));       // true
console.log(_.isFunction(console.log));          // true
console.log(_.isFunction(Math.max));             // true

// Non-function types
console.log(_.isFunction('function'));           // false
console.log(_.isFunction({}));                   // false
console.log(_.isFunction([]));                   // false
console.log(_.isFunction(null));                 // false
console.log(_.isFunction(undefined));            // false
console.log(_.isFunction(123));                  // false
```

### Callback Validation

```javascript
const _ = require('cleaner-node');

function processData(data, callback) {
  if (!_.isFunction(callback)) {
    throw new Error('Callback must be a function');
  }
  
  try {
    const result = data.map(item => item * 2);
    callback(null, result);
  } catch (error) {
    callback(error, null);
  }
}

function onSuccess(error, result) {
  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('Result:', result);
  }
}

// Valid usage
processData([1, 2, 3], onSuccess); // Result: [2, 4, 6]

// Invalid usage - these would throw errors
// processData([1, 2, 3], 'not a function');
// processData([1, 2, 3], null);
```

### Event Handler Validation

```javascript
const _ = require('cleaner-node');

class EventEmitter {
  constructor() {
    this.listeners = new Map();
  }
  
  on(event, handler) {
    if (!_.isFunction(handler)) {
      throw new Error('Event handler must be a function');
    }
    
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    
    this.listeners.get(event).push(handler);
  }
  
  emit(event, ...args) {
    const handlers = this.listeners.get(event) || [];
    handlers.forEach(handler => handler(...args));
  }
}

const emitter = new EventEmitter();

// Valid event handlers
emitter.on('data', (data) => console.log('Data:', data));
emitter.on('error', function(error) { console.error('Error:', error); });

emitter.emit('data', { id: 1, name: 'test' }); // Data: { id: 1, name: 'test' }

// Invalid event handlers - these would throw errors
// emitter.on('data', 'not a function');
// emitter.on('data', { handler: () => {} });
```

### Configuration with Function Options

```javascript
const _ = require('cleaner-node');

function createProcessor(options = {}) {
  const config = {
    transform: options.transform,
    validate: options.validate,
    onError: options.onError
  };
  
  // Validate function options
  if (config.transform !== undefined && !_.isFunction(config.transform)) {
    throw new Error('transform option must be a function');
  }
  
  if (config.validate !== undefined && !_.isFunction(config.validate)) {
    throw new Error('validate option must be a function');
  }
  
  if (config.onError !== undefined && !_.isFunction(config.onError)) {
    throw new Error('onError option must be a function');
  }
  
  return {
    process(data) {
      // Apply validation if provided
      if (config.validate && !config.validate(data)) {
        const error = new Error('Validation failed');
        if (config.onError) {
          config.onError(error);
          return null;
        }
        throw error;
      }
      
      // Apply transformation if provided
      return config.transform ? config.transform(data) : data;
    }
  };
}

// Valid configuration
const processor = createProcessor({
  transform: (data) => data.toUpperCase(),
  validate: (data) => typeof data === 'string',
  onError: (error) => console.error('Processing error:', error.message)
});

console.log(processor.process('hello')); // HELLO
console.log(processor.process(123));     // Processing error: Validation failed, returns null

// Invalid configuration - these would throw errors
// createProcessor({ transform: 'not a function' });
// createProcessor({ validate: {} });
```

### Higher-Order Function Validation

```javascript
const _ = require('cleaner-node');

function createFilter(predicate) {
  if (!_.isFunction(predicate)) {
    throw new Error('Predicate must be a function');
  }
  
  return function(array) {
    if (!Array.isArray(array)) {
      throw new Error('Input must be an array');
    }
    
    return array.filter(predicate);
  };
}

function createMapper(transform) {
  if (!_.isFunction(transform)) {
    throw new Error('Transform function is required');
  }
  
  return function(array) {
    if (!Array.isArray(array)) {
      throw new Error('Input must be an array');
    }
    
    return array.map(transform);
  };
}

// Valid usage
const evenFilter = createFilter(n => n % 2 === 0);
const doubleMapper = createMapper(n => n * 2);

const numbers = [1, 2, 3, 4, 5, 6];
console.log(evenFilter(numbers));  // [2, 4, 6]
console.log(doubleMapper(numbers)); // [2, 4, 6, 8, 10, 12]

// Invalid usage - these would throw errors
// createFilter('not a function');
// createMapper(null);
```

### Method Validation

```javascript
const _ = require('cleaner-node');

function validateMethods(obj, requiredMethods) {
  const errors = [];
  
  requiredMethods.forEach(methodName => {
    if (!_.isFunction(obj[methodName])) {
      errors.push(`${methodName} must be a function`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

const validPlugin = {
  name: 'TestPlugin',
  init: function() { console.log('Initializing...'); },
  process: (data) => data,
  cleanup: async function() { console.log('Cleaning up...'); }
};

const invalidPlugin = {
  name: 'BadPlugin',
  init: 'not a function',
  process: (data) => data,
  cleanup: null
};

const requiredMethods = ['init', 'process', 'cleanup'];

console.log(validateMethods(validPlugin, requiredMethods)); 
// { isValid: true, errors: [] }

console.log(validateMethods(invalidPlugin, requiredMethods));
// { isValid: false, errors: ['init must be a function', 'cleanup must be a function'] }
```

## Related Functions

- [`isAsync`](./is-async.md) - Checks if a value is an async function
- [`isSet`](./is-set.md) - Checks if a value is not null or undefined
- [`isDefined`](./is-defined.md) - Checks if a value is not undefined
- [`isObject`](./is-object.md) - Validates object values 