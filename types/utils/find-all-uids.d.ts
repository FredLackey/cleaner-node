export = findAllUids;
/**
 * Finds all unique strings matching the UID format (e.g., 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx')
 * within an object or array, including nested structures.
 * @param {object|Array} itemOrItems The object or array to search.
 * @returns {string[]} An array of unique UID strings found.
 */
declare function findAllUids(itemOrItems: object | any[]): string[];
