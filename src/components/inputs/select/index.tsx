import React, { createRef, useMemo, useRef, useState } from 'react';

import { useOnClickOutside } from 'hooks/useOnClickOutside';

import { KEYS, useOnKeyPressed } from 'hooks/useOnKeyPressed';
import { TextField, TextFieldProps } from '../textfield';

import * as S from './styles';

export type Option = {
  label: string;
  value: string;
};

export type SelectInputProps = Omit<TextFieldProps, 'value' | 'onChange'> & {
  options: Option[];
  value: Option;
  onChange: (value: Option) => void;
};

export const SelectInput: React.FC<SelectInputProps> = ({
  options,
  onChange,
  value,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value.label);
  const [dropdownIsOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const matchOption = (option: Option) => {
    const findedOption = options.find(o => o.label === inputValue);
    if (findedOption) return true;
    return option.label.toLowerCase().includes(inputValue.toLowerCase());
  };

  const removeEmptyOption = (option: Option) => !!option.label;

  const availableOptions = useMemo(
    () => options.filter(removeEmptyOption).filter(matchOption),
    [options]
  );

  const optionsRef = useMemo<React.RefObject<HTMLButtonElement>[]>(
    () => availableOptions.map(() => createRef()),
    [availableOptions]
  );

  const handleSelect = (option: Option) => {
    onChange(option);
    setInputValue(option.label);
    setDropdownOpen(false);
  };

  const handleChangeText = (text: string) => {
    setInputValue(text);
  };

  useOnClickOutside(dropdownRef, () => {
    setDropdownOpen(false);

    const findedOption = options.find(o => o.label === inputValue);

    if (inputValue !== value.label && findedOption) {
      setInputValue(findedOption.label);
      onChange(findedOption);
      return;
    }

    setInputValue(value.label);
  });

  const handleKeyPressed = (up: boolean) => {
    const activeOptionIndex = optionsRef.findIndex(
      el => el.current === document.activeElement
    );

    if (activeOptionIndex < 0) {
      const firstOption = optionsRef[0];
      const lastOption = optionsRef[optionsRef.length - 1];
      const navigateTo = up ? lastOption : firstOption;
      if (navigateTo) navigateTo.current?.focus();
      return;
    }

    const nextOption = up
      ? optionsRef[activeOptionIndex - 1]
      : optionsRef[activeOptionIndex + 1];
    if (nextOption) nextOption.current?.focus();
  };

  useOnKeyPressed(KEYS.ARROW_UP, () => handleKeyPressed(true));
  useOnKeyPressed(KEYS.ARROW_DOWN, () => handleKeyPressed(false));

  return (
    <S.Wrapper ref={dropdownRef}>
      <TextField
        {...props}
        value={inputValue}
        onChange={handleChangeText}
        icon={<S.DropdownIcon onClick={() => setDropdownOpen(true)} />}
        inputProps={{ onFocus: () => setDropdownOpen(true) }}
      >
        {dropdownIsOpen && (
          <S.Dropdown>
            {availableOptions.map((option, index) => (
              <S.SelectItem
                ref={optionsRef[index]}
                type='button'
                key={option.value}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </S.SelectItem>
            ))}
          </S.Dropdown>
        )}
      </TextField>
    </S.Wrapper>
  );
};
