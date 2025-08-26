export = newCode;
/**
 * Generates a random code string of a specified length using a given set of characters.
 *
 * @param {number} [totalLength=c.DEFAULTS.CODE.LENGTH] - The desired length of the code. Defaults to the value defined in `c.DEFAULTS.CODE.LENGTH`.
 * @param {string} [chars=c.DEFAULTS.CODE.CHARS] - The string of characters to use for generating the code. Defaults to the value defined in `c.DEFAULTS.CODE.CHARS`.
 * @returns {string} The generated random code string.
 */
declare function newCode(totalLength?: number, chars?: string): string;
