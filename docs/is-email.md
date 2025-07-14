# isEmail

Checks if a string is a valid email address format.

## Purpose

The `isEmail` function validates whether a string matches a valid email address format. It uses the `getEmail` function internally to clean the input and then compares it to the original value to ensure the email is properly formatted.

## Syntax

```javascript
const _ = require('cleaner-node');
const result = _.isEmail(value);
```

## Parameters

- **value** (string): The string to validate as an email address

## Returns

**boolean**: `true` if the string is a valid email format, `false` otherwise

## Examples

### Basic Usage

```javascript
const _ = require('cleaner-node');

// Valid email addresses
console.log(_.isEmail('user@example.com'));        // true
console.log(_.isEmail('test.email@domain.org'));   // true
console.log(_.isEmail('user+tag@example.co.uk'));  // true
console.log(_.isEmail('123@numbers.com'));         // true

// Invalid email addresses
console.log(_.isEmail('invalid-email'));           // false
console.log(_.isEmail('user@'));                   // false
console.log(_.isEmail('@domain.com'));             // false
console.log(_.isEmail('user space@domain.com'));   // false
console.log(_.isEmail(''));                        // false
console.log(_.isEmail(null));                      // false
console.log(_.isEmail(undefined));                 // false
```

### User Registration Validation

```javascript
const _ = require('cleaner-node');

function validateUserRegistration(userData) {
  const validation = {
    isValid: true,
    errors: []
  };
  
  if (!_.isEmail(userData.email)) {
    validation.isValid = false;
    validation.errors.push('Please provide a valid email address');
  }
  
  if (userData.alternateEmail && !_.isEmail(userData.alternateEmail)) {
    validation.isValid = false;
    validation.errors.push('Alternate email must be a valid email address');
  }
  
  return validation;
}

// Valid registration
const validUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  alternateEmail: 'john.personal@gmail.com'
};
console.log(validateUserRegistration(validUser)); 
// { isValid: true, errors: [] }

// Invalid registration
const invalidUser = {
  name: 'Jane Doe',
  email: 'invalid-email',
  alternateEmail: 'also@invalid@email.com'
};
console.log(validateUserRegistration(invalidUser)); 
// { isValid: false, errors: ['Please provide a valid email address', 'Alternate email must be a valid email address'] }
```

### Contact Form Processing

```javascript
const _ = require('cleaner-node');

function processContactForm(formData) {
  const errors = [];
  
  // Validate primary email
  if (!_.isEmail(formData.email)) {
    errors.push('A valid email address is required');
  }
  
  // Validate CC emails if provided
  if (formData.ccEmails && Array.isArray(formData.ccEmails)) {
    const invalidCcEmails = formData.ccEmails.filter(email => !_.isEmail(email));
    if (invalidCcEmails.length > 0) {
      errors.push(`Invalid CC email addresses: ${invalidCcEmails.join(', ')}`);
    }
  }
  
  if (errors.length > 0) {
    return { success: false, errors };
  }
  
  // Process form submission
  return {
    success: true,
    message: 'Contact form submitted successfully',
    recipients: [formData.email, ...(formData.ccEmails || [])]
  };
}

// Valid form
const validForm = {
  name: 'Alice Smith',
  email: 'alice@company.com',
  message: 'Hello world',
  ccEmails: ['boss@company.com', 'hr@company.com']
};
console.log(processContactForm(validForm));
// { success: true, message: 'Contact form submitted successfully', recipients: ['alice@company.com', 'boss@company.com', 'hr@company.com'] }

// Invalid form
const invalidForm = {
  name: 'Bob Jones',
  email: 'invalid-email',
  message: 'Hello',
  ccEmails: ['valid@email.com', 'invalid-email', 'another@invalid@email']
};
console.log(processContactForm(invalidForm));
// { success: false, errors: ['A valid email address is required', 'Invalid CC email addresses: invalid-email, another@invalid@email'] }
```

### Email List Validation

```javascript
const _ = require('cleaner-node');

function validateEmailList(emails) {
  if (!Array.isArray(emails)) {
    return {
      valid: false,
      error: 'Email list must be an array',
      validEmails: [],
      invalidEmails: []
    };
  }
  
  const validEmails = [];
  const invalidEmails = [];
  
  emails.forEach(email => {
    if (_.isEmail(email)) {
      validEmails.push(email);
    } else {
      invalidEmails.push(email);
    }
  });
  
  return {
    valid: invalidEmails.length === 0,
    totalCount: emails.length,
    validCount: validEmails.length,
    invalidCount: invalidEmails.length,
    validEmails,
    invalidEmails
  };
}

const emailList = [
  'user1@example.com',
  'user2@example.com',
  'invalid-email',
  'user3@domain.org',
  'another@invalid@email.com',
  'valid.email@test.co.uk'
];

const result = validateEmailList(emailList);
console.log(result);
// {
//   valid: false,
//   totalCount: 6,
//   validCount: 4,
//   invalidCount: 2,
//   validEmails: ['user1@example.com', 'user2@example.com', 'user3@domain.org', 'valid.email@test.co.uk'],
//   invalidEmails: ['invalid-email', 'another@invalid@email.com']
// }
```

### User Profile Updates

```javascript
const _ = require('cleaner-node');

function updateUserProfile(userId, updates) {
  const validationErrors = [];
  const processedUpdates = {};
  
  // Validate email changes
  if (updates.email !== undefined) {
    if (_.isEmail(updates.email)) {
      processedUpdates.email = updates.email;
    } else {
      validationErrors.push('New email address is not valid');
    }
  }
  
  // Validate notification email changes
  if (updates.notificationEmail !== undefined) {
    if (updates.notificationEmail === '' || _.isEmail(updates.notificationEmail)) {
      processedUpdates.notificationEmail = updates.notificationEmail || null;
    } else {
      validationErrors.push('Notification email address is not valid');
    }
  }
  
  // Handle backup emails array
  if (updates.backupEmails !== undefined) {
    if (Array.isArray(updates.backupEmails)) {
      const invalidBackupEmails = updates.backupEmails.filter(email => !_.isEmail(email));
      if (invalidBackupEmails.length === 0) {
        processedUpdates.backupEmails = updates.backupEmails;
      } else {
        validationErrors.push(`Invalid backup emails: ${invalidBackupEmails.join(', ')}`);
      }
    } else {
      validationErrors.push('Backup emails must be an array');
    }
  }
  
  if (validationErrors.length > 0) {
    return { success: false, errors: validationErrors };
  }
  
  // Simulate database update
  console.log(`Updating user ${userId} with:`, processedUpdates);
  return { success: true, updated: processedUpdates };
}

// Valid updates
const validUpdates = {
  email: 'newemail@example.com',
  notificationEmail: 'notifications@example.com',
  backupEmails: ['backup1@example.com', 'backup2@example.com']
};
console.log(updateUserProfile('user123', validUpdates));
// { success: true, updated: { email: 'newemail@example.com', notificationEmail: 'notifications@example.com', backupEmails: ['backup1@example.com', 'backup2@example.com'] } }

// Invalid updates
const invalidUpdates = {
  email: 'invalid-email',
  notificationEmail: 'also@invalid@email.com',
  backupEmails: ['valid@email.com', 'invalid-backup']
};
console.log(updateUserProfile('user456', invalidUpdates));
// { success: false, errors: ['New email address is not valid', 'Notification email address is not valid', 'Invalid backup emails: invalid-backup'] }
```

### Email Configuration Validation

```javascript
const _ = require('cleaner-node');

function validateEmailConfig(config) {
  const errors = [];
  
  // Required email settings
  if (!_.isEmail(config.fromEmail)) {
    errors.push('fromEmail must be a valid email address');
  }
  
  if (!_.isEmail(config.replyToEmail)) {
    errors.push('replyToEmail must be a valid email address');
  }
  
  // Optional email settings
  if (config.bccEmail && !_.isEmail(config.bccEmail)) {
    errors.push('bccEmail must be a valid email address if provided');
  }
  
  if (config.bounceEmail && !_.isEmail(config.bounceEmail)) {
    errors.push('bounceEmail must be a valid email address if provided');
  }
  
  // Admin emails array
  if (config.adminEmails) {
    if (!Array.isArray(config.adminEmails)) {
      errors.push('adminEmails must be an array if provided');
    } else {
      const invalidAdminEmails = config.adminEmails.filter(email => !_.isEmail(email));
      if (invalidAdminEmails.length > 0) {
        errors.push(`Invalid admin emails: ${invalidAdminEmails.join(', ')}`);
      }
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Valid configuration
const validConfig = {
  fromEmail: 'noreply@company.com',
  replyToEmail: 'support@company.com',
  bccEmail: 'archive@company.com',
  adminEmails: ['admin1@company.com', 'admin2@company.com']
};
console.log(validateEmailConfig(validConfig)); 
// { isValid: true, errors: [] }

// Invalid configuration
const invalidConfig = {
  fromEmail: 'invalid-from-email',
  replyToEmail: 'support@company.com',
  bccEmail: 'invalid@bcc@email.com',
  adminEmails: ['admin1@company.com', 'invalid-admin-email']
};
console.log(validateEmailConfig(invalidConfig));
// { isValid: false, errors: ['fromEmail must be a valid email address', 'bccEmail must be a valid email address if provided', 'Invalid admin emails: invalid-admin-email'] }
```

## Related Functions

- [`getEmail`](./get-email.md) - Extracts and cleans email addresses from strings
- [`isValidString`](./is-valid-string.md) - Validates string values
- [`isUrl`](./is-url.md) - Validates URL format
- [`isPhoneNumber`](./is-phone-number.md) - Validates phone number format 