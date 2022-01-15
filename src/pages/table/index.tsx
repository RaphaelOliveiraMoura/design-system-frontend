import React from 'react';

import { Table } from 'components/table';
import * as S from './styles';
import { useTablePage } from './hook';

export const TablePage: React.FC = () => {
  const { rows, columns } = useTablePage();

  return (
    <S.Container>
      <Table columns={columns} rows={rows} />
    </S.Container>
  );
};
