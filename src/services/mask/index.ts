import { mask } from './libs/vanilla-masker';
import { Masker } from './types';

export const dateMask: Masker = mask('99/99/9999');
export { dateIntervalMask } from './maskers/date-interval';
export const yearMask: Masker = mask('9999');
export const hourIntervalMask: Masker = mask('99:99 - 99:99');

export const cpfMask: Masker = mask('999.999.999-99');
export const cepMask: Masker = mask('99999-999');
export const cnpjMask: Masker = mask('99.999.999/9999-99');

export const phoneMask: Masker = mask('99 9 9999-9999');
export const landlinePhoneMask: Masker = mask('99 9999-9999');

export const stateMask: Masker = value => mask('AA')(value).toUpperCase();

export { moneyInputMask, parseMoney, unparseMoney } from './maskers/money';
