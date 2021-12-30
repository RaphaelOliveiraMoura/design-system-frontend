import React from 'react';

import { Table, Column, RowData } from 'components/table';
import * as S from './styles';

type DataExample = {
  name: string;
};

export const TablePage: React.FC = () => {
  const columns: Column<DataExample>[] = [
    { label: 'name', path: 'name', content: row => row.name }
  ];

  const data: DataExample[] = [
    { name: 'Raphael' },
    { name: 'Joaozin' },
    { name: 'Josefino' }
  ];

  const rows: RowData<DataExample>[] = data.map(row => ({ rowData: row }));

  return (
    <S.Container>
      <Table columns={columns} rows={rows} />
    </S.Container>
  );
};
