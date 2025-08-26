export = makePath;
/**
 * Creates a directory path, including any necessary parent directories.
 * If the directory already exists, it returns true.
 * Uses `fs.mkdirSync` with the `recursive` option.
 *
 * @param {string} dirPath - The directory path to create.
 * @returns {boolean} True if the directory exists or was successfully created, false otherwise.
 */
declare function makePath(dirPath: string): boolean;
