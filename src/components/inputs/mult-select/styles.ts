import styled from 'styled-components';

import { AiOutlineClose } from 'react-icons/ai';

export * from '../select/styles';

export const SelectedOptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-right: 36px;
`;

export const SelectedOption = styled.div`
  display: flex;
  align-items: center;
  margin: 4px;
  border: 1px solid #ddd;
  padding: 4px;
  border-radius: 4px;
  font-size: 12px;
`;

export const RemoveOptionIcon = styled(AiOutlineClose)`
  margin-left: 4px;
  cursor: pointer;
`;
