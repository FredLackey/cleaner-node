# body

## Purpose
Asynchronously extracts the request body from a request object. Primarily designed for Next.js environments, falling back to `req.body` if present. Logs an error and returns an empty object if the request object is invalid.

## Syntax
```javascript
const _ = require('cleaner-node');

_.body(req)
```

## Parameters
- **req** (object): The request object (e.g., from an HTTP request).

## Returns
- **Promise<object>**: A promise that resolves to the request body object.

## Examples

### Basic Usage
```javascript
const _ = require('cleaner-node');

// In an async route handler
async function handleRequest(req, res) {
  const requestBody = await _.body(req);
  
  console.log('Request body:', requestBody);
  
  if (requestBody.action) {
    // Process the action
    console.log('Processing action:', requestBody.action);
  }
}
```

### Next.js API Route
```javascript
const _ = require('cleaner-node');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const body = await _.body(req);
    
    // Validate required fields
    if (!body.name || !body.email) {
      return res.status(400).json({ error: 'Name and email required' });
    }
    
    // Process the request
    const result = await processUser(body);
    
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
```

### Express.js Compatibility
```javascript
const _ = require('cleaner-node');

// Works with Express.js when body-parser is used
app.post('/api/data', async (req, res) => {
  const body = await _.body(req);
  
  // If Express body-parser processed the body, it returns req.body
  // Otherwise, it attempts to parse the body for Next.js compatibility
  
  console.log('Received data:', body);
  res.json({ received: body });
});
```

### Error Handling
```javascript
const _ = require('cleaner-node');

async function robustBodyExtraction(req) {
  try {
    const body = await _.body(req);
    
    // Check if body is empty object (error case)
    if (Object.keys(body).length === 0) {
      console.warn('Empty body received - possible parsing error');
      return { error: 'No data received' };
    }
    
    return body;
  } catch (error) {
    console.error('Failed to extract body:', error);
    return { error: 'Failed to parse request body' };
  }
}
```

### Middleware Usage
```javascript
const _ = require('cleaner-node');

// Custom middleware to extract and validate body
async function bodyExtractor(req, res, next) {
  try {
    req.parsedBody = await _.body(req);
    
    // Add timestamp
    req.parsedBody._receivedAt = new Date().toISOString();
    
    next();
  } catch (error) {
    console.error('Body extraction failed:', error);
    return res.status(400).json({ error: 'Invalid request body' });
  }
}

// Use in routes
app.use('/api', bodyExtractor);

app.post('/api/submit', (req, res) => {
  const { parsedBody } = req;
  console.log('Processing body received at:', parsedBody._receivedAt);
  // Process parsedBody...
});
```

### Content Type Handling
```javascript
const _ = require('cleaner-node');

async function handleMultipleContentTypes(req, res) {
  const body = await _.body(req);
  
  const contentType = req.headers['content-type'];
  
  if (contentType?.includes('application/json')) {
    console.log('JSON data:', body);
  } else if (contentType?.includes('application/x-www-form-urlencoded')) {
    console.log('Form data:', body);
  } else {
    console.log('Other data:', body);
  }
  
  // Process regardless of content type
  return body;
}
```

### Invalid Request Handling
```javascript
const _ = require('cleaner-node');

async function safeBodyExtraction(req) {
  // Handle null/undefined requests
  const body = await _.body(req);
  
  if (!req) {
    console.error('No request object provided');
    // _.body will log error and return {}
    return body; // {}
  }
  
  return body;
}

// Examples
console.log(await safeBodyExtraction(null));      // {} (empty object)
console.log(await safeBodyExtraction(undefined)); // {} (empty object)
```

## Related Functions
- **[getBody](./get-body.md)** - The main function this wraps.
- **[nextjs](./nextjs.md)** - Next.js specific utilities.
- **[express](./express.md)** - Express.js specific utilities.
- **[isValidObject](./is-valid-object.md)** - Validates objects.
- **[parseJson](./parse-json.md)** - Safely parses JSON strings.
