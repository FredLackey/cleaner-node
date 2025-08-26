export = fromBlockDate;
/**
 * Converts a blockdate string (YYYYMMDDHHmmssSSS) into a JavaScript Date object.
 * @param {string} value The blockdate string.
 * @returns {Date|null} The corresponding Date object, or null if the input is invalid.
 */
declare function fromBlockDate(value: string): Date | null;
