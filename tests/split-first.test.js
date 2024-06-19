const splitFirst = require('../src/utils/split-first');

describe('splitFirst', () => {

  test('throws an error if the string is invalid', () => {
    expect(() => splitFirst('', ',')).toThrow('Invalid string supplied to splitFirst()');
  });

  test('throws an error if the separator is invalid', () => {
    expect(() => splitFirst('valid', '')).toThrow('Invalid separator supplied to splitFirst()');
  });

  test('returns the original string in an array if the separator is not found', () => {
    expect(splitFirst('no-separator-here', ',')).toEqual(['no-separator-here']);
  });

  test('splits the string correctly when the separator is found', () => {
    expect(splitFirst('part1,part2', ',')).toEqual(['part1', 'part2']);
  });

  test('handles an empty string and empty separator', () => {
    expect(() => splitFirst('', '')).toThrow('Invalid string supplied to splitFirst()');
  });

  test('handles a non-empty string and empty separator', () => {
    expect(() => splitFirst('valid', '')).toThrow('Invalid separator supplied to splitFirst()');
  });

  test('handles an empty string and non-empty separator', () => {
    expect(() => splitFirst('', ',')).toThrow('Invalid string supplied to splitFirst()');
  });

  test('splits string with multiple occurrences of the separator', () => {
    expect(splitFirst('part1,part2,part3', ',')).toEqual(['part1', 'part2,part3']);
  });
});