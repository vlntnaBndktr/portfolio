import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Reddit Mono, monospace',
    fontWeight: 200,
    h1: {
      fontFamily: 'Reddit Mono, monospace',
      fontWeight: 200,
      fontSize: 'clamp(2rem, 17.5vw, 20rem)',
      position: 'relative',
      lineHeight: 1,
    },

    h2: {
      fontFamily: 'Reddit Mono, monospace',
      fontWeight: 200,
    },
    body1: {
      fontFamily: 'Reddit Mono, monospace',
      fontWeight: 200,
    },
  },
});

export default theme;
