import styled from 'styled-components';

import { sg } from 'styles/styleGuide';

import 'react-day-picker/lib/style.css';

export const Wrapper = styled.div`
  background: ${sg.colors.white};
  border-radius: ${sg.spacing.medium};
  box-shadow: 3px 3px 14px 4px #ededed;
`;
