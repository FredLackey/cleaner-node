/**
 * Trims both leading and trailing elements from an array that are not valid strings (or are empty strings).
 * Applies `trimTop` first, then `trimBottom` to the result.
 *
 * @param {Array<any>} lines - The array to trim from both ends.
 * @returns {Array<any>} A new array with leading and trailing non-valid-string elements removed.
 */
export function trim(lines: Array<any>): Array<any>;
/**
 * Trims trailing elements from an array that are not valid strings (or are empty strings).
 * It reverses the array, trims from the top using `trimTop`, and then reverses it back.
 *
 * @param {Array<any>} lines - The array to trim from the bottom.
 * @returns {Array<any>} A new array with trailing non-valid-string elements removed.
 */
export function trimBottom(lines: Array<any>): Array<any>;
/**
 * Trims leading elements from an array that are not valid strings (or are empty strings).
 * It removes elements from the beginning until the first valid string is encountered.
 * All subsequent elements (including non-valid strings) are kept.
 *
 * @param {Array<any>} lines - The array to trim from the top.
 * @returns {Array<any>} A new array with leading non-valid-string elements removed.
 */
export function trimTop(lines: Array<any>): Array<any>;
