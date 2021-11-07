import { toPattern } from './vanilla-masker';

export const mask =
  (pattern: string) =>
  (value: string): string =>
    toPattern(value, { pattern });
