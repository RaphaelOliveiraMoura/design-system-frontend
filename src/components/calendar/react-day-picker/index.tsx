import React from 'react';

import DayPicker from 'react-day-picker';
import { CalendarProps } from '../types';

import { ptBrLocale } from './pt-br';

import * as S from './styles';

export const Calendar: React.FC<CalendarProps> = ({
  calendarRef,
  onSelectDate,
  selectedDays
}) => {
  const getModifiers = () => {
    if (!Array.isArray(selectedDays)) return undefined;
    if (selectedDays.length !== 2) return undefined;
    return { start: selectedDays[0], end: selectedDays[1] };
  };

  const getInitialMonth = () => {
    if (!selectedDays) return undefined;
    if (!Array.isArray(selectedDays)) return selectedDays;
    if (!selectedDays[0]) return undefined;
    return selectedDays[0];
  };

  const getSelectedDays = () => {
    if (!Array.isArray(selectedDays)) return selectedDays;
    if (selectedDays.length !== 2) return selectedDays;
    return [selectedDays[0], { from: selectedDays[0], to: selectedDays[1] }];
  };

  return (
    <S.Wrapper ref={calendarRef}>
      <DayPicker
        onDayClick={onSelectDate}
        months={ptBrLocale.MONTHS}
        weekdaysLong={ptBrLocale.WEEKDAYS_LONG}
        weekdaysShort={ptBrLocale.WEEKDAYS_SHORT}
        selectedDays={getSelectedDays()}
        month={getInitialMonth()}
        modifiers={getModifiers()}
      />
      <S.ReactDayPickerStyles />
    </S.Wrapper>
  );
};
