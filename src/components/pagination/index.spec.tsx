import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Pagination, PaginationProps } from '.';

describe('<Pagination />', () => {
  const getButtons = () => screen.getAllByRole('button');
  const getSeparator = () => screen.queryByText('...');

  const BaseComponent: React.FC<Partial<PaginationProps>> = props => (
    <Pagination
      currentPage={1}
      totalItems={10}
      itemsPerPage={5}
      onChangePage={() => null}
      {...props}
    />
  );

  it('should render without crashing', () => {
    const { container } = render(<BaseComponent />);

    expect(container).toBeInTheDocument();
    expect(getButtons()).toHaveLength(2);
    expect(getSeparator()).not.toBeInTheDocument();
  });

  it('should render separator when many pages is available', () => {
    render(<BaseComponent totalItems={100} itemsPerPage={2} />);

    expect(getButtons()).toHaveLength(5);
    expect(getSeparator()).toBeInTheDocument();
  });

  it('should call onChangePage when change', () => {
    const onChangePageMock = jest.fn();
    render(<BaseComponent onChangePage={onChangePageMock} />);

    const secondPage = getButtons()[1];
    fireEvent.click(secondPage);

    expect(onChangePageMock).toHaveBeenCalledWith(2);
  });
});
