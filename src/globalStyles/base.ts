const base = `
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: var(--font-text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    letter-spacing: 0.6px;
    // this defines what 1 rem is :
    font-size: 62.5%; // 1rem = 10px; 10px/16px = 62.5%
    text-rendering: optimizeLegibility;
  }
`;

export default base;
