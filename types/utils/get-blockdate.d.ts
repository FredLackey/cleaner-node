export = getBlockDate;
/**
 * Formats a Date object into a blockdate string (e.g., YYYYMMDDHHmmssSSS).
 * @param {Date} [value=new Date()] The Date object to format. Defaults to the current date and time.
 * @param {string} [format=DEFAULT_FORMAT] A string indicating the desired length/precision (e.g., 'YYYYMMDD', 'YYYYMMDDHHmm'). The output string will be truncated to the length of this format string.
 * @returns {string} The formatted blockdate string.
 */
declare function getBlockDate(value?: Date, format?: string): string;
