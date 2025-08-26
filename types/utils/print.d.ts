export = print;
/**
 * Prints the key-value pairs of an object to the console in a formatted manner.
 * Keys starting with an underscore are ignored.
 * Keys are sorted alphabetically.
 * Values are formatted based on their type (string, boolean, array).
 * Arrays are printed with each element on a new line, aligned with the key.
 * A separator line is printed before the object content.
 *
 * @param {object} obj - The object to print.
 */
declare function print(obj: object): void;
