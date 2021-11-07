import * as masker from '.';

describe('mask', () => {
  it('should test cpf mask', () => {
    expect(masker.cpfMask('11111111111')).toBe('111.111.111-11');
    expect(masker.cpfMask('12345678910')).toBe('123.456.789-10');

    expect(masker.cpfMask('12345678910111213')).toBe('123.456.789-10');
    expect(masker.cpfMask('1234')).toBe('123.4');

    expect(masker.cpfMask('')).toBe('');
  });

  it('should test state mask', () => {
    expect(masker.stateMask('mg')).toBe('MG');
    expect(masker.stateMask('MG')).toBe('MG');

    expect(masker.stateMask('mgsp')).toBe('MG');

    expect(masker.stateMask('a')).toBe('A');
    expect(masker.stateMask('')).toBe('');
  });

  it('should test money mask', () => {
    expect(masker.moneyMask('')).toBe('0,00');
    expect(masker.moneyMask('0')).toBe('0,00');

    expect(masker.moneyMask('0,001')).toBe('0,01');
    expect(masker.moneyMask('0,012')).toBe('0,12');
    expect(masker.moneyMask('0,123')).toBe('1,23');
    expect(masker.moneyMask('0,12345')).toBe('123,45');

    expect(masker.moneyMask('1,2')).toBe('0,12');
    expect(masker.moneyMask('100.000,2')).toBe('10.000,02');
    expect(masker.moneyMask('0,1')).toBe('0,01');
    expect(masker.moneyMask('123,')).toBe('1,23');

    expect(masker.moneyMask('123456,00')).toBe('123.456,00');
    expect(masker.moneyMask('12.3456,00')).toBe('123.456,00');
    expect(masker.moneyMask('123.456,00aaa')).toBe('123.456,00');
    expect(masker.moneyMask('aaa123.456,00')).toBe('123.456,00');
    expect(masker.moneyMask('abc123+*.45=6;,00')).toBe('123.456,00');

    expect(masker.moneyMask('123.456,00-')).toBe('-123.456,00');
    expect(masker.moneyMask('-123.456,00')).toBe('-123.456,00');
    expect(masker.moneyMask('--123.456,00')).toBe('123.456,00');
    expect(masker.moneyMask('---123.456,00')).toBe('-123.456,00');
    expect(masker.moneyMask('----123.456,00')).toBe('123.456,00');
    expect(masker.moneyMask('-123.456-,00')).toBe('123.456,00');
    expect(masker.moneyMask('-123.456,00-')).toBe('123.456,00');
    expect(masker.moneyMask('123-.456,00')).toBe('-123.456,00');
  });
});
