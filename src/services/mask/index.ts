import { mask } from './libs/vanilla-masker';

export const dateMask = mask('99/99/9999');
export const yearMask = mask('9999');
export const hourIntervalMask = mask('99:99 - 99:99');

export const cpfMask = mask('999.999.999-99');
export const cepMask = mask('99999-999');
export const cnpjMask = mask('99.999.999/9999-99');

export const phoneMask = mask('99 9 9999-9999');
export const landlinePhoneMask = mask('99 9999-9999');

export const stateMask = (value: string) => mask('AA')(value).toUpperCase();

export { moneyMask } from './money';
