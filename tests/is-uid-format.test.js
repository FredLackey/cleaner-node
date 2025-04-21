const { isUidFormat, newUid } = require('../src/utils');

describe('isUidFormat', () => {
    test('should return true for a valid UID', () => {
        const validUid = newUid(); // Generate a known valid UID
        expect(isUidFormat(validUid)).toBe(true);
        expect(isUidFormat('u123e4567e89b12d3a456426614174000')).toBe(false);
    });

    test('should return false for invalid UID formats', () => {
        expect(isUidFormat('not-a-uid')).toBe(false);
        expect(isUidFormat(12345)).toBe(false);
        expect(isUidFormat(null)).toBe(false);
        expect(isUidFormat(undefined)).toBe(false);
        expect(isUidFormat('')).toBe(false);
        expect(isUidFormat('u123e4567e89b12d3a45642661417400')).toBe(true);
        expect(isUidFormat('u123e4567e89b12d3a4564266141740000')).toBe(false); // Too long
        expect(isUidFormat('123e4567e89b12d3a456426614174000')).toBe(true); // No prefix 'u' is OK
        expect(isUidFormat('u123e4567-e89b-12d3-a456-426614174000')).toBe(false); // Contains hyphens
    });

    test('should return false for GUIDs', () => {
        expect(isUidFormat('123e4567-e89b-12d3-a456-426614174000')).toBe(false);
        expect(isUidFormat('{123e4567-e89b-12d3-a456-426614174000}')).toBe(false);
    });
}); 