export = isBlockDate;
/**
 * Checks if a value is a valid blockdate string.
 * @param {string} value The value to check.
 * @param {number} [maxYear=current year] The maximum allowed year.
 * @returns {boolean} True if the value is a valid blockdate string, false otherwise.
 */
declare function isBlockDate(value: string, maxYear?: number): boolean;
