/**
 * Verifies a JWT token using a secret or public key.
 * Catches errors and returns undefined if verification fails.
 *
 * @param {string} token - The JWT token string.
 * @param {string|Buffer} secret - The secret or public key for verification.
 * @param {boolean} [ignoreExpiration=true] - If true, bypasses expiration check. Defaults to true.
 * @returns {object|undefined} The decoded payload if verification is successful, otherwise undefined.
 */
export function verify(token: string, secret: string | Buffer, ignoreExpiration?: boolean): object | undefined;
/**
 * Decodes a JWT token without verifying the signature.
 *
 * @param {string} token - The JWT token string.
 * @returns {object|null} The decoded payload, or null if decoding fails.
 */
export function decode(token: string): object | null;
/**
 * Encodes (signs) a payload into a JWT token.
 *
 * @param {object|string|Buffer} payload - The payload to sign.
 * @param {string|Buffer} certOrSecret - The secret or private key for signing.
 * @param {object} [options] - Options for `jsonwebtoken.sign` (e.g., algorithm, expiresIn).
 * @returns {string} The generated JWT token string.
 */
export function encode(payload: object | string | Buffer, certOrSecret: string | Buffer, options?: object): string;
/**
 * Converts a standard JWT claims object into an application-specific payload object.
 * Uses the `CLAIMS` mapping to transform keys and values.
 * Keeps unmapped claims as they are.
 *
 * @param {object} obj - The JWT claims object.
 * @returns {object|undefined} The transformed application payload object, or undefined if input is not an object.
 */
export function fromClaims(obj: object): object | undefined;
/**
 * Converts an application-specific payload object into a standard JWT claims object.
 * Uses the `CLAIMS` mapping to transform keys and values.
 * Keeps unmapped properties as they are.
 *
 * @param {object} obj - The application payload object.
 * @returns {object|undefined} The transformed JWT claims object, or undefined if input is not an object.
 */
export function toClaims(obj: object): object | undefined;
