import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }

  html, body, #main {
    height: 100%;
  }

  body {
    background-color: var(--background);
  }

  :root {
    --primary: #880E4F;
    --primaryDark: #560027;
    --primaryLight: #BC477B;

    --white: #FFF;
    --black: #000;
    --background: #F2F2F2;
  }
`;
