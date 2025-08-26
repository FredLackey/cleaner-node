export = replaceValues;
/**
 * Recursively replaces values within an object or array structure.
 * Traverses the structure and replaces any primitive value (string, number, date)
 * found in the `sources` array with the corresponding value from the `targets` array at the same index.
 * Replacement only occurs if the source and target values are of the same type (string, number, or date).
 * Handles nested objects, arrays, and circular references.
 * Can operate on the original structure or a deep clone.
 *
 * @param {object|Array} itemOrItems - The object or array structure to process.
 * @param {Array<*>} sources - An array of values to search for.
 * @param {Array<*>} targets - An array of replacement values, corresponding to `sources`.
 * @param {boolean} [clone=false] - If true, creates a deep clone of `itemOrItems` before replacing values. Otherwise, modifies the original.
 * @throws {Error} If `sources` or `targets` are not arrays, or if they have different lengths.
 * @returns {object|Array} The processed structure with values replaced.
 */
declare function replaceValues(itemOrItems: object | any[], sources: Array<any>, targets: Array<any>, clone?: boolean): object | any[];
