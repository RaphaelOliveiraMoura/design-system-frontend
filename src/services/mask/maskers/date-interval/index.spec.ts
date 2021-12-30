import * as masker from '.';

describe('date interval mask', () => {
  it('date interval', () => {
    const sut = masker.dateIntervalMask;

    expect(sut('0101202001012021')).toBe('01/01/2020 - 01/01/2021');
    expect(sut('01012020')).toBe('01/01/2020');
    expect(sut('0101202001')).toBe('01/01/2020 - 01');
    expect(sut('0101202201012021')).toBe('01/01/2021 - 01/01/2022');
  });
});
