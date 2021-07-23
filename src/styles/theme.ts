import { DefaultTheme } from 'styled-components';

const hexToRGB = (hex: string, alpha?: number) => {
  const r: number = parseInt(hex.slice(1, 3), 16);
  const g: number = parseInt(hex.slice(3, 5), 16);
  const b: number = parseInt(hex.slice(5, 7), 16);

  if (alpha) return `rgba(${r},${g},${b},${alpha})`;
  else return `rgba(${r},${g},${b})`;
};

const myTheme: DefaultTheme = {
  colors: {
    primary: '#348ac7',
    secondary: '#7474bf',
    accent: '#53d1b3',
    light: '#f2f2f2',
    dark: '#333333',
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
    textFont: "'Nunito', sans-serif",
  },

  fontSize: {
    lg: '2.4rem',
    md: '1.8rem',
    sm: '1.6rem',
    xs: '1.4rem',
  },

  gradient: {
    get linear() {
      const { primary, secondary } = myTheme.colors;
      return `linear-gradient(to right bottom, ${primary}, ${secondary})`;
    },
    get linearTransparent() {
      const { primary, secondary } = myTheme.colors;
      return `linear-gradient(to right bottom, ${hexToRGB(primary, 0.65)}, ${hexToRGB(secondary, 0.65)})`;
    },
  },
};

export { myTheme };
