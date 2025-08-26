export = isValidShortDate;
/**
 * Checks if a string represents a valid date in YYYY/MM/DD or YYYY-MM-DD format.
 * Performs basic range checks on year, month, and day.
 * Allows optional constraints on the earliest acceptable year and whether future dates are allowed.
 *
 * @param {string} value - The date string to validate.
 * @param {boolean} [allowFuture=false] - If true, dates in the future are considered valid. Defaults to false.
 * @param {number} [earliestYear=1900] - The minimum acceptable year. Defaults to 1900.
 * @returns {boolean} True if the string is a valid short date according to the criteria, false otherwise.
 */
declare function isValidShortDate(value: string, allowFuture?: boolean, earliestYear?: number): boolean;
