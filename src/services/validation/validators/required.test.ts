import { requiredValidator } from './required';

describe('RequiredValidator', () => {
  type ArrayTestCases = [string, unknown, string | null][];
  const testCases: ArrayTestCases = [
    ['null', null, 'Campo obrigatório'],
    ['empty string', '', 'Campo obrigatório'],
    ['undefined', undefined, 'Campo obrigatório'],
    ['false', false, 'Campo obrigatório'],
    ['string with space', ' ', 'Campo obrigatório'],
    ['filled string', 'filled', null],
    ['array with numbers', [1, 2, 3, 4, 5, 6], null],
    ['array with strings', ['1', '2', '3', '4', '5', '6'], null],
    ['empty array', [], 'Campo obrigatório'],
    ['array with only space', [], 'Campo obrigatório']
  ];

  testCases.forEach(([title, value, expectedError]) =>
    it(`should test required fields : case(${title})`, () => {
      const error = requiredValidator(value);
      expect(error).toStrictEqual(expectedError);
    })
  );
});
