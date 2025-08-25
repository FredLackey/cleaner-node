const { replaceValues } = require('..');

describe('replaceValues', () => {

  it('throws an error if sources and targets are not arrays of the same length', () => {
    const inputObject = {
      name: 'John Doe',
      age: 30,
    };
    const sources = ['John Doe', 30];
    const targets = ['Jane Smith', 25, 'Extra Target']; // Mismatched length

    expect(() => replaceValues(inputObject, sources, targets)).toThrow('sources and targets must be the same length');
  });

  it('throws an error if sources are not an array', () => {
    const inputObject = {
      name: 'John Doe',
      age: 30,
    };
    const sources = 'John Doe'; // Not an array
    const targets = ['Jane Smith', 25];

    expect(() => replaceValues(inputObject, sources, targets)).toThrow('sources must be an array');
  });

  it('throws an error if targets are not an array', () => {
    const inputObject = {
      name: 'John Doe',
      age: 30,
    };
    const sources = ['John Doe', 30];
    const targets = 'Jane Smith'; // Not an array

    expect(() => replaceValues(inputObject, sources, targets)).toThrow('targets must be an array');
  });

  it('replaces values in a complex object with matching sources and targets', () => {
    const inputObject = {
      name: 'John Doe',
      age: 30,
      birthdate: new Date('1990-01-01'),
      address: {
        street: '123 Main St',
        city: 'New York',
      },
    };
    const sources = ['John Doe', 30, new Date('1990-01-01'), 'New York'];
    const targets = ['Jane Smith', 25, new Date('2000-01-01'), 'Los Angeles'];

    const result = replaceValues(inputObject, sources, targets);

    expect(result).toEqual({
      name: 'Jane Smith',
      age: 25,
      birthdate: new Date('2000-01-01'),
      address: {
        street: '123 Main St',
        city: 'Los Angeles', // Only this value should be replaced
      },
    });
  });

  // Add more test cases to cover different scenarios
});
