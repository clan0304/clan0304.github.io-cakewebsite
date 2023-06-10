import { createTheme } from '@mui/material/styles';

export const shades = {
  primary: {
    100: '#cccccc',
    200: '#999999',
    300: '#666666',
    400: '#333333',
    500: '#000000',
    600: '#000000',
    700: '#000000',
    800: '#000000',
    900: '#000000',
  },
  secondary: {
    100: '#fcfeff',
    200: '#f9fdff',
    300: '#f6fbff',
    400: '#f3faff',
    500: '#f0f9ff',
    600: '#c0c7cc',
    700: '#909599',
    800: '#606466',
    900: '#303233',
  },
  purple: {
    100: '#fefdff',
    200: '#fdfbff',
    300: '#fcf9ff',
    400: '#fbf7ff',
    500: '#faf5ff',
    600: '#c8c4cc',
    700: '#969399',
    800: '#646266',
    900: '#323133',
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[600],
      light: shades.primary[200],
    },
    secondary: {
      main: shades.secondary[500],
    },
    purple: {
      dark: shades.purple[700],
      main: shades.purple[400],
    },
  },
  typography: {
    fontFamilly: ['Rubik', 'Fauna One'].join(','),
    fontSize: 12,
    h1: {
      fontFamilly: ['Cinzel', 'Fauna One'].join(','),
      fontSize: 36,
    },
    h2: {
      fontFamilly: ['Cinzel', 'Fauna One'].join(','),
      fontSize: 24,
    },
  },
});
