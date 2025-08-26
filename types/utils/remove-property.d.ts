export = removeProperty;
/**
 * Recursively removes a specified property from an object and any nested objects or objects within arrays.
 * Modifies the original object/array directly.
 * Handles circular references.
 *
 * @param {object|Array} obj - The object or array from which to remove the property.
 * @param {string} prop - The name of the property to remove.
 * @returns {object|Array} The original object or array, modified in place.
 */
declare function removeProperty(obj: object | any[], prop: string): object | any[];
