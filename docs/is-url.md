# isUrl

Checks if a string is a valid URL.

## Purpose

The `isUrl` function validates whether a string is a properly formatted URL. It requires the string to start with 'http://' or 'https://', be trimmed of whitespace, and be parseable by the native `URL` constructor. This ensures the URL follows standard web protocols and format.

## Syntax

```javascript
const _ = require('cleaner-node');
const result = _.isUrl(value);
```

## Parameters

- **value** (string): The string to validate as a URL

## Returns

**boolean**: `true` if the string is a valid URL according to the criteria, `false` otherwise

## Examples

### Basic Usage

```javascript
const _ = require('cleaner-node');

// Valid URLs
console.log(_.isUrl('https://example.com'));              // true
console.log(_.isUrl('http://example.com'));               // true
console.log(_.isUrl('https://www.example.com'));          // true
console.log(_.isUrl('https://example.com/path'));         // true
console.log(_.isUrl('https://example.com:8080'));         // true
console.log(_.isUrl('https://subdomain.example.com'));    // true
console.log(_.isUrl('https://example.com/path?query=1')); // true

// Invalid URLs
console.log(_.isUrl('example.com'));                      // false (no protocol)
console.log(_.isUrl('ftp://example.com'));                // false (not http/https)
console.log(_.isUrl('https://example.com '));             // false (trailing space)
console.log(_.isUrl(' https://example.com'));             // false (leading space)
console.log(_.isUrl('not-a-url'));                        // false
console.log(_.isUrl(''));                                 // false
console.log(_.isUrl(null));                               // false
console.log(_.isUrl(undefined));                          // false
```

### Form Validation

```javascript
const _ = require('cleaner-node');

function validateWebsiteForm(formData) {
  const validation = {
    isValid: true,
    errors: []
  };
  
  if (!_.isUrl(formData.website)) {
    validation.isValid = false;
    validation.errors.push('Website must be a valid URL (starting with http:// or https://)');
  }
  
  if (formData.linkedinUrl && !_.isUrl(formData.linkedinUrl)) {
    validation.isValid = false;
    validation.errors.push('LinkedIn URL must be a valid URL');
  }
  
  if (formData.portfolioUrl && !_.isUrl(formData.portfolioUrl)) {
    validation.isValid = false;
    validation.errors.push('Portfolio URL must be a valid URL');
  }
  
  return validation;
}

// Valid form data
const validData = {
  name: 'John Doe',
  website: 'https://johndoe.com',
  linkedinUrl: 'https://linkedin.com/in/johndoe',
  portfolioUrl: 'https://portfolio.johndoe.com'
};
console.log(validateWebsiteForm(validData)); 
// { isValid: true, errors: [] }

// Invalid form data
const invalidData = {
  name: 'Jane Doe',
  website: 'janedoe.com',  // Missing protocol
  linkedinUrl: 'invalid-url',
  portfolioUrl: 'ftp://portfolio.com'  // Wrong protocol
};
console.log(validateWebsiteForm(invalidData)); 
// { isValid: false, errors: ['Website must be a valid URL (starting with http:// or https://)', 'LinkedIn URL must be a valid URL', 'Portfolio URL must be a valid URL'] }
```

### API Configuration Validation

```javascript
const _ = require('cleaner-node');

function validateApiConfig(config) {
  const errors = [];
  
  // Required URL endpoints
  if (!_.isUrl(config.baseUrl)) {
    errors.push('baseUrl must be a valid URL');
  }
  
  if (!_.isUrl(config.authUrl)) {
    errors.push('authUrl must be a valid URL');
  }
  
  // Optional URL endpoints
  if (config.webhookUrl && !_.isUrl(config.webhookUrl)) {
    errors.push('webhookUrl must be a valid URL if provided');
  }
  
  if (config.callbackUrl && !_.isUrl(config.callbackUrl)) {
    errors.push('callbackUrl must be a valid URL if provided');
  }
  
  // Validate endpoint URLs array
  if (config.endpoints && Array.isArray(config.endpoints)) {
    const invalidEndpoints = config.endpoints.filter(endpoint => !_.isUrl(endpoint));
    if (invalidEndpoints.length > 0) {
      errors.push(`Invalid endpoint URLs: ${invalidEndpoints.join(', ')}`);
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Valid configuration
const validConfig = {
  baseUrl: 'https://api.example.com',
  authUrl: 'https://auth.example.com',
  webhookUrl: 'https://webhook.example.com/events',
  endpoints: [
    'https://api.example.com/users',
    'https://api.example.com/orders'
  ]
};
console.log(validateApiConfig(validConfig)); 
// { isValid: true, errors: [] }

// Invalid configuration
const invalidConfig = {
  baseUrl: 'api.example.com',  // Missing protocol
  authUrl: 'https://auth.example.com',
  webhookUrl: 'invalid-webhook-url',
  endpoints: [
    'https://api.example.com/users',
    'invalid-endpoint',
    'ftp://wrong.protocol.com'
  ]
};
console.log(validateApiConfig(invalidConfig));
// { isValid: false, errors: ['baseUrl must be a valid URL', 'webhookUrl must be a valid URL if provided', 'Invalid endpoint URLs: invalid-endpoint, ftp://wrong.protocol.com'] }
```

### Website Link Checker

```javascript
const _ = require('cleaner-node');

function validateWebsiteLinks(links) {
  if (!Array.isArray(links)) {
    return {
      valid: false,
      error: 'Links must be provided as an array',
      validLinks: [],
      invalidLinks: []
    };
  }
  
  const validLinks = [];
  const invalidLinks = [];
  
  links.forEach(link => {
    if (_.isUrl(link)) {
      validLinks.push(link);
    } else {
      invalidLinks.push(link);
    }
  });
  
  return {
    valid: invalidLinks.length === 0,
    totalCount: links.length,
    validCount: validLinks.length,
    invalidCount: invalidLinks.length,
    validLinks,
    invalidLinks
  };
}

const websiteLinks = [
  'https://example.com',
  'http://test.com',
  'invalid-url',
  'https://subdomain.example.com/path',
  'example.com',  // Missing protocol
  'https://another-valid.com'
];

const linkValidation = validateWebsiteLinks(websiteLinks);
console.log(linkValidation);
// {
//   valid: false,
//   totalCount: 6,
//   validCount: 4,
//   invalidCount: 2,
//   validLinks: ['https://example.com', 'http://test.com', 'https://subdomain.example.com/path', 'https://another-valid.com'],
//   invalidLinks: ['invalid-url', 'example.com']
// }
```

### Social Media Profile Validation

```javascript
const _ = require('cleaner-node');

function validateSocialProfiles(profiles) {
  const validation = {
    isValid: true,
    errors: []
  };
  
  const socialPlatforms = ['twitter', 'linkedin', 'github', 'facebook', 'instagram'];
  
  socialPlatforms.forEach(platform => {
    const url = profiles[platform];
    if (url && !_.isUrl(url)) {
      validation.isValid = false;
      validation.errors.push(`${platform} URL must be a valid URL`);
    }
  });
  
  return validation;
}

function createSocialProfileLinks(profiles) {
  const validatedProfiles = validateSocialProfiles(profiles);
  
  if (!validatedProfiles.isValid) {
    return { success: false, errors: validatedProfiles.errors };
  }
  
  const profileLinks = {};
  Object.entries(profiles).forEach(([platform, url]) => {
    if (url && _.isUrl(url)) {
      profileLinks[platform] = url;
    }
  });
  
  return { success: true, profileLinks };
}

// Valid social profiles
const validProfiles = {
  twitter: 'https://twitter.com/username',
  linkedin: 'https://linkedin.com/in/username',
  github: 'https://github.com/username',
  website: 'https://personal-website.com'
};
console.log(createSocialProfileLinks(validProfiles));
// { success: true, profileLinks: { twitter: 'https://twitter.com/username', linkedin: 'https://linkedin.com/in/username', github: 'https://github.com/username', website: 'https://personal-website.com' } }

// Invalid social profiles
const invalidProfiles = {
  twitter: 'twitter.com/username',  // Missing protocol
  linkedin: 'invalid-linkedin-url',
  github: 'https://github.com/username',  // This one is valid
  facebook: 'ftp://facebook.com/user'    // Wrong protocol
};
console.log(createSocialProfileLinks(invalidProfiles));
// { success: false, errors: ['twitter URL must be a valid URL', 'linkedin URL must be a valid URL', 'facebook URL must be a valid URL'] }
```

### Environment Configuration Validation

```javascript
const _ = require('cleaner-node');

function validateEnvironmentUrls(env) {
  const errors = [];
  const urlFields = [
    'API_BASE_URL',
    'DATABASE_URL',
    'REDIS_URL',
    'WEBHOOK_URL',
    'FRONTEND_URL'
  ];
  
  urlFields.forEach(field => {
    const value = env[field];
    if (value && !_.isUrl(value)) {
      errors.push(`${field} must be a valid URL if provided`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

function loadEnvironmentConfig() {
  const env = {
    API_BASE_URL: 'https://api.production.com',
    DATABASE_URL: 'https://database.service.com',
    REDIS_URL: 'invalid-redis-url',  // Invalid
    WEBHOOK_URL: 'https://webhook.service.com/events',
    FRONTEND_URL: 'production.com'   // Invalid - missing protocol
  };
  
  const validation = validateEnvironmentUrls(env);
  
  if (!validation.isValid) {
    console.error('Environment configuration errors:', validation.errors);
    return { success: false, errors: validation.errors };
  }
  
  return { success: true, config: env };
}

const envResult = loadEnvironmentConfig();
console.log(envResult);
// { success: false, errors: ['REDIS_URL must be a valid URL if provided', 'FRONTEND_URL must be a valid URL if provided'] }
```

## Related Functions

- [`isEmail`](./is-email.md) - Validates email address format
- [`isValidString`](./is-valid-string.md) - Validates string values
- [`isIpAddress`](./is-ip-address.md) - Validates IP address format
- [`isPhoneNumber`](./is-phone-number.md) - Validates phone number format 