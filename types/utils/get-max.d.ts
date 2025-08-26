export = getMax;
/**
 * Finds the maximum numeric value in an array.
 * Filters out non-numeric values before comparison.
 * Handles both number primitives and string representations of numbers.
 *
 * @param {Array<number|string|any>} values - An array containing potential numbers.
 * @returns {number|string|null} The maximum numeric value found (preserving its original type), or null if the array contains no numbers.
 */
declare function getMax(values: Array<number | string | any>): number | string | null;
