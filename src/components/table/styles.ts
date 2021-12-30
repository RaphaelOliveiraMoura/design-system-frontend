import styled from 'styled-components';

import { sg } from 'styles/styleGuide';

export const Wrapper = styled.table<{ items: number }>`
  width: 100%;
  background: ${sg.colors.white};
  cursor: default;

  th {
    padding: ${sg.spacing.small};
    border-bottom: 1px solid ${sg.colors.grey300};
    border-top: 1px solid ${sg.colors.grey300};
    text-align: left;
  }

  td {
    padding: ${sg.spacing.small};
    text-align: left;
  }

  .table-body-row:hover {
    background: ${sg.colors.lightBlue100}${sg.opacity[30]};
  }

  .table-body-row.selected {
    background: ${sg.colors.lightBlue100}${sg.opacity[50]} !important;
    transition: all 0.4s;
  }
`;
