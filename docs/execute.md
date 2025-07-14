# execute

## Purpose
Executes a shell command asynchronously and returns an object indicating success or failure. Wraps the executePromise function to provide a consistent success/error structure.

## Syntax
```javascript
const _ = require('cleaner-node');

_.execute(command)
```

## Parameters
- **command** (string): The shell command to execute.

## Returns
- **Promise<object>**: An object indicating the outcome with `success` boolean and either `output` or `error`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// Successful command
const result = await _.execute('echo "Hello World"');
if (result.success) {
  console.log('Output:', result.output.stdout); // "Hello World"
} else {
  console.log('Error:', result.error);
}
```

## Related Functions
- **[executePromise](./execute-promise.md)** - Lower-level promise-based execution.
