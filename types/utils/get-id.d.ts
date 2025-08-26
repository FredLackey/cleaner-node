export = getId;
/**
 * Extracts an ID from an item.
 * If the input is already a string or number, it's returned directly.
 * If the input is an object, it looks for properties named 'id' or '_id' (in that order)
 * and returns the value if it's a string or number.
 * Operates on a deep copy of the object to avoid side effects.
 * @param {object|string|number} itemOrId The item (object) or the ID itself (string or number).
 * @returns {string|number|undefined} The extracted ID, or undefined if no valid ID is found.
 */
declare function getId(itemOrId: object | string | number): string | number | undefined;
