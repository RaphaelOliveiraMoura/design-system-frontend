import React, { createRef, useMemo, useRef, useState } from 'react';

import { useOnClickOutside } from 'hooks/useOnClickOutside';

import { requiredArrayValidator } from 'services/validation/validators';
import { TextField, TextFieldProps } from '../textfield';

import * as S from './styles';

import { Option } from '..';
import { useControlKeys } from '../select/hooks';

export type MultSelectInputProps = Omit<
  TextFieldProps,
  'value' | 'onChange'
> & {
  options: Option[];
  value: Option[];
  onChange: (value: Option[]) => void;
};

export const MultSelectInput: React.FC<MultSelectInputProps> = ({
  options,
  onChange,
  value,
  validator = requiredArrayValidator,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('');
  const [dropdownIsOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const matchOption = (option: Option) => {
    const findedOption = options.find(o => o.label === inputValue);
    if (findedOption) return true;
    return option.label.toLowerCase().includes(inputValue.toLowerCase());
  };

  const availableOptions = useMemo(
    () =>
      options
        .filter(option => !!option.label)
        .filter(matchOption)
        .filter(option => !value.find(o => o.value === option.value)),
    [options, matchOption]
  );

  const optionsRef = useMemo<React.RefObject<HTMLButtonElement>[]>(
    () => availableOptions.map(() => createRef()),
    [availableOptions]
  );

  const handleSelect = (option: Option) => {
    onChange([...value, option]);
    setDropdownOpen(false);
    setInputValue('');
  };

  const handleRemove = (index: number) => {
    const draft = [...value];
    draft.splice(index, 1);
    onChange([...draft]);
  };

  const handleChangeText = (text: string) => {
    setInputValue(text);
  };

  useOnClickOutside(dropdownRef, () => {
    setDropdownOpen(false);
    setInputValue('');
  });

  useControlKeys(optionsRef);

  const inputChildren = (
    <S.SelectedOptionsContainer>
      {value.map((option, index) => (
        <S.SelectedOption>
          {option.label}
          <S.RemoveOptionIcon onClick={() => handleRemove(index)} />
        </S.SelectedOption>
      ))}
    </S.SelectedOptionsContainer>
  );

  return (
    <S.Wrapper ref={dropdownRef}>
      <TextField
        {...props}
        value={inputValue}
        onChange={handleChangeText}
        icon={<S.DropdownIcon onClick={() => setDropdownOpen(true)} />}
        inputProps={{ onFocus: () => setDropdownOpen(true) }}
        inputChildren={inputChildren}
        validator={() => validator(value)}
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
