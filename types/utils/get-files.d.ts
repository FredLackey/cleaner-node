export = getFiles;
/**
 * Synchronously reads the contents of a directory and returns an array of full paths for its direct children (files and subdirectories).
 * @param {string} folderPath The path to the directory.
 * @returns {string[]|null} An array of full paths of items within the directory, or null if the path is not a valid folder or an error occurs.
 */
declare function getFiles(folderPath: string): string[] | null;
