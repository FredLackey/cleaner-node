export = getEnum;
/**
 * Retrieves the enum value from an object.
 * The function looks for a specific key in the object (from a predefined list of ENUM_KEYS)
 * and returns the string value associated with that key.
 *
 * @param {object} obj The object to search for an enum value.
 * @returns {string|null} The enum value if found and valid, otherwise null.
 */
declare function getEnum(obj: object): string | null;
