# count

## Purpose
Gets the length of an array. This is a convenience alias for the `getArrayCount` function. Handles non-array inputs gracefully by returning -1.

## Syntax
```javascript
const _ = require('cleaner-node');

_.count(value)
```

## Parameters
- **value** (any): The value to check, expected to be an array.

## Returns
- **number**: The length of the array if it's a valid array (including empty arrays), otherwise -1.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Array counting
console.log(_.count([1, 2, 3, 4])); // 4
console.log(_.count(['a', 'b', 'c'])); // 3
console.log(_.count([])); // 0

// Mixed type arrays
console.log(_.count([null, undefined, 0, false, ''])); // 5
```

### Validation
```javascript
const _ = require('cleaner-node');

function processItems(items) {
  const itemCount = _.count(items);
  
  if (itemCount === -1) {
    throw new Error('Expected an array');
  }
  
  if (itemCount === 0) {
    console.log('No items to process');
    return;
  }
  
  console.log(`Processing ${itemCount} items`);
  // Process items...
}

processItems([1, 2, 3]); // "Processing 3 items"
processItems([]);        // "No items to process"
// processItems('invalid'); // Throws error
```

### Conditional Logic
```javascript
const _ = require('cleaner-node');

const users = ['alice', 'bob', 'charlie'];
const userCount = _.count(users);

if (userCount > 0) {
  console.log(`Found ${userCount} users`);
  
  if (userCount === 1) {
    console.log('Single user mode');
  } else {
    console.log('Multi-user mode');
  }
} else if (userCount === 0) {
  console.log('No users found');
} else {
  console.log('Invalid user data');
}
```

### Data Analysis
```javascript
const _ = require('cleaner-node');

const datasets = {
  sales: [100, 200, 150, 300],
  customers: ['John', 'Jane', 'Bob'],
  products: []
};

Object.keys(datasets).forEach(key => {
  const count = _.count(datasets[key]);
  console.log(`${key}: ${count} items`);
});

// Output:
// sales: 4 items
// customers: 3 items  
// products: 0 items
```

### Invalid Inputs
```javascript
const _ = require('cleaner-node');

// Non-array inputs return -1
console.log(_.count(null));      // -1
console.log(_.count(undefined)); // -1
console.log(_.count('string'));  // -1
console.log(_.count(123));       // -1
console.log(_.count({}));        // -1
console.log(_.count(true));      // -1
```

### Nested Arrays
```javascript
const _ = require('cleaner-node');

const matrix = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

console.log(_.count(matrix)); // 3 (outer array length)

// Count total elements in all sub-arrays
const totalElements = matrix.reduce((sum, row) => {
  const rowCount = _.count(row);
  return rowCount > 0 ? sum + rowCount : sum;
}, 0);

console.log(totalElements); // 8
```

## Related Functions
- **[getArrayCount](./get-array-count.md)** - The full function that this aliases.
- **[isValidArray](./is-valid-array.md)** - Checks if a value is a valid array.
- **[first](./first.md)** - Gets the first element of an array.
- **[last](./last.md)** - Gets the last element of an array.
- **[single](./single.md)** - Gets the element if array has exactly one element.
