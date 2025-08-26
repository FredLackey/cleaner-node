export = loadJson;
/**
 * Reads a file, parses its content as JSON, and returns the resulting object or array.
 * Returns null if the file cannot be read, parsing fails, or the result is not a valid object or array (empty arrays are okay).
 *
 * @param {string} filePath - The path to the JSON file.
 * @returns {object|Array|null} The parsed JSON object or array, or null on failure.
 */
declare function loadJson(filePath: string): object | any[] | null;
