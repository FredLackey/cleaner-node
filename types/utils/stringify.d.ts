export = stringify;
/**
 * Converts a JavaScript value to a JSON string, safely handling circular references.
 * Uses `JSON.stringify` with a custom replacer to prevent errors with circular structures.
 *
 * @param {*} item - The value to convert to a JSON string.
 * @returns {string} The JSON string representation of the value, handling circular references.
 */
declare function stringify(item: any): string;
