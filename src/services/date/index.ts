export enum TimezoneEnum {
  utc = 'UTC',
  local = 'LOCAL'
}

export const now = (isoString?: string) =>
  isoString ? new Date(isoString) : new Date();

export const iso = (date: Date) => date.toISOString();

export * as formatters from './formatters';
export * from './operators';
export * from './comparators';
