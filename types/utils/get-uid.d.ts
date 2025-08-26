export = getUid;
/**
 * Extracts a UID (or optionally a GUID) from an item or returns the input if it's already a valid UID/GUID format.
 * Checks for a `uid` property within an object if the input is an object.
 * @param {string|object} itemOrId The item to extract the UID from. Can be a string (potential UID/GUID) or an object containing a `uid` property.
 * @param {boolean} [strict=false] If true, only accepts the UID format. If false, accepts both UID and GUID formats.
 * @returns {string|undefined} The extracted UID/GUID, or undefined if not found or the input is invalid.
 */
declare function getUid(itemOrId: string | object, strict?: boolean): string | undefined;
