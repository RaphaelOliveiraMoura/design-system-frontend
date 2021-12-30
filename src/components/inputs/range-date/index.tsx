import React, { useRef, useState, useEffect, useMemo } from 'react';

import { Calendar } from 'components';
import { useOnClickOutside } from 'hooks/useOnClickOutside';

import { formatters } from 'services/date';
import { dateIntervalMask } from 'services/mask';

import { TextField, TextFieldProps } from '../textfield';

import * as S from './styles';

export const RangeDateInput: React.FC<TextFieldProps> = ({
  mask = dateIntervalMask,
  ...props
}) => {
  const calendarRef = useRef<HTMLDivElement>(null);

  const [date, setDate] = useState(props.value || '');
  const [calendarIsOpen, setCalendarOpen] = useState(false);
  const [calendarOnFirstDate, setCalendarOnFirstDate] = useState(true);

  const dateMask = 'dd/mm/yyyy';
  const rangeDateMask = `${dateMask} - ${dateMask}`;

  const openCalendar = () => {
    setCalendarOpen(true);
    setCalendarOnFirstDate(true);
  };

  const selectedDays = useMemo(() => {
    if (!props.value) return undefined;
    if (props.value.length < dateMask.length) return undefined;

    if (props.value.length === rangeDateMask.length)
      return formatters.parseRangeDate(props.value);

    const firstDate = props.value.slice(0, dateMask.length);
    return formatters.parseDate(firstDate);
  }, [props.value]);

  useEffect(() => {
    props.onChange(date);
  }, [date]);

  const onSelectDate = (date: Date | null) => {
    if (!date) return;

    const formatedDate = formatters.date(date);

    if (calendarOnFirstDate) {
      setDate(formatedDate);
      setCalendarOnFirstDate(false);
    } else {
      const initialDate = props.value?.slice(0, dateMask.length);
      const rangeWithFinalDate = mask(`${initialDate} - ${formatedDate}`);
      setDate(rangeWithFinalDate);
      setCalendarOpen(false);
    }
  };

  useOnClickOutside(calendarRef, () => setCalendarOpen(false));

  return (
    <S.Wrapper>
      <TextField
        {...props}
        mask={mask}
        value={date}
        onChange={setDate}
        icon={<S.CalendarIcon onClick={() => openCalendar()} />}
        inputProps={{ readOnly: true, onFocus: () => openCalendar() }}
      >
        {calendarIsOpen && (
          <S.CalendarWrapper>
            <Calendar
              onSelectDate={onSelectDate}
              calendarRef={calendarRef}
              selectedDays={selectedDays}
            />
          </S.CalendarWrapper>
        )}
      </TextField>
    </S.Wrapper>
  );
};
