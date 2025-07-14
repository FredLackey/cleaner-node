# isAsync

Checks if a value is an async function.

## Purpose

The `isAsync` function determines whether a value is an async function by checking if it's a function and its constructor name is 'AsyncFunction'. This is useful for distinguishing between regular functions and async functions when handling different types of callbacks or operations.

## Syntax

```javascript
const _ = require('cleaner-node');
const result = _.isAsync(value);
```

## Parameters

- **value** (any): The value to check

## Returns

**boolean**: `true` if the value is an async function, `false` otherwise

## Examples

### Basic Usage

```javascript
const _ = require('cleaner-node');

// Async functions
console.log(_.isAsync(async function() {}));     // true
console.log(_.isAsync(async () => {}));          // true
console.log(_.isAsync(async function named() {})); // true

// Regular functions
console.log(_.isAsync(function() {}));           // false
console.log(_.isAsync(() => {}));                // false
console.log(_.isAsync(console.log));             // false

// Non-functions
console.log(_.isAsync('async function'));        // false
console.log(_.isAsync({}));                      // false
console.log(_.isAsync(null));                    // false
console.log(_.isAsync(undefined));               // false
```

### Async Operation Handler

```javascript
const _ = require('cleaner-node');

async function executeOperation(operation, data) {
  if (!_.isFunction(operation)) {
    throw new Error('Operation must be a function');
  }
  
  try {
    if (_.isAsync(operation)) {
      console.log('Executing async operation...');
      return await operation(data);
    } else {
      console.log('Executing sync operation...');
      return operation(data);
    }
  } catch (error) {
    console.error('Operation failed:', error.message);
    throw error;
  }
}

// Async operation
async function processDataAsync(data) {
  await new Promise(resolve => setTimeout(resolve, 100));
  return data.map(item => item * 2);
}

// Sync operation
function processDataSync(data) {
  return data.map(item => item * 2);
}

// Usage
const data = [1, 2, 3];

executeOperation(processDataAsync, data).then(result => {
  console.log('Async result:', result); // Async result: [2, 4, 6]
});

executeOperation(processDataSync, data).then(result => {
  console.log('Sync result:', result); // Sync result: [2, 4, 6]
});
```

### Task Queue with Mixed Functions

```javascript
const _ = require('cleaner-node');

class TaskQueue {
  constructor() {
    this.tasks = [];
  }
  
  add(task, data = null) {
    if (!_.isFunction(task)) {
      throw new Error('Task must be a function');
    }
    
    this.tasks.push({
      fn: task,
      data: data,
      isAsync: _.isAsync(task)
    });
  }
  
  async execute() {
    const results = [];
    
    for (const task of this.tasks) {
      try {
        let result;
        
        if (task.isAsync) {
          console.log('Executing async task...');
          result = await task.fn(task.data);
        } else {
          console.log('Executing sync task...');
          result = task.fn(task.data);
        }
        
        results.push({ success: true, result });
      } catch (error) {
        results.push({ success: false, error: error.message });
      }
    }
    
    return results;
  }
}

const queue = new TaskQueue();

// Add mixed tasks
queue.add(async (data) => {
  await new Promise(resolve => setTimeout(resolve, 50));
  return `Async: ${data}`;
}, 'test data');

queue.add((data) => `Sync: ${data}`, 'test data');

queue.add(async () => {
  await new Promise(resolve => setTimeout(resolve, 30));
  return 'Async without data';
});

// Execute all tasks
queue.execute().then(results => {
  console.log('Results:', results);
  // Results: [
  //   { success: true, result: 'Async: test data' },
  //   { success: true, result: 'Sync: test data' },
  //   { success: true, result: 'Async without data' }
  // ]
});
```

### Plugin System with Async Detection

```javascript
const _ = require('cleaner-node');

class PluginManager {
  constructor() {
    this.plugins = [];
  }
  
  register(plugin) {
    if (!_.isObject(plugin)) {
      throw new Error('Plugin must be an object');
    }
    
    if (!_.isFunction(plugin.execute)) {
      throw new Error('Plugin must have an execute function');
    }
    
    const pluginInfo = {
      name: plugin.name || 'Anonymous',
      execute: plugin.execute,
      isAsync: _.isAsync(plugin.execute),
      priority: plugin.priority || 0
    };
    
    this.plugins.push(pluginInfo);
    this.plugins.sort((a, b) => b.priority - a.priority);
    
    console.log(`Registered ${pluginInfo.isAsync ? 'async' : 'sync'} plugin: ${pluginInfo.name}`);
  }
  
  async executeAll(context) {
    const results = [];
    
    for (const plugin of this.plugins) {
      try {
        let result;
        
        if (plugin.isAsync) {
          result = await plugin.execute(context);
        } else {
          result = plugin.execute(context);
        }
        
        results.push({
          plugin: plugin.name,
          success: true,
          result: result
        });
      } catch (error) {
        results.push({
          plugin: plugin.name,
          success: false,
          error: error.message
        });
      }
    }
    
    return results;
  }
}

const manager = new PluginManager();

// Register different types of plugins
manager.register({
  name: 'Logger',
  priority: 1,
  execute: (context) => {
    console.log('Logging:', context.message);
    return 'logged';
  }
});

manager.register({
  name: 'AsyncValidator',
  priority: 2,
  execute: async (context) => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return context.message.length > 0 ? 'valid' : 'invalid';
  }
});

manager.register({
  name: 'Transformer',
  execute: (context) => {
    return { ...context, transformed: true };
  }
});

// Execute all plugins
manager.executeAll({ message: 'Hello World' }).then(results => {
  console.log('Plugin results:', results);
});
```

### API Endpoint Handler Detection

```javascript
const _ = require('cleaner-node');

class Router {
  constructor() {
    this.routes = new Map();
  }
  
  addRoute(path, handler) {
    if (!_.isFunction(handler)) {
      throw new Error('Route handler must be a function');
    }
    
    const routeInfo = {
      handler: handler,
      isAsync: _.isAsync(handler)
    };
    
    this.routes.set(path, routeInfo);
    console.log(`Added ${routeInfo.isAsync ? 'async' : 'sync'} route: ${path}`);
  }
  
  async handleRequest(path, req, res) {
    const route = this.routes.get(path);
    
    if (!route) {
      res.status = 404;
      res.body = 'Not Found';
      return;
    }
    
    try {
      let result;
      
      if (route.isAsync) {
        result = await route.handler(req, res);
      } else {
        result = route.handler(req, res);
      }
      
      if (result !== undefined) {
        res.body = result;
      }
    } catch (error) {
      res.status = 500;
      res.body = { error: error.message };
    }
  }
}

const router = new Router();

// Add sync route
router.addRoute('/sync', (req, res) => {
  return { message: 'Sync response', timestamp: Date.now() };
});

// Add async route
router.addRoute('/async', async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 100));
  return { message: 'Async response', timestamp: Date.now() };
});

// Simulate requests
const mockRes = { status: 200, body: null };

router.handleRequest('/sync', {}, mockRes).then(() => {
  console.log('Sync response:', mockRes);
});

router.handleRequest('/async', {}, mockRes).then(() => {
  console.log('Async response:', mockRes);
});
```

## Related Functions

- [`isFunction`](./is-function.md) - Checks if a value is any type of function
- [`isSet`](./is-set.md) - Checks if a value is not null or undefined
- [`isDefined`](./is-defined.md) - Checks if a value is not undefined
- [`isObject`](./is-object.md) - Validates object values 