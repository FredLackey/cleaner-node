# isSemver

Checks if a string is a valid Semantic Versioning (SemVer) string.

## Purpose

The `isSemver` function validates whether a string follows the Semantic Versioning specification. It uses the `semver` library for validation, ensuring the string represents a properly formatted version number according to the SemVer standard (e.g., "1.2.3", "2.0.0-beta.1").

## Syntax

```javascript
const _ = require('cleaner-node');
const result = _.isSemver(value);
```

## Parameters

- **value** (string): The string to validate as a semantic version

## Returns

**boolean**: `true` if the value is a valid SemVer string, `false` otherwise

## Examples

### Basic Usage

```javascript
const _ = require('cleaner-node');

// Valid semantic versions
console.log(_.isSemver('1.0.0'));           // true
console.log(_.isSemver('2.3.1'));           // true
console.log(_.isSemver('0.1.0'));           // true
console.log(_.isSemver('10.20.30'));        // true

// Valid with pre-release
console.log(_.isSemver('1.0.0-alpha'));     // true
console.log(_.isSemver('1.0.0-beta.1'));    // true
console.log(_.isSemver('1.0.0-rc.1'));      // true

// Valid with build metadata
console.log(_.isSemver('1.0.0+build.1'));   // true
console.log(_.isSemver('1.0.0-alpha+build')); // true

// Invalid semantic versions
console.log(_.isSemver('1.0'));             // false (missing patch)
console.log(_.isSemver('1.0.0.0'));         // false (too many parts)
console.log(_.isSemver('1.2.a'));           // false (non-numeric)
console.log(_.isSemver('v1.0.0'));          // false (prefix not allowed)
console.log(_.isSemver(''));                // false
console.log(_.isSemver(null));              // false
console.log(_.isSemver(undefined));         // false
```

### Package Version Validation

```javascript
const _ = require('cleaner-node');

function validatePackageVersions(packageData) {
  const validation = {
    isValid: true,
    errors: []
  };
  
  if (!_.isSemver(packageData.version)) {
    validation.isValid = false;
    validation.errors.push('Package version must be a valid semantic version');
  }
  
  // Validate dependency versions
  if (packageData.dependencies) {
    Object.entries(packageData.dependencies).forEach(([name, version]) => {
      // Skip version ranges and special versions like "latest"
      if (!version.includes('^') && !version.includes('~') && 
          !version.includes('>') && !version.includes('<') &&
          version !== 'latest' && !_.isSemver(version)) {
        validation.isValid = false;
        validation.errors.push(`Dependency ${name} has invalid version: ${version}`);
      }
    });
  }
  
  return validation;
}

// Valid package.json data
const validPackage = {
  name: 'my-package',
  version: '1.2.3',
  dependencies: {
    'express': '4.18.0',
    'lodash': '^4.17.21',  // Range, not validated
    'uuid': '~8.3.2'       // Range, not validated
  }
};
console.log(validatePackageVersions(validPackage)); 
// { isValid: true, errors: [] }

// Invalid package.json data
const invalidPackage = {
  name: 'bad-package',
  version: '1.2',         // Invalid version
  dependencies: {
    'express': '4.18.0',
    'bad-dep': '1.2.a'     // Invalid version
  }
};
console.log(validatePackageVersions(invalidPackage)); 
// { isValid: false, errors: ['Package version must be a valid semantic version', 'Dependency bad-dep has invalid version: 1.2.a'] }
```

### Release Management

```javascript
const _ = require('cleaner-node');

function validateReleaseVersions(releases) {
  if (!Array.isArray(releases)) {
    return {
      valid: false,
      error: 'Releases must be an array',
      validReleases: [],
      invalidReleases: []
    };
  }
  
  const validReleases = [];
  const invalidReleases = [];
  
  releases.forEach((release, index) => {
    if (_.isSemver(release.version)) {
      validReleases.push(release);
    } else {
      invalidReleases.push({ ...release, index, reason: 'Invalid semantic version' });
    }
  });
  
  return {
    valid: invalidReleases.length === 0,
    totalCount: releases.length,
    validCount: validReleases.length,
    invalidCount: invalidReleases.length,
    validReleases,
    invalidReleases
  };
}

const releaseHistory = [
  { version: '1.0.0', date: '2023-01-01', notes: 'Initial release' },
  { version: '1.1.0', date: '2023-02-01', notes: 'Feature update' },
  { version: '1.1.1', date: '2023-02-15', notes: 'Bug fixes' },
  { version: '2.0.0-beta.1', date: '2023-03-01', notes: 'Beta release' },
  { version: 'invalid.version', date: '2023-03-15', notes: 'Bad version' },
  { version: '2.0.0', date: '2023-04-01', notes: 'Major release' }
];

const releaseValidation = validateReleaseVersions(releaseHistory);
console.log(releaseValidation);
// {
//   valid: false,
//   totalCount: 6,
//   validCount: 5,
//   invalidCount: 1,
//   validReleases: [...], // Valid releases
//   invalidReleases: [{ version: 'invalid.version', date: '2023-03-15', notes: 'Bad version', index: 4, reason: 'Invalid semantic version' }]
// }
```

### Version Comparison Setup

```javascript
const _ = require('cleaner-node');

function prepareVersionComparison(currentVersion, targetVersion) {
  const errors = [];
  
  if (!_.isSemver(currentVersion)) {
    errors.push('Current version must be a valid semantic version');
  }
  
  if (!_.isSemver(targetVersion)) {
    errors.push('Target version must be a valid semantic version');
  }
  
  if (errors.length > 0) {
    return { success: false, errors };
  }
  
  // Would use semver library functions for actual comparison
  return {
    success: true,
    current: currentVersion,
    target: targetVersion,
    message: 'Versions are valid for comparison'
  };
}

// Valid version comparison
console.log(prepareVersionComparison('1.2.3', '1.3.0'));
// { success: true, current: '1.2.3', target: '1.3.0', message: 'Versions are valid for comparison' }

// Invalid version comparison
console.log(prepareVersionComparison('1.2', '1.3.0'));
// { success: false, errors: ['Current version must be a valid semantic version'] }
```

### CI/CD Version Validation

```javascript
const _ = require('cleaner-node');

function validateCIConfig(config) {
  const errors = [];
  
  // Validate Node.js versions
  if (config.nodeVersions && Array.isArray(config.nodeVersions)) {
    const invalidNodeVersions = config.nodeVersions.filter(version => 
      !_.isSemver(version) && !version.startsWith('lts/')
    );
    if (invalidNodeVersions.length > 0) {
      errors.push(`Invalid Node.js versions: ${invalidNodeVersions.join(', ')}`);
    }
  }
  
  // Validate minimum version requirements
  if (config.minNodeVersion && !_.isSemver(config.minNodeVersion)) {
    errors.push('Minimum Node.js version must be a valid semantic version');
  }
  
  if (config.minNpmVersion && !_.isSemver(config.minNpmVersion)) {
    errors.push('Minimum npm version must be a valid semantic version');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Valid CI configuration
const validCIConfig = {
  nodeVersions: ['14.21.3', '16.20.0', '18.16.0', 'lts/hydrogen'],
  minNodeVersion: '14.0.0',
  minNpmVersion: '6.14.0'
};
console.log(validateCIConfig(validCIConfig)); 
// { isValid: true, errors: [] }

// Invalid CI configuration
const invalidCIConfig = {
  nodeVersions: ['14.21.3', 'invalid-version', '18.16.0'],
  minNodeVersion: '14',
  minNpmVersion: '6.14.0'
};
console.log(validateCIConfig(invalidCIConfig));
// { isValid: false, errors: ['Invalid Node.js versions: invalid-version', 'Minimum Node.js version must be a valid semantic version'] }
```

### Docker Image Version Validation

```javascript
const _ = require('cleaner-node');

function validateDockerImageVersions(images) {
  const results = {};
  
  Object.entries(images).forEach(([imageName, config]) => {
    const errors = [];
    
    // Validate base version
    if (config.version && !_.isSemver(config.version)) {
      errors.push('Image version must be a valid semantic version');
    }
    
    // Validate tag versions
    if (config.tags && Array.isArray(config.tags)) {
      const invalidTags = config.tags.filter(tag => 
        tag !== 'latest' && !_.isSemver(tag)
      );
      if (invalidTags.length > 0) {
        errors.push(`Invalid version tags: ${invalidTags.join(', ')}`);
      }
    }
    
    results[imageName] = {
      isValid: errors.length === 0,
      errors
    };
  });
  
  return results;
}

const dockerImages = {
  'my-app': {
    version: '1.2.3',
    tags: ['1.2.3', '1.2', 'latest']
  },
  'my-service': {
    version: 'invalid-version',
    tags: ['1.0.0', 'bad-tag', 'latest']
  }
};

const dockerValidation = validateDockerImageVersions(dockerImages);
console.log(dockerValidation);
// {
//   'my-app': { isValid: true, errors: [] },
//   'my-service': { isValid: false, errors: ['Image version must be a valid semantic version', 'Invalid version tags: bad-tag'] }
// }
```

## Related Functions

- [`isValidString`](./is-valid-string.md) - Validates string values
- [`isDigits`](./is-digits.md) - Checks if a string contains only digits
- [`isSet`](./is-set.md) - Checks if a value is not null or undefined
- [`isDefined`](./is-defined.md) - Checks if a value is not undefined 