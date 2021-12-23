import styled from 'styled-components';

export const Wrapper = styled.div``;

type ToggleContainerProps = {
  checked: boolean;
};

export const ToggleContainer = styled.div<ToggleContainerProps>`
  width: 46px;
  height: 24px;
  border-radius: 16px;
  border: 1px solid #ddd;
  position: relative;
  cursor: pointer;
  background: ${props => (props.checked ? '#888' : '#07bc0c')};

  &:before {
    position: absolute;
    content: '';
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 4px;
    left: ${props => (props.checked ? '0' : 'unset')};
    right: ${props => (props.checked ? 'unset' : '0')};
  }
`;
