import * as dateFns from 'date-fns';

// Add operators
export const addYears = (date: Date, years: number) =>
  dateFns.addYears(date, years);

export const addMonths = (date: Date, months: number) =>
  dateFns.addMonths(date, months);

export const addDays = (date: Date, days: number) =>
  dateFns.addDays(date, days);

export const addHours = (date: Date, hours: number) =>
  dateFns.addHours(date, hours);

export const addMinutes = (date: Date, minutes: number) =>
  dateFns.addMinutes(date, minutes);

// Sub operators
export const subYears = (date: Date, years: number) =>
  dateFns.subYears(date, years);

export const subMonths = (date: Date, months: number) =>
  dateFns.subMonths(date, months);

export const subDays = (date: Date, days: number) =>
  dateFns.subDays(date, days);

export const subHours = (date: Date, hours: number) =>
  dateFns.subHours(date, hours);

export const subMinutes = (date: Date, minutes: number) =>
  dateFns.subMinutes(date, minutes);
