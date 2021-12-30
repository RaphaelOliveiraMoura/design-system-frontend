import React from 'react';

import { Breakpoints } from 'styles/breakpoints';

import * as S from './styles';

export type InputGroupProps = {
  columns?: {
    // string -> must receive a grid template columns pattern like "2fr 1fr 3fr"
    [key in number | Breakpoints | 'default']?: number | string;
  };
};

export const InputGroup: React.FC<InputGroupProps> = ({
  children,
  columns = {}
}) => {
  const totalInputs = Array.isArray(children) ? children.length : 1;

  return (
    <S.Wrapper totalInputs={totalInputs} columns={columns}>
      {children}
    </S.Wrapper>
  );
};
