export = toBoolean;
/**
 * Converts various input types (boolean, string, number) into a boolean value.
 * Recognizes common string representations ('1', 'TRUE', 'YES', 'Y' for true; '0', 'FALSE', 'NO', 'N' for false, case-insensitive).
 * Recognizes numbers 1 (true) and 0 (false).
 * If the input cannot be confidently converted, returns the provided default value.
 *
 * @param {*} value - The value to convert.
 * @param {boolean} [defaultValue=undefined] - The value to return if the input cannot be converted to boolean.
 * @returns {boolean|*} The boolean representation of the input, or the defaultValue.
 */
declare function toBoolean(value: any, defaultValue?: boolean): boolean | any;
