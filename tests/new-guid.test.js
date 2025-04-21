const { newGuid, isGuidFormat } = require('../src/utils');

describe('newGuid', () => {
    test('should generate a valid GUID', () => {
        const guid = newGuid();
        expect(guid).toBeDefined();
        expect(typeof guid).toBe('string');
        // Check if the generated string matches the GUID format
        expect(isGuidFormat(guid)).toBe(true);
    });

    test('should generate unique GUIDs', () => {
        const guid1 = newGuid();
        const guid2 = newGuid();
        expect(guid1).not.toBe(guid2);
    });

    test('should generate 100 unique GUIDs quickly', () => {
        const guids = new Set();
        for (let i = 0; i < 100; i++) {
            guids.add(newGuid());
        }
        expect(guids.size).toBe(100);
    });
}); 