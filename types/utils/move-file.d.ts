export = moveFile;
/**
 * Moves a file from a source path to a destination path.
 * First, attempts to rename the file (atomic move on the same filesystem).
 * If renaming fails (e.g., moving across different filesystems), it falls back to copying the file
 * and then deleting the original source file.
 * Ensures the destination directory exists before attempting the move.
 *
 * @param {string} sourcePath - The path of the file to move.
 * @param {string} destinationPath - The target path to move the file to.
 * @returns {boolean} True if the file was successfully moved (either by rename or copy+delete), false otherwise.
 */
declare function moveFile(sourcePath: string, destinationPath: string): boolean;
