export = getEnums;
/**
 * Extracts enum values from a given object or array of objects.
 *
 * If the input is an array, it filters for valid objects and maps them to their enum values using `getEnum`.
 * If the input is a single object, it extracts keys that are all uppercase (potential enum containers),
 * then maps these to their enum values using `getEnum`.
 * Filters out any null or invalid string results.
 *
 * @param {object|Array<object>} objOrArray The object or array of objects to extract enums from.
 * @returns {Array<string>} An array of valid enum strings found.
 */
declare function getEnums(objOrArray: object | Array<object>): Array<string>;
