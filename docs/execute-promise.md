# executePromise

## Purpose
Executes a shell command asynchronously using child_process.exec and returns a promise. The promise resolves with stdout or rejects with error/stderr.

## Syntax
```javascript
const _ = require('cleaner-node');

_.executePromise(command)
```

## Parameters
- **command** (string): The shell command to execute.

## Returns
- **Promise**: Resolves with `{stdout: string}` or rejects with `{error: Error}` or `{stderr: string}`.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

try {
  const result = await _.executePromise('ls -la');
  console.log('Files:', result.stdout);
} catch (error) {
  console.error('Command failed:', error);
}
```

## Related Functions
- **[execute](./execute.md)** - Higher-level wrapper with success/error structure.
