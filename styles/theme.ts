
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'ltr',
  palette: {
    primary: {
      main: '#ff6b00'
    },
    secondary: {
      main: '#0d1b2a'
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif'
  }
});

export default theme;
