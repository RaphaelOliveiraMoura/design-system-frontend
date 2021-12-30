import { ToDate, ToIso } from './types';

export const toDate: ToDate = isoString =>
  isoString ? new Date(isoString) : new Date();

export const toIso: ToIso = (date = new Date()) => date.toISOString();

export * as formatters from './formatters';
export * from './operators';
export * from './comparators';
