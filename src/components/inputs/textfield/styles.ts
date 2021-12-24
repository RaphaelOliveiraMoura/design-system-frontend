import styled, { css } from 'styled-components';
import { sg } from 'styles/styleGuide';

import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${sg.spacing.xxlarge};
  font-size: ${sg.fontSize.medium};
`;

export const LabelText = styled.p`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-100%);
  padding-bottom: 4px;
`;

type InputLabelProps = {
  isFocused: boolean;
  hasError: boolean;
};

export const InputLabel = styled.label<InputLabelProps>`
  position: relative;
  display: block;
  background: ${sg.colors.white};
  border: 1px solid ${sg.colors.grey400};
  border-radius: ${sg.spacing.small};
  padding-right: 20px;
  transition: all 0.3s;

  &:hover {
    border-color: ${sg.colors.grey};
  }

  ${({ isFocused }) =>
    isFocused &&
    css`
      box-shadow: 1px 1px 3px ${sg.colors.grey300};
    `}

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${sg.colors.red};
    `}
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  height: 34px;
  padding: 8px 8px;
`;

export const ValidIcon = styled(AiOutlineCheckCircle)`
  color: ${sg.colors.green};
`;

export const InvalidIcon = styled(AiOutlineCloseCircle)`
  color: ${sg.colors.red};
`;

export const ErrorText = styled.span`
  display: flex;
  margin-top: 4px;
  color: ${sg.colors.red};
  font-size: ${sg.fontSize.small};
`;

export const InputRightSection = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  margin-left: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
