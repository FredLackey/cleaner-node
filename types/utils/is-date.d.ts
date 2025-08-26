export = isDate;
/**
 * Checks if a value is a valid JavaScript Date object.
 * Verifies that the value is an object, an instance of Date, and does not represent an invalid date (e.g., NaN time).
 *
 * @param {*} value - The value to check.
 * @returns {boolean} True if the value is a valid Date object, false otherwise.
 */
declare function isDate(value: any): boolean;
