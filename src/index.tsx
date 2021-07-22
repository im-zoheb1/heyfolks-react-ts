import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'globalStyles/index';
import { myTheme } from 'globalStyles/theme';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Nunito Web:300,400,500,600,700', 'Anton', 'sans-serif'],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={myTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
