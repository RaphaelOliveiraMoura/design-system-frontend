import * as date from '.';

describe('date', () => {
  it('should get current date', () => {
    expect(date.toDate()).toBeInstanceOf(Date);
  });
});
