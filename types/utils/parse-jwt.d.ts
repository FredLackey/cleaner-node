export = parseJwt;
/**
 * Parses a JSON Web Token (JWT) string and returns an object with details about the token.
 * It decodes the claims, converts them to a payload object, verifies the signature (if a secret is provided),
 * and checks if the token is expired.
 *
 * @param {string} token - The JWT string to parse.
 * @param {string} [secret=''] - The secret key to verify the token's signature. If empty, signature verification is skipped.
 * @returns {object} An object containing information about the parsed token.
 * @returns {string|null} return.token - The original token string, or null if the input was invalid.
 * @returns {object|null} return.claims - The decoded claims from the token, or null if decoding failed.
 * @returns {object|null} return.payload - The payload derived from the claims (often the main data), or null if claims are invalid.
 * @returns {boolean} return.isValid - True if the token signature was successfully verified (requires a secret), false otherwise.
 * @returns {boolean} return.isExpired - True if the token signature is valid but the token has passed its expiration time (requires a secret), false otherwise.
 */
declare function parseJwt(token: string, secret?: string): object;
