export = readLines;
/**
 * Asynchronously reads a file line by line and returns an array of strings.
 * Returns an array containing each line of the file, or undefined if an error occurs (e.g., file not found).
 *
 * @param {string} filePath - The path to the file to read.
 * @returns {Promise<string[]|undefined>} A promise that resolves to an array of strings (each representing a line), or undefined on failure.
 */
declare function readLines(filePath: string): Promise<string[] | undefined>;
