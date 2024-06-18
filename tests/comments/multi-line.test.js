const { removeComments } = require('../../src/utils/comments/multi-line');

describe('removeComments', () => {

  it('should return the same array if lines are not valid', () => {
    const lines = null;
    expect(removeComments(lines)).toBe(lines);
  });

  it('should return the same array if there are no comments', () => {
    const lines = ['line 1', 'line 2', 'line 3'];
    expect(removeComments(lines)).toEqual(lines);
  });

  it('should remove single line comments', () => {
    const lines = ['line 1 /* comment */', 'line 2'];
    const expected = ['line 1 ', 'line 2'];
    expect(removeComments(lines)).toEqual(expected);
  });

  it('should remove multi-line comments', () => {
    const lines = [
      'line 1 /* comment start',
      'comment middle',
      'comment end */ line 2',
      'line 3'
    ];
    const expected = ['line 1 ', ' line 2', 'line 3'];
    expect(removeComments(lines)).toEqual(expected);
  });

  it('should remove comments that start and end on the same line', () => {
    const lines = ['line 1 /* comment */ line 2'];
    const expected = ['line 1  line 2'];
    expect(removeComments(lines)).toEqual(expected);
  });

  it('should handle lines with multiple comment blocks', () => {
    const lines = ['line 1 /* comment1 */ line 2 /* comment2 */ line 3'];
    const expected = ['line 1  line 2  line 3'];
    expect(removeComments(lines)).toEqual(expected);
  });

  it('should handle comment blocks that start and end on different lines', () => {
    const lines = ['line 1 /* comment', 'comment end */ line 2'];
    const expected = ['line 1 ', ' line 2'];
    expect(removeComments(lines)).toEqual(expected);
  });

  it('should handle comments starting mid-line and ending mid-line', () => {
    const lines = ['line 1 /* comment */ end'];
    const expected = ['line 1  end'];
    expect(removeComments(lines)).toEqual(expected);
  });

  it('should return empty array if all lines are comments', () => {
    const lines = ['/* comment start', 'comment middle', 'comment end */'];
    const expected = [''];
    expect(removeComments(lines)).toEqual(expected);
  });
});
