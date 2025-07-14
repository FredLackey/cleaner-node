# copy

## Purpose
Creates a deep copy of an object using JSON stringification and parsing. This is a convenience alias for the `copyObject` function. Note: This method does not handle non-JSON-serializable values like functions, Dates, or undefined.

## Syntax
```javascript
const _ = require('cleaner-node');

_.copy(item)
```

## Parameters
- **item** (object): The object to copy.

## Returns
- **object**: A deep copy of the input object.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

const original = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'coding'],
  address: {
    street: '123 Main St',
    city: 'Anytown'
  }
};

const copied = _.copy(original);

// Modify the copy
copied.name = 'Jane';
copied.hobbies.push('painting');
copied.address.city = 'New City';

console.log(original.name); // 'John' (unchanged)
console.log(copied.name);   // 'Jane'
console.log(original.address.city); // 'Anytown' (unchanged)
console.log(copied.address.city);   // 'New City'
```

### Array of Objects
```javascript
const _ = require('cleaner-node');

const users = [
  { id: 1, name: 'Alice', settings: { theme: 'dark' } },
  { id: 2, name: 'Bob', settings: { theme: 'light' } }
];

const usersCopy = _.copy(users);

// Modify copy
usersCopy[0].name = 'Alice Smith';
usersCopy[0].settings.theme = 'auto';

console.log(users[0].name); // 'Alice' (unchanged)
console.log(usersCopy[0].name); // 'Alice Smith'
```

### Configuration Cloning
```javascript
const _ = require('cleaner-node');

const defaultConfig = {
  api: {
    timeout: 5000,
    retries: 3,
    endpoints: {
      users: '/api/users',
      posts: '/api/posts'
    }
  },
  features: {
    darkMode: false,
    notifications: true
  }
};

// Create environment-specific configs
const devConfig = _.copy(defaultConfig);
devConfig.api.timeout = 10000;
devConfig.api.endpoints.users = '/dev/api/users';

const prodConfig = _.copy(defaultConfig);
prodConfig.api.retries = 5;
prodConfig.features.darkMode = true;

console.log(defaultConfig.api.timeout); // 5000 (unchanged)
console.log(devConfig.api.timeout);     // 10000
console.log(prodConfig.api.timeout);    // 5000
```

### Limitations
```javascript
const _ = require('cleaner-node');

const objectWithLimitations = {
  string: 'hello',
  number: 42,
  boolean: true,
  array: [1, 2, 3],
  nested: { value: 'test' },
  
  // These will be lost or transformed:
  func: function() { return 'hello'; },  // Lost
  date: new Date(),                      // Becomes string
  undefined: undefined,                  // Lost
  symbol: Symbol('test')                 // Lost
};

const copied = _.copy(objectWithLimitations);

console.log(copied.string);    // 'hello' ✓
console.log(copied.func);      // undefined (lost)
console.log(copied.date);      // ISO string, not Date object
console.log('undefined' in copied); // false (property lost)
```

## Related Functions
- **[copyObject](./copy-object.md)** - The full function that this aliases.
- **[stringify](./stringify.md)** - Safely stringifies objects to JSON.
- **[parseJson](./parse-json.md)** - Safely parses JSON strings.
- **[isObject](./is-object.md)** - Checks if a value is an object.
