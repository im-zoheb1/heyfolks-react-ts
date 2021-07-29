import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
*, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: ${(props) => props.theme.fonts.textFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    letter-spacing: 0.5px;
    font-size: 62.5%;
    text-rendering: optimizeLegibility;
  }
`;

export default GlobalStyles;
