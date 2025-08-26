export = hasString;
/**
 * Checks if a string contains a target substring, with optional case sensitivity.
 * @param {string} value The string to search within.
 * @param {string} target The substring to search for.
 * @param {boolean} [isCaseSensitive=false] Determines if the search should be case-sensitive.
 * @returns {boolean} True if the target substring is found, false otherwise or if inputs are not strings.
 */
declare function hasString(value: string, target: string, isCaseSensitive?: boolean): boolean;
