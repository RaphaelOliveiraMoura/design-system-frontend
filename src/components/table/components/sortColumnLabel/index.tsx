import React from 'react';

import * as S from './styles';

export type SortColumnLabelProps = {
  label: string;
  field: string;
  isSorting: boolean;
  ascSorting: boolean;
  onSort: (params: { field: string; asc: boolean }) => void;
};

export const SortColumnLabel: React.FC<SortColumnLabelProps> = ({
  label,
  field,
  isSorting,
  ascSorting,
  onSort
}) => (
  <S.Wrapper>
    <strong>{label}</strong>

    {!isSorting && (
      <S.IconButton onClick={() => onSort({ field, asc: false })}>
        <S.HoverDescSortIcon />
      </S.IconButton>
    )}

    {isSorting && (
      <S.IconButton
        onClick={() =>
          onSort({
            field: !ascSorting ? field : '',
            asc: !ascSorting
          })
        }
      >
        <S.SortIcon className={ascSorting ? 'asc' : 'desc'} />
      </S.IconButton>
    )}
  </S.Wrapper>
);
