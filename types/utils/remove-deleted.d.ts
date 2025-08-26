export = removeDeleted;
/**
 * Recursively removes items marked as deleted from a nested structure (objects and arrays).
 * Uses the `isDeleted` function with a provided checker function `fn` to identify deleted items.
 * Deleted items within arrays are filtered out.
 * Entire objects identified as deleted are replaced with `deletedValue` (defaults to null).
 * Handles circular references.
 *
 * @param {*} value - The object, array, or other value to process.
 * @param {Function} fn - The function passed to `isDeleted` to check if an item is deleted.
 * @param {*} [deletedValue=null] - The value to replace objects that are identified as deleted. Defaults to null.
 * @returns {*} The processed structure with deleted items removed or replaced.
 */
declare function removeDeleted(value: any, fn: Function, deletedValue?: any): any;
