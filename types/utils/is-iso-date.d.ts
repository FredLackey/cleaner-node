export = isIsoDate;
/**
 * Checks if a string represents a valid ISO 8601 date format.
 * This includes validation that the string can be parsed into a valid Date object
 * and that the string representation matches the ISO string generated from that Date object,
 * taking into account potential variations in millisecond precision.
 * Also performs a final check by comparing UTC string representations.
 *
 * @param {string} value - The string to validate as an ISO date.
 * @returns {boolean} True if the string is a valid ISO 8601 date format, false otherwise.
 */
declare function isIsoDate(value: string): boolean;
