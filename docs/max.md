# max

## Purpose
Finds the maximum numeric value in an array. This is a convenience alias for the `getMax` function. Filters out non-numeric values before comparison and handles both number primitives and string representations of numbers.

## Syntax
```javascript
const _ = require('cleaner-node');

_.max(values)
```

## Parameters
- **values** (Array<number|string|any>): An array containing potential numbers.

## Returns
- **number|string|null**: The maximum numeric value found (preserving its original type), or `null` if the array contains no numbers.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Numeric arrays
console.log(_.max([5, 2, 8, 1, 9])); // 9
console.log(_.max([3.14, 2.71, 1.41])); // 3.14
console.log(_.max([-5, -2, -8, -1])); // -1

// String numbers (preserves type)
console.log(_.max(['5', '2', '8', '1'])); // '8'
console.log(_.max(['3.14', '2.71', '1.41'])); // '3.14'
```

### Mixed Types
```javascript
const _ = require('cleaner-node');

// Mixed numeric and non-numeric values
console.log(_.max([5, 'abc', 2, null, 8, undefined, 1])); // 8

// Mixed numbers and string numbers
console.log(_.max([5, '2', 8, '1', 9])); // 9 (number type wins)

// No numeric values
console.log(_.max(['abc', null, undefined, {}])); // null
```

### Real-world Examples
```javascript
const _ = require('cleaner-node');

// Find highest price
const prices = [29.99, 19.95, 39.99, 15.50, 25.00];
const highestPrice = _.max(prices);
console.log(`Highest price: $${highestPrice}`); // Highest price: $39.99

// Find maximum score
const testScores = [85, 92, 78, 96, 88];
const maxScore = _.max(testScores);
console.log(`Maximum score: ${maxScore}`); // Maximum score: 96
```

### Performance Metrics
```javascript
const _ = require('cleaner-node');

// Analyze performance data
const responseTimeMs = [120, 89, 156, 203, 98, 145];
const slowestResponse = _.max(responseTimeMs);

if (slowestResponse > 200) {
  console.log(`Performance issue: ${slowestResponse}ms response time`);
} else {
  console.log(`Peak response time: ${slowestResponse}ms`);
}
```

### Data Analysis
```javascript
const _ = require('cleaner-node');

// Analyze dataset maximums
const salesData = {
  january: [1000, 1200, 800, 1500],
  february: [900, 1100, 750, 1300],
  march: [1200, 1400, 1000, 1600]
};

const monthlyPeaks = {};
Object.keys(salesData).forEach(month => {
  monthlyPeaks[month] = _.max(salesData[month]);
});

console.log(monthlyPeaks);
// { january: 1500, february: 1300, march: 1600 }

// Find overall peak
const overallPeak = _.max(Object.values(monthlyPeaks));
console.log(`Overall peak sales: ${overallPeak}`); // 1600
```

### Temperature Monitoring
```javascript
const _ = require('cleaner-node');

// Find daily maximum temperatures
const temperatureReadings = [
  { time: '00:00', temp: 18.5 },
  { time: '06:00', temp: 15.2 },
  { time: '12:00', temp: 23.1 },
  { time: '18:00', temp: 20.7 }
];

const temperatures = temperatureReadings.map(reading => reading.temp);
const maxTemp = _.max(temperatures);

console.log(`Daily maximum temperature: ${maxTemp}°C`); // 23.1°C

// Find when max occurred
const maxReading = temperatureReadings.find(r => r.temp === maxTemp);
console.log(`Peak at: ${maxReading.time}`); // Peak at: 12:00
```

### Edge Cases
```javascript
const _ = require('cleaner-node');

// Empty array
console.log(_.max([])); // null

// Single value
console.log(_.max([42])); // 42
console.log(_.max(['42'])); // '42'

// All non-numeric
console.log(_.max([null, undefined, 'abc', {}])); // null

// Zero and negative numbers
console.log(_.max([0, -1, 5, -3])); // 5
console.log(_.max([0])); // 0
console.log(_.max([-5, -10, -1])); // -1
```

### Type Preservation
```javascript
const _ = require('cleaner-node');

// Numbers stay as numbers
const numberArray = [5, 2, 8, 1];
const maxNumber = _.max(numberArray);
console.log(typeof maxNumber); // 'number'

// Strings stay as strings
const stringArray = ['5', '2', '8', '1'];
const maxString = _.max(stringArray);
console.log(typeof maxString); // 'string'
```

## Related Functions
- **[getMax](./get-max.md)** - The full function that this aliases.
- **[min](./min.md)** - Finds the minimum numeric value in an array.
- **[isNumber](./is-number.md)** - Checks if a value is a number.
- **[sort](./sort.md)** - Sorts arrays of various types.
- **[getArrayCount](./get-array-count.md)** - Gets the length of an array.
