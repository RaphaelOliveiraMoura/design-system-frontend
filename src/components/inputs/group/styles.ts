import styled, { css } from 'styled-components';

import { media, Breakpoints } from 'styles/breakpoints';
import { sg } from 'styles/styleGuide';

type WrapperProps = {
  totalInputs: number;
  columns: {
    [key in number | Breakpoints | 'default']?: number | string;
  };
};

export const Wrapper = styled.div<WrapperProps>`
  display: grid;
  gap: ${sg.spacing.medium};
  margin: ${sg.spacing.medium};

  ${({ totalInputs, columns }) => {
    const gridTemplateColumns = columns.default
      ? columns.default
      : `repeat(${totalInputs}, 1fr)`;

    return css`
      grid-template-columns: ${gridTemplateColumns};
    `;
  }}

  ${({ columns }) =>
    Object.entries(columns).map(([size, columnsTemplate]) => {
      const gridTemplateColumns =
        typeof columnsTemplate === 'number'
          ? `repeat(${columnsTemplate}, 1fr)`
          : columnsTemplate;

      return css`
        ${media.lessThan(size as Breakpoints)} {
          grid-template-columns: ${gridTemplateColumns};
        }
      `;
    })}
`;
