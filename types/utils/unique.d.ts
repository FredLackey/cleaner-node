export = unique;
/**
 * Creates a new array with unique values based on the predominant data type in the input array (numbers, objects, or strings).
 * It delegates to specialized unique functions (`uniqueNumbers`, `uniqueObjects`, `uniqueStrings`) based on the detected type.
 * If the array contains a mix of types or primarily non-primitive/non-object types, the behavior might be unexpected as it prioritizes numbers, then objects, then strings.
 * Returns null if the array doesn't contain numbers, objects, or valid strings.
 *
 * @param {Array<any>} values - The array from which to extract unique values.
 * @param {object} [params={}] - Optional parameters passed to the underlying unique functions.
 * @param {boolean} [params.strict=true] - Used by `uniqueObjects`: If true, uses strict equality (===) for object comparison.
 * @param {boolean} [params.isCaseSensitive=false] - Used by `uniqueStrings`: If true, string comparison is case-sensitive.
 * @param {boolean} [params.trim=true] - Used by `uniqueStrings`: If true, trims whitespace from strings before comparison.
 * @returns {Array<any>|null} A new array with unique values of the predominant type, or the original array if not valid, or null if no relevant types are found.
 */
declare function unique(values: Array<any>, params?: {
    strict?: boolean;
    isCaseSensitive?: boolean;
    trim?: boolean;
}): Array<any> | null;
