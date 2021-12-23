import React, { useRef, useState, useEffect, useMemo } from 'react';

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

  const selectedDay = useMemo(() => {
    const dateMask = 'dd/mm/yyyy';
    if (!props.value) return undefined;
    if (props.value.length < dateMask.length) return undefined;
    return formatters.parseDate(props.value);
  }, [props.value]);

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
        icon={<S.CalendarIcon onClick={() => setCalendarOpen(true)} />}
        inputProps={{ readOnly: true, onFocus: () => setCalendarOpen(true) }}
      >
        {calendarIsOpen && (
          <S.CalendarWrapper>
            <Calendar
              onSelectDate={onSelectDate}
              calendarRef={calendarRef}
              selectedDays={selectedDay}
            />
          </S.CalendarWrapper>
        )}
      </TextField>
    </S.Wrapper>
  );
};
