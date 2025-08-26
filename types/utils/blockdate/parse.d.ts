export = parse;
/**
 * Parses a blockdate string (YYYYMMDD, YYYYMMDDHHmm, YYYYMMDDHHmmss, or YYYYMMDDHHmmssSSS) into its components.
 * @param {string} value The blockdate string to parse.
 * @param {number} [maxYear=current year] The maximum allowed year.
 * @returns {object|null} An object containing the parsed date components (year, month, day, hour, minute, second, millisecond) with raw and validated values, or null if the input is invalid.
 */
declare function parse(value: string, maxYear?: number): object | null;
