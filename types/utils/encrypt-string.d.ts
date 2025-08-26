export = encryptString;
/**
 * Encrypts a string using AES-256-CBC encryption
 *
 * @param {string} text - The text to encrypt
 * @param {string} password - The password used for encryption
 * @param {Object} [options=DEFAULT_OPTIONS] - Encryption options
 * @param {string} [options.algorithm='aes-256-cbc'] - Encryption algorithm
 * @param {number} [options.ivLength=16] - Initialization vector length (AES block size)
 * @param {number} [options.saltLength=16] - Salt length for key derivation
 * @param {number} [options.keyLength=32] - Key length (256 bits)
 * @returns {string} - Hex-encoded encrypted string (containing salt + iv + encrypted data)
 * @throws {Error} If text or password is invalid
 */
declare function encryptString(text: string, password: string, options?: {
    algorithm?: string;
    ivLength?: number;
    saltLength?: number;
    keyLength?: number;
}): string;
