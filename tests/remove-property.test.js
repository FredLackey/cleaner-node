const removeProperty = require('../src/utils/remove-property');

describe('removeProperty', () => {

  it('should remove a property from an object', () => {
    const obj = {
      prop1: 'value1',
      prop2: 'value2',
    };

    const result = removeProperty(obj, 'prop1');

    expect(result).not.toHaveProperty('prop1');
    expect(result).toHaveProperty('prop2', 'value2');
  });

  it('should handle nested objects and arrays', () => {
    const obj = {
      prop1: {
        nestedProp1: 'value1',
        nestedProp2: ['a', 'b', 'c'],
      },
      prop2: ['x', 'y', 'z'],
    };

    const result = removeProperty(obj, 'nestedProp1');

    expect(result).not.toHaveProperty('nestedProp1');
    expect(result.prop1).toHaveProperty('nestedProp2');
    expect(result).toHaveProperty('prop2');
  });

  it('should return the same object if property not found', () => {
    const obj = {
      prop1: 'value1',
      prop2: 'value2',
    };

    const result = removeProperty(obj, 'nonExistentProp');

    expect(result).toEqual(obj);
  });
});
