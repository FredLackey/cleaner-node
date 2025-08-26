export = getMin;
/**
 * Finds the minimum numeric value in an array.
 * Filters out non-numeric values before comparison.
 * Handles both number primitives and string representations of numbers.
 *
 * @param {Array<number|string|any>} values - An array containing potential numbers.
 * @returns {number|string|null} The minimum numeric value found (preserving its original type), or null if the array contains no numbers.
 */
declare function getMin(values: Array<number | string | any>): number | string | null;
