export = decryptString;
/**
 * Decrypts a string that was encrypted using encryptString
 *
 * @param {string} encryptedHex - The hex-encoded encrypted string
 * @param {string} password - The password used for decryption (same as used for encryption)
 * @param {Object} [options=DEFAULT_OPTIONS] - Decryption options
 * @param {string} [options.algorithm='aes-256-cbc'] - Decryption algorithm
 * @param {number} [options.ivLength=16] - Initialization vector length (AES block size)
 * @param {number} [options.saltLength=16] - Salt length for key derivation
 * @param {number} [options.keyLength=32] - Key length (256 bits)
 * @returns {string} - The decrypted string
 * @throws {Error} If encryptedHex or password is invalid
 */
declare function decryptString(encryptedHex: string, password: string, options?: {
    algorithm?: string;
    ivLength?: number;
    saltLength?: number;
    keyLength?: number;
}): string;
