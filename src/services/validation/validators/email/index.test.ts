import { emailValidator } from '.';

describe('EmailValidator', () => {
  type ArrayTestCases = [string, string, string | null][];
  const testCases: ArrayTestCases = [
    ['invalid pattern', 'invalid-pattern', 'Email inválido'],
    ['without @', 'email.com.br', 'Email inválido'],
    ['without .', 'email@com', 'Email inválido'],
    ['valid email', 'valid-email@gmail.com', null],
    ['empty string', '', null]
  ];

  testCases.forEach(([title, value, expectedError]) =>
    it(`should test valid and invalid emails : case(${title})`, () => {
      const error = emailValidator(value);
      expect(error).toStrictEqual(expectedError);
    })
  );
});
