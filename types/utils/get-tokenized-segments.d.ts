export = getTokenizedSegments;
/**
 * Extracts segments from a string that are enclosed by specified opening and closing brackets.
 * Only top-level (non-nested) segments are returned.
 * @param {string} str The input string to process.
 * @param {object|object[]} brackets A single bracket definition object or an array of bracket definition objects.
 * Each object should have `open` and `close` properties containing the opening and closing bracket strings.
 * @returns {string[]} An array of extracted segments (including the brackets).
 */
declare function getTokenizedSegments(str: string, brackets: object | object[]): string[];
