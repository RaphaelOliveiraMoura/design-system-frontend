import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Masker } from 'services/mask/types';

import { Validator } from 'services/validation';
import { requiredValidator } from 'services/validation/validators';

import * as S from './styles';

export type TextFieldProps = {
  label: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  validator?: Validator;
  mask?: Masker;
  icon?: JSX.Element;
};

export const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  validator = requiredValidator,
  mask = (valueToFormat: string) => valueToFormat,
  icon = <></>,
  children = <></>
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [wasTouched, setTouched] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const controlledComponent = value !== undefined;

  const checkForErrors = useCallback(
    async (inputValue = '') => {
      const validationError = await validator(inputValue);
      setError(validationError);
    },
    [validator]
  );

  useEffect(() => {
    if (!controlledComponent) return;
    if (!wasTouched) return;

    checkForErrors(value);
  }, [value]);

  const handleChange = (inputValue: string) => {
    const maskedValue = mask(inputValue);

    if (controlledComponent) return onChange(maskedValue);

    if (inputRef.current) inputRef.current.value = maskedValue;

    checkForErrors(maskedValue);
    onChange(maskedValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (inputValue: string) => {
    checkForErrors(inputValue);
    setIsFocused(false);
    setTouched(true);
  };

  return (
    <S.Wrapper>
      <S.InputLabel isFocused={isFocused} hasError={wasTouched && !!error}>
        <S.LabelText>{label}</S.LabelText>

        <S.Input
          ref={inputRef}
          value={value}
          placeholder={placeholder}
          onChange={e => handleChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={e => handleBlur(e.target.value)}
          autoComplete='off'
          autoCorrect='off'
          spellCheck={false}
        />

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
