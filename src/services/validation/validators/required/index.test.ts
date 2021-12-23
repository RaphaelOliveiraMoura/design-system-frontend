import { requiredValidator } from '.';

describe('RequiredValidator', () => {
  type ArrayTestCases = [string, unknown, string | null][];
  const testCases: ArrayTestCases = [
    ['null', null, 'Campo obrigatório'],
    ['empty string', '', 'Campo obrigatório'],
    ['undefined', undefined, 'Campo obrigatório'],
    ['false', false, 'Campo obrigatório'],
    ['string with space', ' ', 'Campo obrigatório'],
    ['filled string', 'filled', null],
    ['empty array', [], null]
  ];

  testCases.forEach(([title, value, expectedError]) =>
    it(`should test required fields : case(${title})`, () => {
      const error = requiredValidator(value);
      expect(error).toStrictEqual(expectedError);
    })
  );
});
