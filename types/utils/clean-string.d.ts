export = cleanString;
/**
 * Cleans a string by keeping only specified valid characters and removing specified invalid characters.
 * @param {any} value The input value, expected to be a string.
 * @param {string} [valid=ALPHANUMERIC] A string containing all valid characters to keep.
 * @param {string} [invalid=''] A string containing invalid characters to remove.
 * @param {boolean} [isCaseSensitive=false] Whether the character matching should be case-sensitive.
 * @returns {string|undefined} The cleaned string, or undefined if the input is not a valid string.
 */
declare function cleanString(value: any, valid?: string, invalid?: string, isCaseSensitive?: boolean): string | undefined;
