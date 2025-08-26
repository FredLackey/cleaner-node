export = fromEpoch;
/**
 * Converts a Unix epoch timestamp (seconds since Jan 1, 1970) to a JavaScript Date object.
 * Handles both number and string representations of the epoch time.
 * @param {number|string} value The epoch timestamp (in seconds).
 * @returns {Date|null} The corresponding Date object, or null if the input is invalid.
 */
declare function fromEpoch(value: number | string): Date | null;
