import { toDate, toIso } from '..';
import * as operators from '.';

type OperatorsFunctions = keyof typeof operators;

type UseCases = {
  operator: OperatorsFunctions;
  date: Date;
  number: number;
  expectedIso: string;
}[];

describe('operators', () => {
  describe('years', () => {
    const useCases: UseCases = [
      {
        operator: 'addYears',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: 1,
        expectedIso: '2021-01-01T05:00:00.000Z'
      },
      {
        operator: 'addYears',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: -1,
        expectedIso: '2019-01-01T04:00:00.000Z'
      },
      {
        operator: 'subYears',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: 1,
        expectedIso: '2019-01-01T04:00:00.000Z'
      },
      {
        operator: 'subYears',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: -1,
        expectedIso: '2021-01-01T05:00:00.000Z'
      }
    ];

    useCases.forEach(({ operator, date, number, expectedIso }, index) => {
      it(`testing index: ${index}`, () => {
        const result = operators[operator](date, number);
        expect(toIso(result)).toEqual(expectedIso);
      });
    });
  });

  describe('months', () => {
    const useCases: UseCases = [
      {
        operator: 'addMonths',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: 1,
        expectedIso: '2020-02-01T05:00:00.000Z'
      },
      {
        operator: 'addMonths',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: -1,
        expectedIso: '2019-12-01T05:00:00.000Z'
      },
      {
        operator: 'subMonths',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: 1,
        expectedIso: '2019-12-01T05:00:00.000Z'
      },
      {
        operator: 'subMonths',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: -1,
        expectedIso: '2020-02-01T05:00:00.000Z'
      }
    ];

    useCases.forEach(({ operator, date, number, expectedIso }, index) => {
      it(`testing index: ${index}`, () => {
        const result = operators[operator](date, number);
        expect(toIso(result)).toEqual(expectedIso);
      });
    });
  });

  describe('days', () => {
    const useCases: UseCases = [
      {
        operator: 'addDays',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: 1,
        expectedIso: '2020-01-02T05:00:00.000Z'
      },
      {
        operator: 'addDays',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: -1,
        expectedIso: '2019-12-31T05:00:00.000Z'
      },
      {
        operator: 'subDays',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: 1,
        expectedIso: '2019-12-31T05:00:00.000Z'
      },
      {
        operator: 'subDays',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: -1,
        expectedIso: '2020-01-02T05:00:00.000Z'
      }
    ];

    useCases.forEach(({ operator, date, number, expectedIso }, index) => {
      it(`testing index: ${index}`, () => {
        const result = operators[operator](date, number);
        expect(toIso(result)).toEqual(expectedIso);
      });
    });
  });

  describe('hours', () => {
    const useCases: UseCases = [
      {
        operator: 'addHours',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: 1,
        expectedIso: '2020-01-01T06:00:00.000Z'
      },
      {
        operator: 'addHours',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: -1,
        expectedIso: '2020-01-01T04:00:00.000Z'
      },
      {
        operator: 'subHours',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: 1,
        expectedIso: '2020-01-01T04:00:00.000Z'
      },
      {
        operator: 'subHours',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: -1,
        expectedIso: '2020-01-01T06:00:00.000Z'
      }
    ];

    useCases.forEach(({ operator, date, number, expectedIso }, index) => {
      it(`testing index: ${index}`, () => {
        const result = operators[operator](date, number);
        expect(toIso(result)).toEqual(expectedIso);
      });
    });
  });

  describe('minutes', () => {
    const useCases: UseCases = [
      {
        operator: 'addMinutes',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: 1,
        expectedIso: '2020-01-01T05:01:00.000Z'
      },
      {
        operator: 'addMinutes',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: -1,
        expectedIso: '2020-01-01T04:59:00.000Z'
      },
      {
        operator: 'subMinutes',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: 1,
        expectedIso: '2020-01-01T04:59:00.000Z'
      },
      {
        operator: 'subMinutes',
        date: toDate('2020-01-01T05:00:00.000Z'),
        number: -1,
        expectedIso: '2020-01-01T05:01:00.000Z'
      }
    ];

    useCases.forEach(({ operator, date, number, expectedIso }, index) => {
      it(`testing index: ${index}`, () => {
        const result = operators[operator](date, number);
        expect(toIso(result)).toEqual(expectedIso);
      });
    });
  });
});
