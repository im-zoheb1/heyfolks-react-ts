import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import GlobalStyles from 'globalStyles/index';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Nunito Web:300,400,500,600,700', 'Anton', 'sans-serif'],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
