import React from 'react';

import * as S from './styles';

export type ToggleInputProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export const ToggleInput: React.FC<ToggleInputProps> = ({
  label,
  checked,
  onChange
}) => (
  <S.Wrapper>
    <label htmlFor={label}>{label}</label>
    <S.ToggleContainer
      role='checkbox'
      id={label}
      checked={checked}
      onClick={() => onChange(!checked)}
    />
  </S.Wrapper>
);
