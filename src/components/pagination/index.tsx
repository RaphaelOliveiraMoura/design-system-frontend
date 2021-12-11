import React from 'react';

export type PaginationPros = {
  totalItems: number;
  itemsPerPage: number;
};

export const Pagination: React.FC<PaginationPros> = ({
  totalItems,
  itemsPerPage
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      {new Array(totalPages).fill(0).map((_, index) => {
        const page = index + 1;
        return (
          <button key={page} type='button'>
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};
