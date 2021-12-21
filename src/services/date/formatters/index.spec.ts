import * as dateService from '..';
import * as formatters from '.';
import { TimezoneEnum } from '../types';

describe('formatters', () => {
  it('should format date with utc', () => {
    const date = dateService.toDate('2020-01-01T05:00:00.000Z');
    const format = "dd 'do' MM 'de' yyyy 'ás' HH 'horas' 'e' mm 'minutos'";
    const expected = '01 do 01 de 2020 ás 05 horas e 00 minutos';

    expect(formatters.format(date, format, TimezoneEnum.utc)).toBe(expected);
  });

  it('should test formatters with utc', () => {
    const date = dateService.toDate('2020-01-01T00:00:00.000Z');
    const timezone = TimezoneEnum.utc;

    expect(formatters.date(date, timezone)).toBe('01/01/2020');
    expect(formatters.hours(date, timezone)).toBe('00:00');
    expect(formatters.dateHours(date, timezone)).toBe('01/01/2020 00:00');
  });
});
