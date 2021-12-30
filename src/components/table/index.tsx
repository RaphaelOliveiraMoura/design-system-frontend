import React from 'react';

import { getValueFromKeyPath } from 'services/objects';

import * as S from './styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Column<T = any> = {
  label: string | (() => React.ReactElement);
  path: string;
  content?: (data: T) => React.ReactElement | string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RowData<T = any> = {
  rowData: T;
  params?: {
    rowClassName?: string;
    onClick?: (data: T) => void;
  };
};

export type TableProps = {
  columns: Column[];
  rows: RowData[];
};

export const Table: React.FC<TableProps> = ({ columns, rows }) => (
  <S.Wrapper items={columns.length}>
    <thead className='table-header'>
      <tr className='table-header-row'>
        {columns.map((column, columnIndex) => {
          const headerKey = `header-${columnIndex}-${column.path}`;
          return (
            <th className='table-header-column' key={headerKey}>
              {typeof column.label === 'function'
                ? column.label()
                : column.label}
            </th>
          );
        })}
      </tr>
    </thead>
    <tbody className='table-body'>
      {rows.map((row, rowIndex) => {
        const rowKey = `row-${rowIndex}`;
        const { rowData, params } = row;
        const { rowClassName, onClick = () => null } = params || {};

        const customRowClassName = rowClassName || '';
        const rowClasses = `table-body-row ${customRowClassName}`;

        return (
          <tr
            className={rowClasses}
            key={rowKey}
            onClick={() => onClick(rowData)}
          >
            {columns.map((column, columnIndex) => {
              const columnkey = `column-${rowIndex}-${columnIndex}`;
              const rowValue = getValueFromKeyPath(column.path, rowData);

              const renderData = column.content
                ? column.content(rowData)
                : rowValue;

              return (
                <td className='table-body-column' key={columnkey}>
                  {renderData}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  </S.Wrapper>
);
