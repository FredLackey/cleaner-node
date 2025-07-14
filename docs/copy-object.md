# copyObject

Creates a deep copy of an object using JSON stringification and parsing.

## Purpose

The `copyObject` function creates a deep copy of an object by serializing it to JSON and then parsing it back. This method provides a simple way to clone objects, though it has limitations with non-JSON-serializable values like functions, Dates, or undefined properties.

## Syntax

```javascript
const _ = require('cleaner-node');
const result = _.copyObject(item);
```

## Parameters

- **item** (object): The object to copy

## Returns

**object**: A deep copy of the input object

## Examples

### Basic Usage

```javascript
const _ = require('cleaner-node');

const original = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York'
  },
  hobbies: ['reading', 'swimming']
};

const copy = _.copyObject(original);

// Modify the copy
copy.name = 'Jane';
copy.address.city = 'Boston';
copy.hobbies.push('cooking');

console.log(original.name);        // 'John' (unchanged)
console.log(original.address.city); // 'New York' (unchanged)
console.log(original.hobbies);     // ['reading', 'swimming'] (unchanged)

console.log(copy.name);            // 'Jane'
console.log(copy.address.city);    // 'Boston'
console.log(copy.hobbies);         // ['reading', 'swimming', 'cooking']
```

### Configuration Management

```javascript
const _ = require('cleaner-node');

const defaultConfig = {
  server: {
    port: 3000,
    host: 'localhost'
  },
  database: {
    host: 'db.example.com',
    port: 5432,
    ssl: true
  },
  features: {
    logging: true,
    cache: false
  }
};

function createEnvironmentConfig(env) {
  const config = _.copyObject(defaultConfig);
  
  if (env === 'production') {
    config.server.port = 8080;
    config.database.ssl = true;
    config.features.cache = true;
  } else if (env === 'development') {
    config.server.port = 3001;
    config.database.host = 'localhost';
    config.database.ssl = false;
  }
  
  return config;
}

const prodConfig = createEnvironmentConfig('production');
const devConfig = createEnvironmentConfig('development');

console.log(defaultConfig.server.port);    // 3000 (unchanged)
console.log(prodConfig.server.port);       // 8080
console.log(devConfig.server.port);        // 3001
```

### API Response Processing

```javascript
const _ = require('cleaner-node');

function processApiResponse(response) {
  // Create a copy to avoid modifying the original response
  const processedResponse = _.copyObject(response);
  
  // Add computed fields
  if (processedResponse.data && Array.isArray(processedResponse.data)) {
    processedResponse.meta = {
      totalCount: processedResponse.data.length,
      processedAt: new Date().toISOString(),
      hasData: processedResponse.data.length > 0
    };
    
    // Process each item
    processedResponse.data.forEach(item => {
      if (item.createdAt) {
        item.isRecent = new Date(item.createdAt) > new Date(Date.now() - 24 * 60 * 60 * 1000);
      }
    });
  }
  
  return processedResponse;
}

const originalResponse = {
  status: 'success',
  data: [
    { id: 1, name: 'Item 1', createdAt: '2023-12-01T10:00:00Z' },
    { id: 2, name: 'Item 2', createdAt: '2023-12-15T15:30:00Z' }
  ]
};

const processed = processApiResponse(originalResponse);

console.log('Original has meta:', 'meta' in originalResponse); // false
console.log('Processed has meta:', 'meta' in processed);       // true
console.log('Items processed:', processed.data[0].isRecent !== undefined); // true
```

### Form Data Backup

```javascript
const _ = require('cleaner-node');

class FormManager {
  constructor() {
    this.formData = {};
    this.backups = [];
  }
  
  updateField(fieldName, value) {
    this.formData[fieldName] = value;
  }
  
  createBackup(label = 'Auto backup') {
    const backup = {
      label,
      timestamp: Date.now(),
      data: _.copyObject(this.formData)
    };
    
    this.backups.push(backup);
    
    // Keep only last 5 backups
    if (this.backups.length > 5) {
      this.backups.shift();
    }
    
    return backup;
  }
  
  restoreBackup(index) {
    if (index >= 0 && index < this.backups.length) {
      this.formData = _.copyObject(this.backups[index].data);
      return true;
    }
    return false;
  }
  
  getBackupHistory() {
    return this.backups.map(backup => ({
      label: backup.label,
      timestamp: backup.timestamp,
      fieldCount: Object.keys(backup.data).length
    }));
  }
}

const form = new FormManager();

// Fill out form
form.updateField('name', 'John Doe');
form.updateField('email', 'john@example.com');
form.createBackup('Initial data');

// Make changes
form.updateField('name', 'Jane Smith');
form.updateField('phone', '555-1234');
form.createBackup('Added phone');

// Make more changes
form.updateField('address', '123 Main St');
form.createBackup('Added address');

console.log('Current form:', form.formData);
console.log('Backup history:', form.getBackupHistory());

// Restore previous version
form.restoreBackup(1);
console.log('Restored form:', form.formData); // Back to "Added phone" state
```

### Template Customization

```javascript
const _ = require('cleaner-node');

const baseTemplate = {
  layout: {
    header: { show: true, height: 60 },
    sidebar: { show: true, width: 250 },
    footer: { show: true, height: 40 }
  },
  theme: {
    colors: {
      primary: '#007bff',
      secondary: '#6c757d',
      background: '#ffffff'
    },
    fonts: {
      primary: 'Arial, sans-serif',
      secondary: 'Georgia, serif'
    }
  },
  features: ['search', 'notifications', 'profile']
};

function createCustomTemplate(templateName, customizations = {}) {
  const template = _.copyObject(baseTemplate);
  
  // Apply customizations
  Object.keys(customizations).forEach(section => {
    if (template[section]) {
      Object.assign(template[section], customizations[section]);
    }
  });
  
  template.name = templateName;
  template.createdAt = new Date().toISOString();
  
  return template;
}

// Create different template variations
const mobileTemplate = createCustomTemplate('Mobile', {
  layout: {
    sidebar: { show: false },
    header: { height: 50 }
  },
  theme: {
    colors: { primary: '#28a745' }
  }
});

const dashboardTemplate = createCustomTemplate('Dashboard', {
  layout: {
    sidebar: { width: 300 }
  },
  theme: {
    colors: { 
      primary: '#dc3545',
      background: '#f8f9fa'
    }
  }
});

console.log('Base template unchanged:', baseTemplate.layout.sidebar.show); // true
console.log('Mobile sidebar hidden:', mobileTemplate.layout.sidebar.show); // false
console.log('Dashboard wider sidebar:', dashboardTemplate.layout.sidebar.width); // 300
```

## Limitations

⚠️ **Important Notes:**

- **Functions**: Function properties are lost during JSON serialization
- **Dates**: Date objects become strings and need to be converted back
- **undefined**: Properties with `undefined` values are removed
- **Symbols**: Symbol properties are not copied
- **Circular references**: Will cause errors during JSON serialization

```javascript
const _ = require('cleaner-node');

const problematic = {
  date: new Date(),
  func: () => 'hello',
  undef: undefined,
  symbol: Symbol('test')
};

const copy = _.copyObject(problematic);

console.log(copy.date instanceof Date);     // false (it's a string now)
console.log(typeof copy.func);              // 'undefined' (function was lost)
console.log('undef' in copy);               // false (undefined property removed)
console.log('symbol' in copy);              // false (symbol property lost)
```

## Related Functions

- [`cleanObject`](./clean-object.md) - Removes undefined properties from objects
- [`isObject`](./is-object.md) - Validates object values
- [`isValidObject`](./is-valid-object.md) - Validates non-empty objects
- [`stringify`](./stringify.md) - Converts objects to JSON strings 