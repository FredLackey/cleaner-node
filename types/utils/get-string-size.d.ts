export = getStringSize;
/**
 * Calculates the byte size of a string using the specified encoding.
 * @param {string} value The string to measure.
 * @param {string} [encoding='utf8'] The encoding to use for byte length calculation.
 * @returns {number} The byte size of the string, or -1 if the input is not a valid string.
 */
declare function getStringSize(value: string, encoding?: string): number;
