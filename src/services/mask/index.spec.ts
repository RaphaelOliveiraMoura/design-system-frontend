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
    expect(masker.moneyInputMask('')).toBe('0,00');
    expect(masker.moneyInputMask('0')).toBe('0,00');

    expect(masker.moneyInputMask('0,001')).toBe('0,01');
    expect(masker.moneyInputMask('0,012')).toBe('0,12');
    expect(masker.moneyInputMask('0,123')).toBe('1,23');
    expect(masker.moneyInputMask('0,12345')).toBe('123,45');

    expect(masker.moneyInputMask('1,2')).toBe('0,12');
    expect(masker.moneyInputMask('100.000,2')).toBe('10.000,02');
    expect(masker.moneyInputMask('0,1')).toBe('0,01');
    expect(masker.moneyInputMask('123,')).toBe('1,23');

    expect(masker.moneyInputMask('123456,00')).toBe('123.456,00');
    expect(masker.moneyInputMask('12.3456,00')).toBe('123.456,00');
    expect(masker.moneyInputMask('123.456,00aaa')).toBe('123.456,00');
    expect(masker.moneyInputMask('aaa123.456,00')).toBe('123.456,00');
    expect(masker.moneyInputMask('abc123+*.45=6;,00')).toBe('123.456,00');

    expect(masker.moneyInputMask('123.456,00-')).toBe('-123.456,00');
    expect(masker.moneyInputMask('-123.456,00')).toBe('-123.456,00');
    expect(masker.moneyInputMask('--123.456,00')).toBe('123.456,00');
    expect(masker.moneyInputMask('---123.456,00')).toBe('-123.456,00');
    expect(masker.moneyInputMask('----123.456,00')).toBe('123.456,00');
    expect(masker.moneyInputMask('-123.456-,00')).toBe('123.456,00');
    expect(masker.moneyInputMask('-123.456,00-')).toBe('123.456,00');
    expect(masker.moneyInputMask('123-.456,00')).toBe('-123.456,00');
  });

  it('unparseMoney', () => {
    expect(masker.unparseMoney('-R$ 1.000.000,15')).toBe(-1000000.15);

    expect(
      masker.unparseMoney('-R$ 1.000.000,15', { acceptNegative: false })
    ).toBe(1000000.15);

    expect(
      masker.unparseMoney('1~000~000*1500', {
        delimiter: '*'
      })
    ).toBe(1000000.15);
  });

  it('parseMoney', () => {
    expect(masker.parseMoney(0)).toBe('0,00');
    expect(masker.parseMoney(0.1)).toBe('0,10');
    expect(masker.parseMoney(1.1)).toBe('1,10');

    expect(
      masker.parseMoney(1000000.15, {
        delimiter: '*',
        separator: '~',
        precision: 4
      })
    ).toBe('1~000~000*1500');

    expect(
      masker.parseMoney(1000000.15, { delimiter: '.', separator: ',' })
    ).toBe('1,000,000.15');
  });
});
