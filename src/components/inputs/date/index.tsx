import React, { useRef, useState, useEffect } from 'react';

import { Calendar } from 'components';
import { useOnClickOutside } from 'hooks/useOnClickOutside';

import { formatters } from 'services/date';
import { dateMask } from 'services/mask';

import { TextField, TextFieldProps } from '../textfield';

import * as S from './styles';

export const DateInput: React.FC<TextFieldProps> = ({
  mask = dateMask,
  ...props
}) => {
  const calendarRef = useRef<HTMLDivElement>(null);

  const [date, setDate] = useState(props.value || '');
  const [calendarIsOpen, setCalendarOpen] = useState(false);

  useEffect(() => {
    props.onChange(date);
  }, [date]);

  const onSelectDate = (date: Date | null) => {
    if (!date) return;
    setDate(formatters.date(date));
    setCalendarOpen(false);
  };

  useOnClickOutside(calendarRef, () => setCalendarOpen(false));

  return (
    <S.Wrapper>
      <TextField
        {...props}
        mask={mask}
        value={date}
        onChange={setDate}
        icon={
          <button type='button' onClick={() => setCalendarOpen(true)}>
            oi
          </button>
        }
      />

      {calendarIsOpen && (
        <S.CalendarWrapper>
          <Calendar onSelectDate={onSelectDate} calendarRef={calendarRef} />
        </S.CalendarWrapper>
      )}
    </S.Wrapper>
  );
};
