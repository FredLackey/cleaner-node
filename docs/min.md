# min

## Purpose
Finds the minimum numeric value in an array. This is a convenience alias for the `getMin` function. Filters out non-numeric values before comparison and handles both number primitives and string representations of numbers.

## Syntax
```javascript
const _ = require('cleaner-node');

_.min(values)
```

## Parameters
- **values** (Array<number|string|any>): An array containing potential numbers.

## Returns
- **number|string|null**: The minimum numeric value found (preserving its original type), or `null` if the array contains no numbers.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Numeric arrays
console.log(_.min([5, 2, 8, 1, 9])); // 1
console.log(_.min([3.14, 2.71, 1.41])); // 1.41
console.log(_.min([-5, -2, -8, -1])); // -8

// String numbers (preserves type)
console.log(_.min(['5', '2', '8', '1'])); // '1'
console.log(_.min(['3.14', '2.71', '1.41'])); // '1.41'
```

### Mixed Types
```javascript
const _ = require('cleaner-node');

// Mixed numeric and non-numeric values
console.log(_.min([5, 'abc', 2, null, 8, undefined, 1])); // 1

// Mixed numbers and string numbers
console.log(_.min([5, '2', 8, '1', 9])); // '1' (preserves string type)

// No numeric values
console.log(_.min(['abc', null, undefined, {}])); // null
```

### Real-world Examples
```javascript
const _ = require('cleaner-node');

// Find lowest price
const prices = [29.99, 19.95, 39.99, 15.50, 25.00];
const lowestPrice = _.min(prices);
console.log(`Lowest price: $${lowestPrice}`); // Lowest price: $15.5

// Find minimum score
const testScores = [85, 92, 78, 96, 88];
const minScore = _.min(testScores);
console.log(`Minimum score: ${minScore}`); // Minimum score: 78
```

### Data Analysis
```javascript
const _ = require('cleaner-node');

// Analyze dataset minimums
const salesData = {
  january: [1000, 1200, 800, 1500],
  february: [900, 1100, 750, 1300],
  march: [1200, 1400, 1000, 1600]
};

Object.keys(salesData).forEach(month => {
  const minSales = _.min(salesData[month]);
  console.log(`${month} minimum: ${minSales}`);
});

// Output:
// january minimum: 800
// february minimum: 750
// march minimum: 1000
```

### Temperature Monitoring
```javascript
const _ = require('cleaner-node');

// Find daily minimum temperatures
const temperatureReadings = [
  { time: '00:00', temp: 18.5 },
  { time: '06:00', temp: 15.2 },
  { time: '12:00', temp: 23.1 },
  { time: '18:00', temp: 20.7 }
];

const temperatures = temperatureReadings.map(reading => reading.temp);
const minTemp = _.min(temperatures);

console.log(`Daily minimum temperature: ${minTemp}°C`); // 15.2°C
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Empty array
console.log(_.min([])); // null

// Single value
console.log(_.min([42])); // 42
console.log(_.min(['42'])); // '42'

// All non-numeric
console.log(_.min([null, undefined, 'abc', {}])); // null

// Zero and negative numbers
console.log(_.min([0, -1, 5, -3])); // -3
console.log(_.min([0])); // 0
```

### Type Preservation
```javascript
const _ = require('cleaner-node');

// Numbers stay as numbers
const numberArray = [5, 2, 8, 1];
const minNumber = _.min(numberArray);
console.log(typeof minNumber); // 'number'

// Strings stay as strings
const stringArray = ['5', '2', '8', '1'];
const minString = _.min(stringArray);
console.log(typeof minString); // 'string'
```

## Related Functions
- **[getMin](./get-min.md)** - The full function that this aliases.
- **[max](./max.md)** - Finds the maximum numeric value in an array.
- **[isNumber](./is-number.md)** - Checks if a value is a number.
- **[sort](./sort.md)** - Sorts arrays of various types.
- **[getArrayCount](./get-array-count.md)** - Gets the length of an array.
