# single

## Purpose
Returns the first element of an array if it contains exactly one element, otherwise returns `undefined`. This is a convenience alias for the `getSingle` function. Useful for ensuring arrays have exactly one item.

## Syntax
```javascript
const _ = require('cleaner-node');

_.single(value)
```

## Parameters
- **value** (any): The value to check, expected to be an array.

## Returns
- **any**: The first element of the array if it has exactly one element, otherwise `undefined`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Array with single element
console.log(_.single(['only-item'])); // 'only-item'
console.log(_.single([42])); // 42
console.log(_.single([null])); // null

// Arrays with multiple elements
console.log(_.single(['a', 'b'])); // undefined
console.log(_.single([1, 2, 3])); // undefined

// Empty array
console.log(_.single([])); // undefined
```

### Validation Scenarios
```javascript
const _ = require('cleaner-node');

// Database query results
const searchResults = ['user123'];
const user = _.single(searchResults);

if (user) {
  console.log('Found unique user:', user);
} else {
  console.log('Expected exactly one user, found multiple or none');
}
```

### Form Validation
```javascript
const _ = require('cleaner-node');

// Validate unique selection
function validateSingleChoice(choices) {
  const selected = choices.filter(choice => choice.selected);
  const singleChoice = _.single(selected);
  
  if (singleChoice) {
    return { valid: true, choice: singleChoice.value };
  } else {
    return { valid: false, error: 'Must select exactly one option' };
  }
}

const choices = [
  { value: 'A', selected: false },
  { value: 'B', selected: true },
  { value: 'C', selected: false }
];

console.log(validateSingleChoice(choices)); // { valid: true, choice: 'B' }
```

### Configuration Loading
```javascript
const _ = require('cleaner-node');

// Ensure single config file
const configFiles = ['app.config.json'];
const configFile = _.single(configFiles);

if (configFile) {
  console.log('Loading config from:', configFile);
} else {
  throw new Error('Expected exactly one config file');
}
```

### Invalid Inputs
```javascript
const _ = require('cleaner-node');

// Non-array inputs
console.log(_.single(null)); // undefined
console.log(_.single(undefined)); // undefined
console.log(_.single('string')); // undefined
console.log(_.single(123)); // undefined
console.log(_.single({})); // undefined
```

## Related Functions
- **[getSingle](./get-single.md)** - The full function that this aliases.
- **[first](./first.md)** - Gets the first element of an array or character of a string.
- **[last](./last.md)** - Gets the last element of an array or character of a string.
- **[getArrayCount](./get-array-count.md)** - Gets the length of an array.
- **[isValidArray](./is-valid-array.md)** - Checks if a value is a valid array.
