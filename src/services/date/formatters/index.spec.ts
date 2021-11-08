import * as date from '..';
import * as formatters from '.';

describe('formatters', () => {
  it('should format date with utc', () => {
    expect(
      formatters.format(
        date.now('2020-01-01T05:00:00.000Z'),
        "dd 'do' MM 'de' yyyy 'ás' HH 'horas' 'e' mm 'minutos'",
        date.TimezoneEnum.utc
      )
    ).toBe('01 do 01 de 2020 ás 05 horas e 00 minutos');
  });

  it('should test formatters with utc', () => {
    expect(
      formatters.date(
        date.now('2020-01-01T00:00:00.000Z'),
        date.TimezoneEnum.utc
      )
    ).toBe('01/01/2020');

    expect(
      formatters.hours(
        date.now('2020-01-01T00:00:00.000Z'),
        date.TimezoneEnum.utc
      )
    ).toBe('00:00');

    expect(
      formatters.dateHours(
        date.now('2020-01-01T00:00:00.000Z'),
        date.TimezoneEnum.utc
      )
    ).toBe('01/01/2020 00:00');
  });
});
