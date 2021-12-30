import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    max-width: 600px;
    border: 1px solid #bbb;
    border-radius: 8px;
    padding: 26px;
  }

  form > div {
    margin-bottom: 16px;
  }
`;
