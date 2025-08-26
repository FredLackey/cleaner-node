export = getInnerTokens;
/**
 * Extracts the innermost content enclosed by a specified pair of opening and closing brackets/tokens.
 * Handles nested brackets correctly.
 * @param {string} str The string to search within.
 * @param {object} bracket An object containing the opening and closing bracket strings.
 * @param {string} bracket.open The opening bracket/token.
 * @param {string} bracket.close The closing bracket/token.
 * @returns {string|null} The innermost content including the enclosing brackets, or null if no matching brackets are found or if the bracket definition is invalid.
 * @throws {Error} If the bracket object or its properties are invalid.
 */
declare function getInnerTokens(str: string, bracket: {
    open: string;
    close: string;
}): string | null;
