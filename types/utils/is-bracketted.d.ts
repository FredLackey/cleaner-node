export = isBracketted;
/**
 * Checks if a string starts with an opening bracket ('(', '[', '{') and ends with the corresponding closing bracket.
 * Uses `getBracket` to determine the bracket pair.
 *
 * @param {string} value - The string to check.
 * @returns {boolean} True if the string is valid and enclosed in matching brackets, false otherwise.
 */
declare function isBracketted(value: string): boolean;
