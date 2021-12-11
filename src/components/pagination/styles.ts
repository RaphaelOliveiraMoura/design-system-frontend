import styled from 'styled-components';

export const Container = styled.div`
  span {
    margin: 0 4px;
  }

  button {
    background: none;
    border: 1px solid #333;
    border-radius: 4px;
    padding: 4px 8px;
    margin: 4px;
    cursor: pointer;
    transition: all 0.5s;
    min-width: 36px;

    &[aria-current='true'] {
      background: #232;
      color: white;
    }
  }
`;
