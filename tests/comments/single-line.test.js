const {
  getDelimPosition,
  hasDelimeter,
  cleanComment,
  cleanComments,
} = require('../../src/utils/comments/single-line');


describe('getDelimPosition', () => {
  it('should return -1 if input is not a valid string', () => {
    expect(getDelimPosition(null)).toBe(-1);
    expect(getDelimPosition(123)).toBe(-1);
  });

  it('should return -1 if there are no delimiters', () => {
    // isValidString.mockReturnValue(true);
    expect(getDelimPosition('This is a test string')).toBe(-1);
  });

  it('should return the correct position of the delimiter', () => {
    // isValidString.mockReturnValue(true);
    expect(getDelimPosition('This is a #test string')).toBe(10);
    expect(getDelimPosition('This is a //test string')).toBe(10);
  });

  it('should ignore delimiters inside quotes', () => {
    // isValidString.mockReturnValue(true);
    expect(getDelimPosition('This is a "quoted #test" string')).toBe(-1);
    expect(getDelimPosition("This is a 'quoted //test' string")).toBe(-1);
  });
});

describe('hasDelimeter', () => {
  it('should return true if line contains a delimiter', () => {
    // isValidString.mockReturnValue(true);
    expect(hasDelimeter('This is a #test string')).toBe(true);
    expect(hasDelimeter('This is a //test string')).toBe(true);
  });

  it('should return false if line does not contain a delimiter', () => {
    // isValidString.mockReturnValue(true);
    expect(hasDelimeter('This is a test string')).toBe(false);
  });
});

describe('cleanComment', () => {
  it('should return the line without comments', () => {
    // isValidString.mockReturnValue(true);
    expect(cleanComment('This is a #test string')).toBe('This is a ');
    expect(cleanComment('This is a //test string')).toBe('This is a ');
  });

  it('should return the original line if there are no comments', () => {
    // isValidString.mockReturnValue(true);
    expect(cleanComment('This is a test string')).toBe('This is a test string');
  });

  it('should ignore comments inside quotes', () => {
    // isValidString.mockReturnValue(true);
    expect(cleanComment('This is a "quoted #test" string')).toBe('This is a "quoted #test" string');
    expect(cleanComment("This is a 'quoted //test' string")).toBe("This is a 'quoted //test' string");
  });
});

describe('cleanComments', () => {
  it('should return the line without comments if input is a string', () => {
    // isValidString.mockReturnValue(true);
    expect(cleanComments('This is a #test string')).toBe('This is a ');
  });

  it('should return an array of lines without comments if input is an array of strings', () => {
    // isValidString.mockReturnValue(false);
    const lines = ['This is a #test string', 'Another //test string'];
    const expected = ['This is a ', 'Another '];
    expect(cleanComments(lines)).toEqual(expected);
  });

  it('should handle mixed input correctly', () => {
    // isValidString.mockReturnValueOnce(false);
    // isValidString.mockReturnValueOnce(true);
    const lines = ['This is a #test string', 'Another //test string'];
    const expected = ['This is a ', 'Another '];
    expect(cleanComments(lines)).toEqual(expected);
  });
});
