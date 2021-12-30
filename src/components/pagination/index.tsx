import React from 'react';

import * as S from './styles';

export type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onChangePage,
  totalItems,
  itemsPerPage
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxShowedPagesPerSide = 2;
  const separator = '...';

  const mappedPages = new Array(totalPages).fill(0).map((_, index, array) => {
    const pageIndex = index + 1;

    if (index === 0 || index === array.length - 1) return pageIndex;

    const currentPageOffset = Math.abs(currentPage - pageIndex);
    if (currentPageOffset > maxShowedPagesPerSide) return separator;

    return pageIndex;
  });

  const pages = mappedPages.filter(
    (page, index, array) => page !== array[index + 1]
  );

  return (
    <S.Container>
      {pages.map((page, index) => {
        const isSeparator = page === separator;

        if (isSeparator) {
          const separatorKey = `separator-${index}`;
          return <span key={separatorKey}>{separator}</span>;
        }

        return (
          <button
            key={page}
            type='button'
            onClick={() => onChangePage(page as number)}
            aria-current={currentPage === page}
          >
            {page}
          </button>
        );
      })}
    </S.Container>
  );
};
