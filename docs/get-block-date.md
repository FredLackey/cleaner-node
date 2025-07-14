# getBlockDate

## Purpose
Formats a Date object into a blockdate string (e.g., YYYYMMDDHHmmssSSS). The output string can be truncated to a specific length based on the format parameter.

## Syntax
```javascript
const _ = require('cleaner-node');

_.getBlockDate(value, format)
```

## Parameters
- **value** (Date, optional): The Date object to format. Defaults to the current date and time.
- **format** (string, optional): A string indicating the desired length/precision. The output will be truncated to the length of this format string. Defaults to 'YYYYMMDDHHmmSS:SSS'.

## Returns
- **string**: The formatted blockdate string.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Current date and time
console.log(_.getBlockDate()); // '20240115142530123' (example)

// Specific date
const date = new Date('2024-01-15T14:25:30.123Z');
console.log(_.getBlockDate(date)); // '20240115142530123'
```

### Format Truncation
```javascript
const _ = require('cleaner-node');

const date = new Date('2024-01-15T14:25:30.123Z');

// Date only (8 characters)
console.log(_.getBlockDate(date, 'YYYYMMDD')); // '20240115'

// Date and time (12 characters)  
console.log(_.getBlockDate(date, 'YYYYMMDDHHmm')); // '202401151425'

// Full precision (17 characters)
console.log(_.getBlockDate(date, 'YYYYMMDDHHmmssSSS')); // '20240115142530123'

// Custom length (10 characters)
console.log(_.getBlockDate(date, '1234567890')); // '2024011514'
```

### File Naming
```javascript
const _ = require('cleaner-node');

// Generate unique filenames
const timestamp = _.getBlockDate();
const filename = `backup_${timestamp}.sql`;
console.log(filename); // 'backup_20240115142530123.sql'

// Date-only filenames
const dateOnly = _.getBlockDate(new Date(), 'YYYYMMDD');
const logFile = `log_${dateOnly}.txt`;
console.log(logFile); // 'log_20240115.txt'
```

### Database Keys
```javascript
const _ = require('cleaner-node');

// Generate sortable database keys
function generateSortableId(prefix = '') {
  const blockdate = _.getBlockDate();
  return `${prefix}${blockdate}`;
}

console.log(generateSortableId('user_')); // 'user_20240115142530123'
console.log(generateSortableId('order_')); // 'order_20240115142530456'
```

### Time-based Directories
```javascript
const _ = require('cleaner-node');

// Create time-based directory structure
function createTimeBasedPath(baseDir = '/uploads') {
  const date = new Date();
  
  const year = _.getBlockDate(date, 'YYYY');     // '2024'
  const month = _.getBlockDate(date, 'YYYYMM');  // '202401' 
  const day = _.getBlockDate(date, 'YYYYMMDD');  // '20240115'
  
  return `${baseDir}/${year}/${month}/${day}`;
}

console.log(createTimeBasedPath()); // '/uploads/2024/202401/20240115'
```

### Comparison and Sorting
```javascript
const _ = require('cleaner-node');

// Generate sortable timestamps for events
const events = [
  { name: 'Event A', timestamp: _.getBlockDate(new Date('2024-01-15T10:00:00')) },
  { name: 'Event B', timestamp: _.getBlockDate(new Date('2024-01-15T09:30:00')) },
  { name: 'Event C', timestamp: _.getBlockDate(new Date('2024-01-15T11:15:00')) }
];

// Sort by timestamp (string comparison works due to format)
events.sort((a, b) => a.timestamp.localeCompare(b.timestamp));

events.forEach(event => {
  console.log(`${event.name}: ${event.timestamp}`);
});
// Event B: 20240115093000000
// Event A: 20240115100000000  
// Event C: 20240115111500000
```

### Different Precisions
```javascript
const _ = require('cleaner-node');

const now = new Date();

// Various precisions for different use cases
const formats = {
  year: 'YYYY',           // 4 chars
  month: 'YYYYMM',        // 6 chars
  day: 'YYYYMMDD',        // 8 chars
  hour: 'YYYYMMDDHH',     // 10 chars
  minute: 'YYYYMMDDHHmm', // 12 chars
  second: 'YYYYMMDDHHmmss', // 14 chars
  millisecond: 'YYYYMMDDHHmmssSSS' // 17 chars
};

Object.entries(formats).forEach(([name, format]) => {
  console.log(`${name}: ${_.getBlockDate(now, format)}`);
});
```

## Related Functions
- **[fromBlockDate](./from-block-date.md)** - Converts blockdate strings back to Date objects.
- **[isBlockDate](./is-block-date.md)** - Checks if a string is a valid blockdate.
- **[blockdate](./blockdate.md)** - Blockdate utility collection.
- **[now](./now.md)** - Gets current timestamp utilities.
- **[toEpoch](./to-epoch.md)** - Converts dates to epoch timestamps.
