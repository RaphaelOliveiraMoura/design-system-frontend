import { parseMoney, unparseMoney } from '.';

describe('money mask', () => {
  it('unparseMoney', () => {
    expect(unparseMoney('-R$ 1.000.000,15')).toBe(-1000000.15);

    expect(unparseMoney('-R$ 1.000.000,15', { acceptNegative: false })).toBe(
      1000000.15
    );

    expect(
      unparseMoney('1~000~000*1500', {
        delimiter: '*'
      })
    ).toBe(1000000.15);
  });

  it('parseMoney', () => {
    expect(parseMoney(0)).toBe('0,00');
    expect(parseMoney(0.1)).toBe('0,10');
    expect(parseMoney(1.1)).toBe('1,10');

    expect(
      parseMoney(1000000.15, { delimiter: '*', separator: '~', precision: 4 })
    ).toBe('1~000~000*1500');

    expect(parseMoney(1000000.15, { delimiter: '.', separator: ',' })).toBe(
      '1,000,000.15'
    );
  });
});
