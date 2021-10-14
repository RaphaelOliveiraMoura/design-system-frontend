import { ValidationResult, ValidationSchema, Validator } from '..';

async function recursive(
  validateSchema: ValidationSchema,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  objectToValidate: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mutableErrors: any,
  mutableIsValid: { valid: boolean },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mutableCustomParams: any
) {
  const validateEntries = Object.entries(validateSchema);

  for (const [key, value] of validateEntries) {
    const isValidator = typeof value === 'function';

    if (isValidator) {
      const validator: Validator = value as Validator;

      const validatorError = await validator(
        objectToValidate[key],
        mutableCustomParams
      );

      if (validatorError) {
        // eslint-disable-next-line no-param-reassign
        mutableIsValid.valid = false;
      }

      // eslint-disable-next-line no-param-reassign
      mutableErrors[key] = validatorError;
    } else {
      // eslint-disable-next-line no-param-reassign
      if (!mutableErrors[key]) mutableErrors[key] = {};
      await recursive(
        value as ValidationSchema,
        objectToValidate[key] || {},
        mutableErrors[key],
        mutableIsValid,
        mutableCustomParams
      );
    }
  }
}

type SchemaValidatorDefaultParams = {
  context: unknown;
};

export function schemaValidator<T = SchemaValidatorDefaultParams>(
  validateSchema: ValidationSchema
) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return async (
    objectToValidate: unknown,
    customParams: T
  ): Promise<ValidationResult> => {
    const mutableErrors = {};
    const mutableIsValid = { valid: true };
    const mutableCustomParams = { ...customParams };

    await recursive(
      validateSchema,
      objectToValidate,
      mutableErrors,
      mutableIsValid,
      mutableCustomParams
    );

    return {
      errors: mutableErrors,
      isValid: mutableIsValid.valid
    };
  };
}
