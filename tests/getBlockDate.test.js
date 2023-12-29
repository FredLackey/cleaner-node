const { getBlockDate } = require('../src');

describe('getBlockDate', () => {

  const date = new Date('2023-03-15T10:30:45.123Z');
  // const block = '20230315063045.123';

  it('returns YYYYMMDD format', () => {
    const result = getBlockDate(date, 'YYYYMMDD');
    expect(result).toBe('20230315');
  });
  
  it('returns YYYYMMDDHHmm format', () => {
    const result = getBlockDate(date, 'YYYYMMDDHHmm');
    expect(result).toBe('202303150630');
  });
  
  it('returns YYYYMMDDHHmmss format', () => {
    const result = getBlockDate(date, 'YYYYMMDDHHmmss');
    expect(result).toBe('20230315063045');
  });

});
