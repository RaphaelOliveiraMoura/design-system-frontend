import { formatters, isBefore } from 'services/date';
import { Masker } from 'services/mask/types';
import { mask } from '../../libs/vanilla-masker';

export const dateIntervalMask: Masker = value => {
  const maskPattern = '99/99/9999 - 99/99/9999';
  const maskedValue = mask(maskPattern)(value);

  if (maskedValue.length !== maskPattern.length) return maskedValue;

  const [date1, date2] = formatters.parseRangeDate(maskedValue);

  if (isBefore(date1, date2)) return maskedValue;

  const [rawDate1, rawDate2] = maskedValue.split(' - ');
  return `${rawDate2} - ${rawDate1}`;
};
