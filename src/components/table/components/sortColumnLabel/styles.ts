import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

import styled from 'styled-components';

export const HoverDescSortIcon = styled(AiOutlineArrowDown)`
  cursor: pointer;
  visibility: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:hover ${HoverDescSortIcon} {
    visibility: visible;
  }
`;

export const SortIcon = styled(AiOutlineArrowUp)`
  cursor: pointer;
  transform: rotate(0);
  transition: all 0.4s !important;

  &.desc {
    transform: rotate(180deg);
  }
`;

export const IconButton = styled.button``;
