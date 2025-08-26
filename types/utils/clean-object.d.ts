export = cleanObject;
/**
 * Recursively cleans an object or array by removing properties with `undefined` values.
 *
 * @param {Object|Array} itemOrItems - The object or array to clean.
 * @param {boolean} [copyFirst=false] - Whether to work on a copy of the input (true) or modify in place (false).
 * @returns {Object|Array|*} - The cleaned object/array with `undefined` properties removed, or the original input if not a valid object/array.
 *
 * @example
 * // Clean an object in place, removing undefined properties
 * const myObject = { a: 1, b: undefined, c: { d: undefined, e: 5 } };
 * const cleanedObject = cleanObject(myObject);
 * // cleanedObject will be { a: 1, c: { e: 5 } }
 *
 * @example
 * // Clean an array of objects without modifying the original
 * const myArray = [{ id: 1, name: undefined }, { id: undefined, value: 'test' }];
 * const cleanedArray = cleanObject(myArray, true);
 * // cleanedArray will be [{ id: 1 }, { value: 'test' }]
 */
declare function cleanObject(itemOrItems: any | any[], copyFirst?: boolean): any | any[] | any;
