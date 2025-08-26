export = isFile;
/**
 * Checks if a given path points to an existing file.
 * Uses `fs.lstatSync` to check the path status and handles potential errors (e.g., path doesn't exist).
 *
 * @param {string} filePath - The path to check.
 * @returns {boolean} True if the path exists and is a file, false otherwise.
 */
declare function isFile(filePath: string): boolean;
