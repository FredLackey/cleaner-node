/**
 * Retrieves environment variables from process.env.
 * Filters for keys that are all uppercase and have string, number, or boolean values.
 * Sorts the keys alphabetically.
 * @returns {object} An object containing the filtered and sorted environment variables.
 */
export function getVars(): object;
