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

  it('should test money mask', () => {
    const sut = masker.moneyInputMask;

    expect(sut('')).toBe('0,00');
    expect(sut('0')).toBe('0,00');

    expect(sut('0,001')).toBe('0,01');
    expect(sut('0,012')).toBe('0,12');
    expect(sut('0,123')).toBe('1,23');
    expect(sut('0,12345')).toBe('123,45');

    expect(sut('1,2')).toBe('0,12');
    expect(sut('100.000,2')).toBe('10.000,02');
    expect(sut('0,1')).toBe('0,01');
    expect(sut('123,')).toBe('1,23');

    expect(sut('123456,00')).toBe('123.456,00');
    expect(sut('12.3456,00')).toBe('123.456,00');
    expect(sut('123.456,00aaa')).toBe('123.456,00');
    expect(sut('aaa123.456,00')).toBe('123.456,00');
    expect(sut('abc123+*.45=6;,00')).toBe('123.456,00');

    expect(sut('123.456,00-')).toBe('-123.456,00');
    expect(sut('-123.456,00')).toBe('-123.456,00');
    expect(sut('--123.456,00')).toBe('123.456,00');
    expect(sut('---123.456,00')).toBe('-123.456,00');
    expect(sut('----123.456,00')).toBe('123.456,00');
    expect(sut('-123.456-,00')).toBe('123.456,00');
    expect(sut('-123.456,00-')).toBe('123.456,00');
    expect(sut('123-.456,00')).toBe('-123.456,00');
  });

  it('unparseMoney', () => {
    const sut = masker.unparseMoney;

    expect(sut('-R$ 1.000.000,15')).toBe(-1000000.15);
    expect(sut('-R$ 1.000.000,15,')).toBe(-1000000.15);
    expect(sut('-R$ 1.000,000,15')).toBe(-1000.00015);
    expect(sut('-R$ 1.000,000,15,')).toBe(-1000.00015);
    expect(sut('-R$ 1.000.000,15', { acceptNegative: false })).toBe(1000000.15);
    expect(sut('1~000~000*1500', { delimiter: '*' })).toBe(1000000.15);
  });

  it('parseMoney', () => {
    const sut = masker.parseMoney;

    expect(sut(0)).toBe('0,00');
    expect(sut(0.1)).toBe('0,10');
    expect(sut(1.1)).toBe('1,10');

    expect(
      sut(1000000.15, {
        delimiter: '*',
        separator: '~',
        precision: 4
      })
    ).toBe('1~000~000*1500');

    expect(
      sut(1000000.15, {
        delimiter: '.',
        separator: ','
      })
    ).toBe('1,000,000.15');
  });
});
