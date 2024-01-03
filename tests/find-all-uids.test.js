const { findAllUids } = require('..');

describe('findAllUids', () => {

  it('returns an empty array for an empty input object', () => {
    const result = findAllUids({});
    expect(result).toEqual([]);
  });

  it('returns an empty array for an object with no valid UIDs', () => {

    const inputObject = {
      name: 'John Doe',
      age: 30,
      email: 'john@example.com',
    };

    const result = findAllUids(inputObject);
    expect(result).toEqual([]);
  });

  it('finds and returns valid UIDs from a nested object', () => {

    const inputObject = {
      name: 'John Doe',
      uid1: 'E98AD337AD7849D58365595683860838',
      nested: {
        uid2: 'A1B2C3D4E5F6A1B2C3D4E5F6A1B2C3D4',
        uid3: 'InvalidUid',
      },
    };

    const result = findAllUids(inputObject);
    expect(result).toEqual(['E98AD337AD7849D58365595683860838', 'A1B2C3D4E5F6A1B2C3D4E5F6A1B2C3D4']);
  });

  it('handles circular references without crashing', () => {
    
    const circularObject = {};
    circularObject.circularRef = circularObject;

    const inputObject = {
      name: 'John Doe',
      uid1: 'E98AD337AD7849D58365595683860838',
      nested: {
        uid2: 'A1B2C3D4E5F6A1B2C3D4E5F6A1B2C3D4',
        circularRef: circularObject,
      },
    };

    const result = findAllUids(inputObject);
    expect(result).toEqual(['E98AD337AD7849D58365595683860838', 'A1B2C3D4E5F6A1B2C3D4E5F6A1B2C3D4']);
  });
});
