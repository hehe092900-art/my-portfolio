import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(222.2, 47.4%, 11.2%)',
      contrastText: 'hsl(210, 40%, 98%)',
    },
    secondary: {
      main: 'hsl(210, 40%, 96.1%)',
      contrastText: 'hsl(222.2, 47.4%, 11.2%)',
    },
    background: {
      default: 'hsl(0, 0%, 100%)',
      paper: 'hsl(0, 0%, 100%)',
    },
    text: {
      primary: 'hsl(222.2, 84%, 4.9%)',
      secondary: 'hsl(215.4, 16.3%, 46.9%)',
    },
    divider: 'hsl(214.3, 31.8%, 91.4%)',
    error: {
      main: 'hsl(0, 84.2%, 60.2%)',
    },
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        'html, body': {
          margin: 0,
          padding: 0,
          width: '100%',
          minHeight: '100vh',
        },
        '#root': {
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
  },
});

export default theme;
