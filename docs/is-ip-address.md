# isIpAddress

Checks if a string represents a valid IPv4 address.

## Purpose

The `isIpAddress` function validates whether a string represents a valid IPv4 address. It allows specific strings like '0.0.0.0' and 'localhost', validates the format (four parts separated by dots), checks the range of each part (0-255), and ensures that the first part is not 0 (unless it's the specific '0.0.0.0' address).

## Syntax

```javascript
const _ = require('cleaner-node');
const result = _.isIpAddress(value);
```

## Parameters

- **value** (string): The string to validate as an IP address

## Returns

**boolean**: `true` if the string is a valid IPv4 address or an acceptable special case, `false` otherwise

## Examples

### Basic Usage

```javascript
const _ = require('cleaner-node');

// Valid IPv4 addresses
console.log(_.isIpAddress('192.168.1.1'));      // true
console.log(_.isIpAddress('10.0.0.1'));         // true
console.log(_.isIpAddress('172.16.254.1'));     // true
console.log(_.isIpAddress('8.8.8.8'));          // true
console.log(_.isIpAddress('255.255.255.255'));  // true
console.log(_.isIpAddress('127.0.0.1'));        // true

// Special acceptable cases
console.log(_.isIpAddress('0.0.0.0'));          // true
console.log(_.isIpAddress('localhost'));        // true
console.log(_.isIpAddress('LOCALHOST'));        // true (case insensitive)

// Invalid IP addresses
console.log(_.isIpAddress('256.1.1.1'));        // false (out of range)
console.log(_.isIpAddress('192.168.1'));        // false (missing part)
console.log(_.isIpAddress('192.168.1.1.1'));    // false (too many parts)
console.log(_.isIpAddress('192.168.-1.1'));     // false (negative number)
console.log(_.isIpAddress('192.168.abc.1'));    // false (non-numeric)
console.log(_.isIpAddress('0.1.1.1'));          // false (first part is 0, not special case)
console.log(_.isIpAddress(''));                 // false
console.log(_.isIpAddress(null));               // false
console.log(_.isIpAddress(undefined));          // false
```

### Network Configuration Validation

```javascript
const _ = require('cleaner-node');

function validateNetworkConfig(config) {
  const validation = {
    isValid: true,
    errors: []
  };
  
  if (!_.isIpAddress(config.serverIp)) {
    validation.isValid = false;
    validation.errors.push('Server IP must be a valid IP address');
  }
  
  if (config.gatewayIp && !_.isIpAddress(config.gatewayIp)) {
    validation.isValid = false;
    validation.errors.push('Gateway IP must be a valid IP address');
  }
  
  if (config.dnsServers && Array.isArray(config.dnsServers)) {
    const invalidDnsServers = config.dnsServers.filter(ip => !_.isIpAddress(ip));
    if (invalidDnsServers.length > 0) {
      validation.isValid = false;
      validation.errors.push(`Invalid DNS server IPs: ${invalidDnsServers.join(', ')}`);
    }
  }
  
  return validation;
}

// Valid network configuration
const validConfig = {
  serverIp: '192.168.1.100',
  gatewayIp: '192.168.1.1',
  dnsServers: ['8.8.8.8', '8.8.4.4', '1.1.1.1']
};
console.log(validateNetworkConfig(validConfig)); 
// { isValid: true, errors: [] }

// Invalid network configuration
const invalidConfig = {
  serverIp: '300.168.1.100',  // Invalid range
  gatewayIp: '192.168.1',     // Missing part
  dnsServers: ['8.8.8.8', 'invalid-ip', '256.256.256.256']
};
console.log(validateNetworkConfig(invalidConfig)); 
// { isValid: false, errors: ['Server IP must be a valid IP address', 'Gateway IP must be a valid IP address', 'Invalid DNS server IPs: invalid-ip, 256.256.256.256'] }
```

### Server Configuration Validation

```javascript
const _ = require('cleaner-node');

function validateServerConfig(config) {
  const errors = [];
  
  // Validate bind address
  if (config.bindAddress && !_.isIpAddress(config.bindAddress)) {
    errors.push('Bind address must be a valid IP address');
  }
  
  // Validate allowed IPs
  if (config.allowedIps && Array.isArray(config.allowedIps)) {
    const invalidIps = config.allowedIps.filter(ip => !_.isIpAddress(ip));
    if (invalidIps.length > 0) {
      errors.push(`Invalid allowed IPs: ${invalidIps.join(', ')}`);
    }
  }
  
  // Validate blocked IPs
  if (config.blockedIps && Array.isArray(config.blockedIps)) {
    const invalidBlockedIps = config.blockedIps.filter(ip => !_.isIpAddress(ip));
    if (invalidBlockedIps.length > 0) {
      errors.push(`Invalid blocked IPs: ${invalidBlockedIps.join(', ')}`);
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Valid server configuration
const validServerConfig = {
  bindAddress: '0.0.0.0',
  allowedIps: ['192.168.1.100', '10.0.0.5', 'localhost'],
  blockedIps: ['192.168.1.200', '172.16.0.10']
};
console.log(validateServerConfig(validServerConfig)); 
// { isValid: true, errors: [] }

// Invalid server configuration
const invalidServerConfig = {
  bindAddress: '999.999.999.999',
  allowedIps: ['192.168.1.100', 'invalid-ip', '300.300.300.300'],
  blockedIps: ['valid.ip', '192.168.1.1.1']
};
console.log(validateServerConfig(invalidServerConfig));
// { isValid: false, errors: ['Bind address must be a valid IP address', 'Invalid allowed IPs: invalid-ip, 300.300.300.300', 'Invalid blocked IPs: valid.ip, 192.168.1.1.1'] }
```

### Access Control List Validation

```javascript
const _ = require('cleaner-node');

function validateAccessControlList(acl) {
  if (!Array.isArray(acl)) {
    return {
      valid: false,
      error: 'Access control list must be an array',
      validEntries: [],
      invalidEntries: []
    };
  }
  
  const validEntries = [];
  const invalidEntries = [];
  
  acl.forEach((entry, index) => {
    if (_.isIpAddress(entry.ip)) {
      validEntries.push(entry);
    } else {
      invalidEntries.push({ ...entry, index });
    }
  });
  
  return {
    valid: invalidEntries.length === 0,
    totalCount: acl.length,
    validCount: validEntries.length,
    invalidCount: invalidEntries.length,
    validEntries,
    invalidEntries
  };
}

const accessList = [
  { ip: '192.168.1.100', access: 'allow', user: 'admin' },
  { ip: '10.0.0.5', access: 'allow', user: 'user1' },
  { ip: 'invalid-ip', access: 'deny', user: 'blocked' },
  { ip: '172.16.0.1', access: 'allow', user: 'user2' },
  { ip: '256.256.256.256', access: 'deny', user: 'invalid' }
];

const aclValidation = validateAccessControlList(accessList);
console.log(aclValidation);
// {
//   valid: false,
//   totalCount: 5,
//   validCount: 3,
//   invalidCount: 2,
//   validEntries: [
//     { ip: '192.168.1.100', access: 'allow', user: 'admin' },
//     { ip: '10.0.0.5', access: 'allow', user: 'user1' },
//     { ip: '172.16.0.1', access: 'allow', user: 'user2' }
//   ],
//   invalidEntries: [
//     { ip: 'invalid-ip', access: 'deny', user: 'blocked', index: 2 },
//     { ip: '256.256.256.256', access: 'deny', user: 'invalid', index: 4 }
//   ]
// }
```

### Database Connection Validation

```javascript
const _ = require('cleaner-node');

function validateDatabaseConnections(connections) {
  const results = {};
  
  Object.entries(connections).forEach(([name, config]) => {
    const errors = [];
    
    if (!_.isIpAddress(config.host)) {
      errors.push('Database host must be a valid IP address');
    }
    
    if (config.replicationHosts && Array.isArray(config.replicationHosts)) {
      const invalidReplicas = config.replicationHosts.filter(host => !_.isIpAddress(host));
      if (invalidReplicas.length > 0) {
        errors.push(`Invalid replication hosts: ${invalidReplicas.join(', ')}`);
      }
    }
    
    results[name] = {
      isValid: errors.length === 0,
      errors
    };
  });
  
  return results;
}

const dbConnections = {
  primary: {
    host: '10.0.1.100',
    port: 5432,
    database: 'main'
  },
  replica: {
    host: '10.0.1.101',
    port: 5432,
    database: 'main',
    replicationHosts: ['10.0.1.102', '10.0.1.103']
  },
  cache: {
    host: 'invalid-host',
    port: 6379
  },
  analytics: {
    host: '10.0.2.100',
    port: 3306,
    replicationHosts: ['10.0.2.101', 'invalid-replica-host']
  }
};

const dbValidation = validateDatabaseConnections(dbConnections);
console.log(dbValidation);
// {
//   primary: { isValid: true, errors: [] },
//   replica: { isValid: true, errors: [] },
//   cache: { isValid: false, errors: ['Database host must be a valid IP address'] },
//   analytics: { isValid: false, errors: ['Invalid replication hosts: invalid-replica-host'] }
// }
```

### Firewall Rules Validation

```javascript
const _ = require('cleaner-node');

function validateFirewallRules(rules) {
  const validationResults = [];
  
  rules.forEach((rule, index) => {
    const errors = [];
    
    // Validate source IP
    if (rule.sourceIp && !_.isIpAddress(rule.sourceIp)) {
      errors.push('Source IP must be a valid IP address');
    }
    
    // Validate destination IP
    if (rule.destinationIp && !_.isIpAddress(rule.destinationIp)) {
      errors.push('Destination IP must be a valid IP address');
    }
    
    validationResults.push({
      ruleIndex: index,
      rule: rule,
      isValid: errors.length === 0,
      errors
    });
  });
  
  return {
    allValid: validationResults.every(result => result.isValid),
    results: validationResults
  };
}

const firewallRules = [
  {
    name: 'Allow Admin',
    sourceIp: '192.168.1.100',
    destinationIp: '10.0.0.1',
    action: 'allow',
    port: 22
  },
  {
    name: 'Block Suspicious',
    sourceIp: 'invalid-source-ip',
    destinationIp: '10.0.0.1',
    action: 'deny',
    port: 80
  },
  {
    name: 'Allow Web Traffic',
    sourceIp: '0.0.0.0',
    destinationIp: '10.0.0.2',
    action: 'allow',
    port: 80
  },
  {
    name: 'Invalid Rule',
    sourceIp: '192.168.1.50',
    destinationIp: '999.999.999.999',
    action: 'deny',
    port: 443
  }
];

const firewallValidation = validateFirewallRules(firewallRules);
console.log(firewallValidation);
// {
//   allValid: false,
//   results: [
//     { ruleIndex: 0, rule: {...}, isValid: true, errors: [] },
//     { ruleIndex: 1, rule: {...}, isValid: false, errors: ['Source IP must be a valid IP address'] },
//     { ruleIndex: 2, rule: {...}, isValid: true, errors: [] },
//     { ruleIndex: 3, rule: {...}, isValid: false, errors: ['Destination IP must be a valid IP address'] }
//   ]
// }
```

## Related Functions

- [`isUrl`](./is-url.md) - Validates URL format
- [`isEmail`](./is-email.md) - Validates email address format
- [`isValidString`](./is-valid-string.md) - Validates string values
- [`isPhoneNumber`](./is-phone-number.md) - Validates phone number format 