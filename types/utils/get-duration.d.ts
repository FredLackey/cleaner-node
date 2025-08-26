export = getDuration;
/**
 * Calculates the duration between two timestamps (or Date objects) and formats it.
 * @param {number|Date} start The starting timestamp (milliseconds since epoch) or Date object.
 * @param {number|Date} end The ending timestamp (milliseconds since epoch) or Date object.
 * @returns {object} An object containing:
 *   - `values`: An object with the duration broken down into `weeks`, `days`, `hours`, `mins`, `seconds`, and `ms`.
 *   - `text`: A string representation of the duration in the format 'WW:DD:HH:MM:SS.sss', omitting leading zero components (e.g., 'HH:MM:SS.sss' or 'MM:SS.sss').
 */
declare function getDuration(start: number | Date, end: number | Date): object;
