import React, { useState } from 'react';

import { TextField, TextFieldProps } from '../textfield';

import * as S from './styles';

export const PasswordInput: React.FC<TextFieldProps> = ({
  inputProps,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      {...props}
      inputProps={{ ...inputProps, type: showPassword ? 'text' : 'password' }}
      icon={
        <S.IconButton onClick={() => setShowPassword(state => !state)}>
          {showPassword ? <S.Visibility /> : <S.VisibilityOff />}
        </S.IconButton>
      }
    />
  );
};
