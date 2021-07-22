import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  colors: {
    primary: '#348ac7',
    secondary: '#7474bf',
    accent: '#53d1b3',
    bgColor: '#fefefe',
    dashboardBgColor: '#f0f1f5',
    white: '#ffffff',
    blue: '#1976d2',
    red: '#dc3545',
    green: '#388e3c',
  },

  boxShadow: {
    default: '0 1px 2px rgba(0, 0, 0, 0.2)',
  },

  borderRadius: {
    rounded: '5px',
    pilled: '1000px',
    circled: '50%',
  },

  fonts: {
    logoFont: "'Anton', sans-serif",
    textFont: "'Nunito', sans-serif'",
  },

  fontSize: {
    big: '2.2rem',
    medium: '1.8rem',
    small: '1.6rem',
    xsmall: '1.4rem',
  },
};

export { myTheme };
