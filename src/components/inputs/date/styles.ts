import styled from 'styled-components';
import { AiOutlineCalendar } from 'react-icons/ai';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  label {
    padding-right: 46px;
  }
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  right: 0;
  z-index: 100;
`;

export const CalendarIcon = styled(AiOutlineCalendar)`
  cursor: pointer;
`;
