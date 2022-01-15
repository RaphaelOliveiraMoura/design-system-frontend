import { Column, RowData } from 'components/table';

type DataExample = {
  name: string;
};

export const useTablePage = () => {
  const columns: Column<DataExample>[] = [
    { label: 'name', path: 'name', content: row => row.name }
  ];

  const data: DataExample[] = [
    { name: 'Raphael' },
    { name: 'Joaozin' },
    { name: 'Josefino' }
  ];

  const rows: RowData<DataExample>[] = data.map(row => ({ rowData: row }));

  return {
    rows,
    columns
  };
};
