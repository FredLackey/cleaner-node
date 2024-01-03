const { removeAuditFields } = require('..');

describe('removeAuditFields', () => {
  it('removes audit fields from a single object', () => {
    const inputObject = {
      createdBy: 'user1',
      createdAt: '2023-01-01',
      name: 'John Doe',
    };

    const result = removeAuditFields(inputObject);

    expect(result).not.toHaveProperty('createdBy');
    expect(result).not.toHaveProperty('createdAt');
    expect(result).toHaveProperty('name', 'John Doe');
  });

  it('removes audit fields from nested objects and arrays', () => {
    const inputObject = {
      createdBy: 'user1',
      createdAt: '2023-01-01',
      items: [
        {
          name: 'Item 1',
          _ac: 'ac1',
          _av: 'av1',
        },
        {
          name: 'Item 2',
          _ac: 'ac2',
          _av: 'av2',
          subItems: [
            {
              name: 'Subitem 1',
              _ac: 'ac3',
              _av: 'av3',
            },
          ],
        },
      ],
    };

    const result = removeAuditFields(inputObject);

    expect(result).not.toHaveProperty('createdBy');
    expect(result).not.toHaveProperty('createdAt');
    expect(result.items[0]).not.toHaveProperty('_ac');
    expect(result.items[0]).not.toHaveProperty('_av');
    expect(result.items[1]).not.toHaveProperty('_ac');
    expect(result.items[1]).not.toHaveProperty('_av');
    expect(result.items[1].subItems[0]).not.toHaveProperty('_ac');
    expect(result.items[1].subItems[0]).not.toHaveProperty('_av');
  });

  it('handles circular references gracefully', () => {
    const circularObject = {};
    circularObject.circularRef = circularObject;

    const inputObject = {
      createdBy: 'user1',
      items: [
        {
          name: 'Item 1',
          _ac: 'ac1',
          circularRef: circularObject,
        },
      ],
    };

    const result = removeAuditFields(inputObject);

    expect(result).not.toHaveProperty('createdBy');
    expect(result.items[0]).not.toHaveProperty('_ac');
    expect(result.items[0].circularRef).toBe(result.items[0].circularRef); // Circular reference should not be removed
  });
});
