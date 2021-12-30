import { toDate } from '..';
import * as comparators from '.';

type ComparatorsFunctions = keyof typeof comparators;

type UseCases<T extends ComparatorsFunctions> = {
  comparator: T;
  date1: Date;
  date2: Date;
  date3?: Date;
  expected: boolean;
}[];

describe('comparators', () => {
  it('isAfter', () => {
    const useCases: UseCases<'isAfter' | 'isAfterOrEqual'> = [
      {
        comparator: 'isAfter',
        date1: toDate('2020-01-01T05:00:00.000Z'),
        date2: toDate('2020-01-01T05:00:00.000Z'),
        expected: false
      },
      {
        comparator: 'isAfterOrEqual',
        date1: toDate('2020-01-01T05:00:00.000Z'),
        date2: toDate('2020-01-01T05:00:00.000Z'),
        expected: true
      },
      {
        comparator: 'isAfter',
        date1: toDate('2020-01-01T05:00:00.000Z'),
        date2: toDate('2020-01-01T04:00:00.000Z'),
        expected: true
      },
      {
        comparator: 'isAfter',
        date1: toDate('2020-01-01T04:00:00.000Z'),
        date2: toDate('2020-01-01T05:00:00.000Z'),
        expected: false
      },
      {
        comparator: 'isAfterOrEqual',
        date1: toDate('2020-01-01T05:00:00.000Z'),
        date2: toDate('2020-01-01T04:00:00.000Z'),
        expected: true
      },
      {
        comparator: 'isAfterOrEqual',
        date1: toDate('2020-01-01T04:00:00.000Z'),
        date2: toDate('2020-01-01T05:00:00.000Z'),
        expected: false
      }
    ];

    useCases.forEach(({ comparator, date1, date2, expected }) => {
      expect(comparators[comparator](date1, date2)).toBe(expected);
    });
  });

  it('isBefore', () => {
    const useCases: UseCases<'isBefore' | 'isBeforeOrEqual'> = [
      {
        comparator: 'isBefore',
        date1: toDate('2020-01-01T05:00:00.000Z'),
        date2: toDate('2020-01-01T05:00:00.000Z'),
        expected: false
      },
      {
        comparator: 'isBeforeOrEqual',
        date1: toDate('2020-01-01T05:00:00.000Z'),
        date2: toDate('2020-01-01T05:00:00.000Z'),
        expected: true
      },
      {
        comparator: 'isBefore',
        date1: toDate('2020-01-01T05:00:00.000Z'),
        date2: toDate('2020-01-01T04:00:00.000Z'),
        expected: false
      },
      {
        comparator: 'isBefore',
        date1: toDate('2020-01-01T04:00:00.000Z'),
        date2: toDate('2020-01-01T05:00:00.000Z'),
        expected: true
      },
      {
        comparator: 'isBeforeOrEqual',
        date1: toDate('2020-01-01T05:00:00.000Z'),
        date2: toDate('2020-01-01T04:00:00.000Z'),
        expected: false
      },
      {
        comparator: 'isBeforeOrEqual',
        date1: toDate('2020-01-01T04:00:00.000Z'),
        date2: toDate('2020-01-01T05:00:00.000Z'),
        expected: true
      }
    ];

    useCases.forEach(({ comparator, date1, date2, expected }) => {
      expect(comparators[comparator](date1, date2)).toBe(expected);
    });
  });

  it('isBetween', () => {
    const useCases: UseCases<'isBetween' | 'isBetweenOrEqual'> = [
      {
        comparator: 'isBetween',
        date1: toDate('2020-01-01T05:00:00.000Z'),
        date2: toDate('2020-01-01T05:00:00.000Z'),
        date3: toDate('2020-01-01T06:00:00.000Z'),
        expected: false
      },
      {
        comparator: 'isBetween',
        date1: toDate('2020-01-01T06:00:00.000Z'),
        date2: toDate('2020-01-01T05:00:00.000Z'),
        date3: toDate('2020-01-01T06:00:00.000Z'),
        expected: false
      },
      {
        comparator: 'isBetweenOrEqual',
        date1: toDate('2020-01-01T05:00:00.000Z'),
        date2: toDate('2020-01-01T05:00:00.000Z'),
        date3: toDate('2020-01-01T06:00:00.000Z'),
        expected: true
      },
      {
        comparator: 'isBetweenOrEqual',
        date1: toDate('2020-01-01T06:00:00.000Z'),
        date2: toDate('2020-01-01T05:00:00.000Z'),
        date3: toDate('2020-01-01T06:00:00.000Z'),
        expected: true
      },
      {
        comparator: 'isBetween',
        date1: toDate('2020-01-01T05:00:00.000Z'),
        date2: toDate('2020-01-01T03:00:00.000Z'),
        date3: toDate('2020-01-01T04:00:00.000Z'),
        expected: false
      },
      {
        comparator: 'isBetween',
        date1: toDate('2020-01-01T04:00:00.000Z'),
        date2: toDate('2020-01-01T03:00:00.000Z'),
        date3: toDate('2020-01-01T05:00:00.000Z'),
        expected: true
      },
      {
        comparator: 'isBetweenOrEqual',
        date1: toDate('2020-01-01T05:00:00.000Z'),
        date2: toDate('2020-01-01T03:00:00.000Z'),
        date3: toDate('2020-01-01T04:00:00.000Z'),
        expected: false
      },
      {
        comparator: 'isBetweenOrEqual',
        date1: toDate('2020-01-01T04:00:00.000Z'),
        date2: toDate('2020-01-01T03:00:00.000Z'),
        date3: toDate('2020-01-01T05:00:00.000Z'),
        expected: true
      }
    ];

    useCases.forEach(({ comparator, date1, date2, date3, expected }) => {
      expect(comparators[comparator](date1, date2, date3 as Date)).toBe(
        expected
      );
    });
  });
});
