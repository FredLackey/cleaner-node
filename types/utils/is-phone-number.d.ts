export = isPhoneNumber;
/**
 * Checks if a string matches a common phone number format using a regular expression.
 * Allows for optional country codes, parentheses around area codes, and spaces/dashes as separators.
 *
 * @param {string} value - The string to validate as a phone number.
 * @returns {boolean} True if the string matches the phone number pattern, false otherwise.
 */
declare function isPhoneNumber(value: string): boolean;
