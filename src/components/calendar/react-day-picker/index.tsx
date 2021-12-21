import React from 'react';

import DayPicker from 'react-day-picker';

import { ptBrLocale } from './pt-br';

import * as S from './styles';

export type CalendarProps = {
  calendarRef: React.RefObject<HTMLDivElement>;
  onSelectDate: (date: Date | null) => void;
};

export const Calendar: React.FC<CalendarProps> = ({
  calendarRef,
  onSelectDate
}) => (
  <S.Wrapper ref={calendarRef}>
    <DayPicker
      onDayClick={onSelectDate}
      months={ptBrLocale.MONTHS}
      weekdaysLong={ptBrLocale.WEEKDAYS_LONG}
      weekdaysShort={ptBrLocale.WEEKDAYS_SHORT}
    />
  </S.Wrapper>
);
