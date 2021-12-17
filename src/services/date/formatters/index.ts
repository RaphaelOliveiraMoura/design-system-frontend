import * as dateFns from 'date-fns';
import * as dateFnsTz from 'date-fns-tz';

import { TimezoneEnum } from '../types';

export const format = (
  date: Date,
  pattern: string,
  timezone: TimezoneEnum = TimezoneEnum.local
) => {
  if (timezone === TimezoneEnum.utc) {
    return dateFnsTz.format(dateFnsTz.utcToZonedTime(date, timezone), pattern, {
      timeZone: timezone
    });
  }

  return dateFns.format(date, pattern);
};

const formatTemplate =
  (pattern: string) =>
  (dateObject: Date, timezone: TimezoneEnum = TimezoneEnum.local) =>
    format(dateObject, pattern, timezone);

export const date = formatTemplate('dd/MM/yyyy');
export const hours = formatTemplate('HH:mm');
export const dateHours = formatTemplate('dd/MM/yyyy HH:mm');
