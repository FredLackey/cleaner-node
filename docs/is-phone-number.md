# isPhoneNumber

Checks if a string matches a common phone number format using a regular expression.

## Purpose

The `isPhoneNumber` function validates whether a string matches common phone number formats. It allows for optional country codes, parentheses around area codes, and spaces/dashes as separators, providing flexible validation for various international and domestic phone number formats.

## Syntax

```javascript
const _ = require('cleaner-node');
const result = _.isPhoneNumber(value);
```

## Parameters

- **value** (string): The string to validate as a phone number

## Returns

**boolean**: `true` if the string matches the phone number pattern, `false` otherwise

## Examples

### Basic Usage

```javascript
const _ = require('cleaner-node');

// Valid phone numbers with country codes
console.log(_.isPhoneNumber('+1 123-456-7890'));      // true
console.log(_.isPhoneNumber('+12 (123) 456-7890'));   // true
console.log(_.isPhoneNumber('+123 123 456 7890'));    // true

// Valid domestic phone numbers
console.log(_.isPhoneNumber('(123) 456-7890'));       // true
console.log(_.isPhoneNumber('123-456-7890'));         // true
console.log(_.isPhoneNumber('123 456 7890'));         // true
console.log(_.isPhoneNumber('1234567890'));           // true

// Valid variations
console.log(_.isPhoneNumber('(123)456-7890'));        // true
console.log(_.isPhoneNumber('123.456.7890'));         // false (dots not supported)

// Invalid phone numbers
console.log(_.isPhoneNumber('+1 (123) 456-78900'));   // false (too many digits)
console.log(_.isPhoneNumber('+1234 123 456 7890'));   // false (country code too long)
console.log(_.isPhoneNumber('123-456-789'));          // false (too few digits)
console.log(_.isPhoneNumber('abc-def-ghij'));         // false (non-numeric)
console.log(_.isPhoneNumber(''));                     // false
console.log(_.isPhoneNumber(null));                   // false
console.log(_.isPhoneNumber(undefined));              // false
```

### Contact Information Validation

```javascript
const _ = require('cleaner-node');

function validateContactInfo(contactData) {
  const validation = {
    isValid: true,
    errors: []
  };
  
  if (!_.isPhoneNumber(contactData.primaryPhone)) {
    validation.isValid = false;
    validation.errors.push('Primary phone number must be in a valid format');
  }
  
  if (contactData.secondaryPhone && !_.isPhoneNumber(contactData.secondaryPhone)) {
    validation.isValid = false;
    validation.errors.push('Secondary phone number must be in a valid format');
  }
  
  if (contactData.emergencyContact && !_.isPhoneNumber(contactData.emergencyContact)) {
    validation.isValid = false;
    validation.errors.push('Emergency contact number must be in a valid format');
  }
  
  return validation;
}

// Valid contact information
const validContact = {
  name: 'John Doe',
  primaryPhone: '+1 (555) 123-4567',
  secondaryPhone: '555-987-6543',
  emergencyContact: '+1 555 111 2222'
};
console.log(validateContactInfo(validContact)); 
// { isValid: true, errors: [] }

// Invalid contact information
const invalidContact = {
  name: 'Jane Doe',
  primaryPhone: 'invalid-phone',
  secondaryPhone: '555-123-45',     // Too short
  emergencyContact: '+1234 555 123 4567'  // Country code too long
};
console.log(validateContactInfo(invalidContact)); 
// { isValid: false, errors: ['Primary phone number must be in a valid format', 'Secondary phone number must be in a valid format', 'Emergency contact number must be in a valid format'] }
```

### User Registration Form Validation

```javascript
const _ = require('cleaner-node');

function validateRegistrationForm(formData) {
  const errors = [];
  
  // Validate phone number
  if (!_.isPhoneNumber(formData.phone)) {
    errors.push('Please provide a valid phone number');
  }
  
  // Validate work phone (optional)
  if (formData.workPhone && !_.isPhoneNumber(formData.workPhone)) {
    errors.push('Work phone number must be in a valid format');
  }
  
  if (errors.length > 0) {
    return { success: false, errors };
  }
  
  return {
    success: true,
    message: 'Registration form is valid',
    formattedData: {
      ...formData,
      phone: formData.phone,
      workPhone: formData.workPhone || null
    }
  };
}

// Valid registration
const validRegistration = {
  name: 'Alice Smith',
  email: 'alice@example.com',
  phone: '(555) 123-4567',
  workPhone: '+1 555-987-6543'
};
console.log(validateRegistrationForm(validRegistration));
// { success: true, message: 'Registration form is valid', formattedData: { name: 'Alice Smith', email: 'alice@example.com', phone: '(555) 123-4567', workPhone: '+1 555-987-6543' } }

// Invalid registration
const invalidRegistration = {
  name: 'Bob Jones',
  email: 'bob@example.com',
  phone: '555-123',
  workPhone: 'not-a-phone'
};
console.log(validateRegistrationForm(invalidRegistration));
// { success: false, errors: ['Please provide a valid phone number', 'Work phone number must be in a valid format'] }
```

### Customer Database Validation

```javascript
const _ = require('cleaner-node');

function validateCustomerData(customers) {
  if (!Array.isArray(customers)) {
    return {
      valid: false,
      error: 'Customer data must be an array',
      validCustomers: [],
      invalidCustomers: []
    };
  }
  
  const validCustomers = [];
  const invalidCustomers = [];
  
  customers.forEach((customer, index) => {
    const errors = [];
    
    if (!_.isPhoneNumber(customer.phone)) {
      errors.push('Invalid phone number');
    }
    
    if (customer.alternatePhone && !_.isPhoneNumber(customer.alternatePhone)) {
      errors.push('Invalid alternate phone number');
    }
    
    if (errors.length === 0) {
      validCustomers.push(customer);
    } else {
      invalidCustomers.push({ ...customer, index, errors });
    }
  });
  
  return {
    valid: invalidCustomers.length === 0,
    totalCount: customers.length,
    validCount: validCustomers.length,
    invalidCount: invalidCustomers.length,
    validCustomers,
    invalidCustomers
  };
}

const customerData = [
  {
    name: 'Customer 1',
    phone: '+1 (555) 123-4567',
    alternatePhone: '555-987-6543'
  },
  {
    name: 'Customer 2',
    phone: 'invalid-phone',
    alternatePhone: '555-111-2222'
  },
  {
    name: 'Customer 3',
    phone: '(555) 444-5555',
    alternatePhone: null
  },
  {
    name: 'Customer 4',
    phone: '+1 555 777 8888',
    alternatePhone: 'bad-alternate'
  }
];

const customerValidation = validateCustomerData(customerData);
console.log(customerValidation);
// {
//   valid: false,
//   totalCount: 4,
//   validCount: 2,
//   invalidCount: 2,
//   validCustomers: [
//     { name: 'Customer 1', phone: '+1 (555) 123-4567', alternatePhone: '555-987-6543' },
//     { name: 'Customer 3', phone: '(555) 444-5555', alternatePhone: null }
//   ],
//   invalidCustomers: [
//     { name: 'Customer 2', phone: 'invalid-phone', alternatePhone: '555-111-2222', index: 1, errors: ['Invalid phone number'] },
//     { name: 'Customer 4', phone: '+1 555 777 8888', alternatePhone: 'bad-alternate', index: 3, errors: ['Invalid alternate phone number'] }
//   ]
// }
```

### Business Contact Validation

```javascript
const _ = require('cleaner-node');

function validateBusinessContact(businessData) {
  const errors = [];
  
  // Validate main phone
  if (!_.isPhoneNumber(businessData.mainPhone)) {
    errors.push('Main phone number is required and must be valid');
  }
  
  // Validate department phones
  const departments = ['sales', 'support', 'billing'];
  departments.forEach(dept => {
    const phone = businessData[`${dept}Phone`];
    if (phone && !_.isPhoneNumber(phone)) {
      errors.push(`${dept.charAt(0).toUpperCase() + dept.slice(1)} phone number must be valid`);
    }
  });
  
  // Validate after-hours phone
  if (businessData.afterHoursPhone && !_.isPhoneNumber(businessData.afterHoursPhone)) {
    errors.push('After-hours phone number must be valid');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Valid business contact
const validBusiness = {
  companyName: 'Tech Solutions Inc',
  mainPhone: '+1 (555) 123-4567',
  salesPhone: '555-200-1000',
  supportPhone: '+1 555-300-2000',
  billingPhone: '(555) 400-3000',
  afterHoursPhone: '+1 555 999 0000'
};
console.log(validateBusinessContact(validBusiness)); 
// { isValid: true, errors: [] }

// Invalid business contact
const invalidBusiness = {
  companyName: 'Bad Business Corp',
  mainPhone: 'invalid-main',
  salesPhone: '555-200-100',     // Too short
  supportPhone: '+1 555-300-2000',  // Valid
  billingPhone: '+12345 555 123 4567',  // Country code too long
  afterHoursPhone: 'not-a-phone'
};
console.log(validateBusinessContact(invalidBusiness));
// { isValid: false, errors: ['Main phone number is required and must be valid', 'Sales phone number must be valid', 'Billing phone number must be valid', 'After-hours phone number must be valid'] }
```

### Phone Number Import Validation

```javascript
const _ = require('cleaner-node');

function validatePhoneNumberImport(phoneNumbers) {
  const results = {
    total: phoneNumbers.length,
    valid: [],
    invalid: [],
    duplicates: []
  };
  
  const seenNumbers = new Set();
  
  phoneNumbers.forEach((phone, index) => {
    if (!_.isPhoneNumber(phone)) {
      results.invalid.push({ phone, index, reason: 'Invalid format' });
      return;
    }
    
    // Check for duplicates
    if (seenNumbers.has(phone)) {
      results.duplicates.push({ phone, index, reason: 'Duplicate number' });
      return;
    }
    
    seenNumbers.add(phone);
    results.valid.push({ phone, index });
  });
  
  return {
    ...results,
    summary: {
      totalCount: results.total,
      validCount: results.valid.length,
      invalidCount: results.invalid.length,
      duplicateCount: results.duplicates.length,
      successRate: ((results.valid.length / results.total) * 100).toFixed(2) + '%'
    }
  };
}

const phoneImportList = [
  '+1 (555) 123-4567',
  '555-987-6543',
  'invalid-phone',
  '(555) 111-2222',
  '+1 555 123 4567',  // Duplicate (different format but same number)
  '555-444-5555',
  'another-invalid',
  '(555) 123-4567'    // Duplicate
];

const importValidation = validatePhoneNumberImport(phoneImportList);
console.log(importValidation);
// Results would show valid, invalid, and duplicate phone numbers with detailed breakdown
```

## Related Functions

- [`isEmail`](./is-email.md) - Validates email address format
- [`isUrl`](./is-url.md) - Validates URL format
- [`isIpAddress`](./is-ip-address.md) - Validates IP address format
- [`isValidString`](./is-valid-string.md) - Validates string values 