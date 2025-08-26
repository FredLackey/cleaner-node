export = sort;
/**
 * Sorts an array containing numbers (or string representations of numbers).
 * Non-numeric values are filtered out before sorting.
 * Returns a new array with the numbers sorted either ascending (default) or descending.
 *
 * @param {Array<any>} values - The array containing potential numbers.
 * @param {boolean} [descending=false] - If true, sorts in descending order. Defaults to false (ascending).
 * @returns {number[]} A new array containing the sorted numbers.
 */
declare function sort(values: Array<any>, descending?: boolean): number[];
