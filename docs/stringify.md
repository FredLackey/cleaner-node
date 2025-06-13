# stringify

## Purpose
Converts a JavaScript value to a JSON string, safely handling circular references. This function uses `JSON.stringify` with a custom replacer to prevent errors with circular structures, making it safe for serializing complex objects.

## Syntax
```javascript
const _ = require('cleaner-node');

_.stringify(item)
```

## Parameters
- **item** (any): The value to convert to a JSON string

## Returns
- **string**: The JSON string representation of the value, with circular references safely handled

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Simple values
console.log(_.stringify('hello'));                          // '"hello"'
console.log(_.stringify(123));                              // '123'
console.log(_.stringify(true));                             // 'true'
console.log(_.stringify(null));                             // 'null'
console.log(_.stringify(undefined));                        // undefined

// Arrays
console.log(_.stringify([1, 2, 3]));                        // '[1,2,3]'
console.log(_.stringify(['a', 'b', 'c']));                  // '["a","b","c"]'

// Objects
console.log(_.stringify({ name: 'John', age: 30 }));        // '{"name":"John","age":30}'
console.log(_.stringify({ a: 1, b: [2, 3], c: { d: 4 } })); // '{"a":1,"b":[2,3],"c":{"d":4}}'
```

### Handling Circular References
```javascript
const _ = require('cleaner-node');

// Create circular reference
const obj = { name: 'parent' };
obj.self = obj;  // Circular reference

// Standard JSON.stringify would throw "Converting circular structure to JSON"
// _.stringify handles it safely
console.log(_.stringify(obj));                              // '{"name":"parent"}'

// More complex circular structure
const parent = { name: 'Parent', children: [] };
const child1 = { name: 'Child1', parent: parent };
const child2 = { name: 'Child2', parent: parent };
parent.children.push(child1, child2);

console.log(_.stringify(parent));
// '{"name":"Parent","children":[{"name":"Child1"},{"name":"Child2"}]}'

// Circular array
const arr = [1, 2, 3];
arr.push(arr);  // Circular reference
console.log(_.stringify(arr));                              // '[1,2,3,null]'
```

### Practical Applications
```javascript
const _ = require('cleaner-node');

// Safe logging function
function safeLog(data, label = 'Data') {
  const jsonString = _.stringify(data);
  console.log(`${label}: ${jsonString}`);
}

// Works with any data structure
safeLog({ user: 'john', settings: { theme: 'dark' } });
safeLog([1, 2, { nested: true }]);

// API response serialization
function createApiResponse(data, status = 'success') {
  const response = {
    status,
    timestamp: new Date().toISOString(),
    data: data
  };
  
  return _.stringify(response);
}

console.log(createApiResponse({ users: [{ id: 1, name: 'John' }] }));

// Configuration serialization
function saveConfig(config) {
  const configString = _.stringify(config);
  // In real app, you'd save to file or database
  console.log('Saving config:', configString);
  return configString;
}

const appConfig = {
  database: {
    host: 'localhost',
    port: 5432,
    credentials: { user: 'admin', pass: 'secret' }
  },
  features: ['auth', 'logging', 'caching']
};

saveConfig(appConfig);

// Error serialization
function serializeError(error) {
  const errorObj = {
    name: error.name,
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString()
  };
  
  return _.stringify(errorObj);
}

try {
  throw new Error('Something went wrong');
} catch (err) {
  console.log('Serialized error:', serializeError(err));
}

// Deep cloning with stringify/parse
function deepClone(obj) {
  try {
    return JSON.parse(_.stringify(obj));
  } catch (err) {
    console.error('Failed to clone object:', err.message);
    return null;
  }
}

const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
cloned.b.c = 999;
console.log('Original:', original.b.c);  // 2 (unchanged)
console.log('Cloned:', cloned.b.c);      // 999
```

### Edge Cases and Common Pitfalls

#### Special Values and Types
```javascript
const _ = require('cleaner-node');

// Special values
console.log(_.stringify(undefined));                        // undefined
console.log(_.stringify(null));                             // 'null'
console.log(_.stringify(NaN));                              // 'null'
console.log(_.stringify(Infinity));                         // 'null'
console.log(_.stringify(-Infinity));                        // 'null'

// Functions are omitted
const objWithFunction = {
  name: 'test',
  method: function() { return 'hello'; },
  arrow: () => 'world'
};
console.log(_.stringify(objWithFunction));                  // '{"name":"test"}'

// Symbols are omitted
const objWithSymbol = {
  name: 'test',
  [Symbol('key')]: 'value'
};
console.log(_.stringify(objWithSymbol));                    // '{"name":"test"}'

// Dates become strings
console.log(_.stringify(new Date('2024-01-01')));           // '"2024-01-01T00:00:00.000Z"'

// RegExp becomes empty object
console.log(_.stringify(/pattern/g));                       // '{}'
```

#### Arrays with Holes and Special Elements
```javascript
const _ = require('cleaner-node');

// Arrays with holes
const sparseArray = [1, , 3, , 5];
console.log(_.stringify(sparseArray));                      // '[1,null,3,null,5]'

// Arrays with mixed types
const mixedArray = [1, 'string', true, null, undefined, { obj: true }];
console.log(_.stringify(mixedArray));                       // '[1,"string",true,null,null,{"obj":true}]'

// Arrays with functions (omitted)
const arrayWithFunctions = [1, function() {}, 3];
console.log(_.stringify(arrayWithFunctions));               // '[1,null,3]'
```

#### Complex Circular Structures
```javascript
const _ = require('cleaner-node');

// Multiple circular references
const a = { name: 'A' };
const b = { name: 'B' };
const c = { name: 'C' };

a.ref = b;
b.ref = c;
c.ref = a;  // Creates circular chain

console.log(_.stringify(a));
// '{"name":"A","ref":{"name":"B","ref":{"name":"C"}}}'

// Self-referencing in arrays
const complexObj = {
  id: 1,
  items: []
};
complexObj.items.push(complexObj);
complexObj.items.push({ id: 2, parent: complexObj });

console.log(_.stringify(complexObj));
// '{"id":1,"items":[null,{"id":2}]}'
```

#### Performance Considerations
```javascript
const _ = require('cleaner-node');

// Large objects
function createLargeObject(size) {
  const obj = {};
  for (let i = 0; i < size; i++) {
    obj[`key${i}`] = `value${i}`;
  }
  return obj;
}

const largeObj = createLargeObject(1000);
console.time('stringify-large');
const result = _.stringify(largeObj);
console.timeEnd('stringify-large');

// Deeply nested objects
function createDeepObject(depth) {
  let obj = { value: 'leaf' };
  for (let i = 0; i < depth; i++) {
    obj = { level: i, nested: obj };
  }
  return obj;
}

const deepObj = createDeepObject(100);
console.time('stringify-deep');
const deepResult = _.stringify(deepObj);
console.timeEnd('stringify-deep');
```

## Implementation Details
The function uses a custom replacer function with `JSON.stringify` that tracks seen objects using a `WeakSet` to detect and handle circular references:

```javascript
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return; // Return undefined for circular references
      }
      seen.add(value);
    }
    return value;
  };
};

const stringify = (item) => {
  return JSON.stringify(item, getCircularReplacer());
};
```

## Related Functions
- **[parseJson](./parse-json.md)** - Safely parses JSON strings
- **[isJson](./is-json.md)** - Checks if string is valid JSON
- **[copyObject](./copy-object.md)** - Creates deep copies of objects
- **[cleanObject](./clean-object.md)** - Cleans object properties

## Use Cases
- **Safe Logging**: Logging complex objects without circular reference errors
- **API Serialization**: Converting objects to JSON for API responses
- **Configuration Storage**: Serializing configuration objects
- **Error Reporting**: Converting error objects to JSON for logging
- **Deep Cloning**: Creating deep copies via stringify/parse
- **Data Persistence**: Storing JavaScript objects as JSON strings
- **Debugging**: Converting complex data structures to readable strings

## Performance Notes
- Uses `WeakSet` for efficient circular reference detection
- Minimal overhead for objects without circular references
- Performance scales with object complexity and depth
- Memory efficient - `WeakSet` allows garbage collection of processed objects
- Suitable for most real-world use cases

## Best Practices
- Use for safe serialization when circular references are possible
- Consider using standard `JSON.stringify` for simple objects without circular references
- Be aware that functions, symbols, and undefined values are omitted
- Remember that dates become ISO strings and need parsing when deserializing
- Use with `parseJson()` for safe round-trip serialization
- Consider the performance impact for very large or deeply nested objects 