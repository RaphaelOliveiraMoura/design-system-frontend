import * as masker from '.';

describe('mask', () => {
  it('should test cpf mask', () => {
    const sut = masker.cpfMask;

    expect(sut('11111111111')).toBe('111.111.111-11');
    expect(sut('12345678910')).toBe('123.456.789-10');

    expect(sut('12345678910111213')).toBe('123.456.789-10');
    expect(sut('1234')).toBe('123.4');

    expect(sut('')).toBe('');
  });

  it('should test state mask', () => {
    const sut = masker.stateMask;

    expect(sut('mg')).toBe('MG');
    expect(sut('MG')).toBe('MG');

    expect(sut('mgsp')).toBe('MG');

    expect(sut('a')).toBe('A');
    expect(sut('')).toBe('');
  });
});
