import styled from 'styled-components';

import { MdArrowDropDown } from 'react-icons/md';

export const Wrapper = styled.div``;

export const DropdownIcon = styled(MdArrowDropDown)`
  cursor: pointer;
  width: 18px;
  height: 18px;
`;

export const Dropdown = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 3px 3px 14px 4px #ededed;
`;

export const SelectItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fefefe;
  padding: 6px 0;
  cursor: pointer;
  outline: none;

  &:hover {
    background: #ededed;
  }

  &:focus {
    font-weight: bold;
  }
`;
