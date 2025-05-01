"use client"
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#ff6b00',
    },
    secondary: {
      main: '#0d1b2a',
    },
  },
});

export default theme;
