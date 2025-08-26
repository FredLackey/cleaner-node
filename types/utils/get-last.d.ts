export = getLast;
/**
 * Gets the last element of an array or the last character of a string.
 * Optionally trims the string before extracting the last character.
 * @param {Array|string} value The array or string.
 * @param {boolean} [trim=false] If true and the input is a string, trim whitespace before getting the last character.
 * @returns {any|string|undefined} The last element of the array, the last character of the string (or empty string if trimmed input is empty), or undefined if the input is not a non-empty array or a valid string.
 */
declare function getLast(value: any[] | string, trim?: boolean): any | string | undefined;
