import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      light: string;
      dark: string;
      lightDark: string;
      muted: string;
      bgColor: string;
      dashboardBgColor: string;
      white: string;
      blue: string;
      red: string;
      green: string;
    };

    boxShadow: {
      default: string;
    };

    borderRadius: {
      rounded: string;
      pilled: string;
      circled: string;
    };

    fonts: {
      logoFont: string;
      textFont: string;
    };

    fontSize: {
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };

    heading: {
      primary: string;
    };

    gradient: {
      linear: string;
      linearTransparent: string;
    };
  }
}
