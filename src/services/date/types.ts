export enum TimezoneEnum {
  utc = 'UTC',
  local = 'LOCAL'
}

export type ToDate = (isoString?: string) => Date;

export type ToIso = (date: Date) => string;
