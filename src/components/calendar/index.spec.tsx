import { render } from '@testing-library/react';
import React, { createRef } from 'react';

import { Calendar, CalendarProps } from '.';

describe('<Calendar />', () => {
  const BaseComponent: React.FC<Partial<CalendarProps>> = props => (
    <Calendar calendarRef={createRef()} onSelectDate={() => null} {...props} />
  );

  it('should render without crashing', () => {
    const { container } = render(<BaseComponent />);

    expect(container).toBeInTheDocument();
  });
});
