import styled from 'styled-components';

import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

export const IconButton = styled.button`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 100%;
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    box-shadow: 3px 3px 14px 4px #ededed;
    scale: 1.5;
    background: #eee;
  }
`;

export const Visibility = styled(MdVisibility)``;

export const VisibilityOff = styled(MdVisibilityOff)``;
