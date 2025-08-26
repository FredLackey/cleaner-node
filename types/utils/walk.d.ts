export = walk;
/**
 * Walks a directory recursively and returns an object containing lists of all files and folders found,
 * with paths relative to the starting folder.
 *
 * @param {string} folderPath - The path of the directory to start walking from.
 * @returns {object|undefined} An object with `root`, `folders`, and `files` properties, or undefined if the initial path is not a folder.
 * @returns {string} return.root - The absolute path of the folder that was walked.
 * @returns {string[]} return.folders - An array of folder paths relative to the root.
 * @returns {string[]} return.files - An array of file paths relative to the root.
 */
declare function walk(folderPath: string): object | undefined;
