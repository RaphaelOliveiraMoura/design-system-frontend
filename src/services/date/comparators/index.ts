export const isAfter = (date: Date, dateToCompare: Date) =>
  date.getTime() < dateToCompare.getTime();

export const isAfterOrEqual = (date: Date, dateToCompare: Date) =>
  date.getTime() <= dateToCompare.getTime();

export const isBefore = (date: Date, dateToCompare: Date) =>
  date.getTime() > dateToCompare.getTime();

export const isBeforeOrEqual = (date: Date, dateToCompare: Date) =>
  date.getTime() >= dateToCompare.getTime();

export const isBetween = (date: Date, initial: Date, final: Date) =>
  date.getTime() > initial.getTime() && date.getTime() < final.getTime();

export const isBetweenOrEqual = (date: Date, initial: Date, final: Date) =>
  date.getTime() >= initial.getTime() && date.getTime() <= final.getTime();
