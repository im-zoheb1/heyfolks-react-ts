import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/globalStyles';
import { myTheme } from 'styles/theme';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Nunito Web:300,400,500,600,700', 'Anton', 'sans-serif'],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
