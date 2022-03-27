import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      mode: 'dark',
      // light: '#fff1f9',
      // main: '#ffeef8',
      // dark: '#b2a6ad',
      contrastText: 'white',
      light: '#fff1f9',
      main: '#ae8c09',
      dark: '#b2a6ad',
    },
    secondary: {
      light: '#fad33e',
      main: '#f9c90e',
      dark: '#ae8c09',
    },
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: 'white',
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
