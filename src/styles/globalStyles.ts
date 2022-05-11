import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    font-family: 'Nunito Sans', sans-serif;
    color: ${(props) => props.theme.textColor};
    min-width: 100%;
    overflow-x: hidden;
  }
  body {
    font-size: 1.4rem;
    min-width: 100%;
  }
`;
