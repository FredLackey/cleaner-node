const isObject   = require('./is-object');
const stringify  = require('./stringify');
const hashString = require('./hash-string');

/**
 * Generates a hash value for a given object by converting it to a string representation
 * and then computing its hash. This function provides a consistent way to create
 * hash values for objects, useful for caching, comparison, and data integrity checks.
 * 
 * @param {Object} obj - The object to be hashed. Must be a valid object type.
 * @returns {string|undefined} The hash string of the object, or undefined if the input is not a valid object
 * @throws {Error} May throw an error if the object contains circular references or non-serializable properties
 * 
 * @example
 * // Hash a simple object
 * const user = { name: 'John', age: 30 };
 * const hash = hashObject(user);
 * console.log(hash); // Returns a hash string like "a1b2c3d4..."
 * 
 * @example
 * // Returns undefined for non-objects
 * const hash = hashObject('not an object');
 * console.log(hash); // undefined
 * 
 * @example
 * // Hash a complex nested object
 * const config = {
 *   database: { host: 'localhost', port: 5432 },
 *   features: ['auth', 'logging'],
 *   settings: { debug: true }
 * };
 * const hash = hashObject(config);
 * console.log(hash); // Returns consistent hash for this object structure
 * 
 * @since 1.0.0
 * @see {@link stringify} for object serialization details
 * @see {@link hashString} for string hashing implementation
 * @see {@link isObject} for object validation logic
 */
const hashObject = (obj) => {
  if (!isObject(obj)) { return undefined; }
  const stringified = stringify(obj);
  return hashString(stringified);
};

module.exports = hashObject;