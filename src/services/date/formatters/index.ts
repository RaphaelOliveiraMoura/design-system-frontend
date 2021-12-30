import * as dateFns from 'date-fns';
import * as dateFnsTz from 'date-fns-tz';

import { TimezoneEnum } from '../types';

const PATTERN = {
  DATE: 'dd/MM/yyyy',
  DATE_HOUR: 'dd/MM/yyyy HH:mm',
  HOUR: 'HH:mm'
};

export const format = (
  date: Date,
  pattern: string,
  timezone: TimezoneEnum = TimezoneEnum.local
) => {
  if (timezone === TimezoneEnum.utc) {
    const dateWithTimezone = dateFnsTz.utcToZonedTime(date, timezone);
    return dateFnsTz.format(dateWithTimezone, pattern, { timeZone: timezone });
  }

  return dateFns.format(date, pattern);
};

const formatTemplate =
  (pattern: string) =>
  (dateObject: Date, timezone: TimezoneEnum = TimezoneEnum.local) =>
    format(dateObject, pattern, timezone);

export const date = formatTemplate(PATTERN.DATE);
export const hours = formatTemplate(PATTERN.HOUR);
export const dateHours = formatTemplate(PATTERN.DATE_HOUR);

const parseTemplate = (date: string, format: string) =>
  dateFns.parse(date, format, new Date());

export const parseDate = (date: string) => parseTemplate(date, 'dd/MM/yyyy');

export const parseRangeDate = (rangeDate: string): [Date, Date] => {
  const [date1, date2] = rangeDate.split(' - ').map(parseDate);
  return [date1, date2];
};
