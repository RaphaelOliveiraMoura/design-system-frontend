import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Masker } from 'services/mask/types';

import { Validator } from 'services/validation';
import { requiredValidator } from 'services/validation/validators';

import * as S from './styles';

export type TextFieldProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  validator?: Validator;
  mask?: Masker;
  icon?: JSX.Element;
  inputProps?: Partial<React.InputHTMLAttributes<HTMLInputElement>>;
  inputChildren?: JSX.Element;
};

export const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  validator = requiredValidator,
  mask = (valueToFormat: string) => valueToFormat,
  icon = <></>,
  children = <></>,
  inputChildren = <></>,
  inputProps = {}
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [wasTouched, setTouched] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const checkForErrors = useCallback(
    async (inputValue = '') => {
      const validationError = await validator(inputValue);
      setError(validationError);
    },
    [validator]
  );

  useEffect(() => {
    if (!wasTouched) return;
    checkForErrors(value);
  }, [value, validator]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const maskedValue = mask(inputValue);

    onChange(maskedValue);
    if (inputProps.onChange) inputProps.onChange(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(true);
    if (inputProps.onFocus) inputProps.onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const inputValue = e.target.value;
    checkForErrors(inputValue);
    setIsFocused(false);
    setTouched(true);

    if (inputProps.onBlur) inputProps.onBlur(e);
  };

  return (
    <S.Wrapper>
      <S.InputLabel isFocused={isFocused} hasError={wasTouched && !!error}>
        <S.LabelText>{label}</S.LabelText>

        <S.Input
          {...inputProps}
          ref={inputRef}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete='off'
          autoCorrect='off'
          spellCheck={false}
        />

        {inputChildren}

        <S.InputRightSection>
          {wasTouched && !error && (
            <S.ValidIcon aria-label='ícone de sucesso' size='20' />
          )}

          {wasTouched && error && (
            <S.InvalidIcon aria-label='ícone de erro' size='20' title={error} />
          )}

          {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
        </S.InputRightSection>
      </S.InputLabel>

      {children}

      {wasTouched && error && <S.ErrorText role='alert'>{error}</S.ErrorText>}
    </S.Wrapper>
  );
};
