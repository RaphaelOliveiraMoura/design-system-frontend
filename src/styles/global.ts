import { createGlobalStyle } from 'styled-components';

import { sg } from './styleGuide';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: ${sg.fontFamily.primary};
    font-size: ${sg.fontSize.default};
  }

  body {
    line-height: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    height: 100%;
    min-height: 100vh;
  }

  ol,
  ul {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *::-webkit-scrollbar {
    width: 10px;
  }
  
  *::-webkit-scrollbar-track {
    background: ${sg.colors.white};
    border-radius: 10px;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: ${sg.colors.grey500};
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
`;
