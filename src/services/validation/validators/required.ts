import { Validator } from '..';

export const RequiredErrors = {
  REQUIRED: 'Campo obrigatório'
};

export const requiredValidator: Validator = (value?: unknown) => {
  if (!value) {
    return RequiredErrors.REQUIRED;
  }

  if (typeof value === 'string' && !value.trim()) {
    return RequiredErrors.REQUIRED;
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return RequiredErrors.REQUIRED;
    }

    // eslint-disable-next-line consistent-return
    value.forEach(row => {
      if (typeof row === 'string' && !row.trim()) {
        return RequiredErrors.REQUIRED;
      }
    });
  }

  return null;
};
