import * as date from '.';

describe('date', () => {
  it('should get current date', () => {
    expect(date.toDate()).toBeInstanceOf(Date);
  });

  it('get date in ISO format', () => {
    const isoRegex = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/gi;
    expect(date.toIso()).toMatch(isoRegex);
    expect(date.toIso(date.toDate())).toMatch(isoRegex);
  });
});
