import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Reddit Mono, monospace',
    fontWeight: 200,
    h1: {
      fontFamily: 'Reddit Mono, monospace',
      fontWeight: 400,
      fontSize: 'clamp(2rem, 12vw, 20rem)',
      position: 'relative',
      lineHeight: 0.71,
    },

    h2: {
      fontFamily: 'Reddit Mono, monospace',
      fontWeight: 400,
      fontSize: 'clamp(2rem, 12vw, 20rem)',
      position: 'relative',
      lineHeight: 0.71,
    },
    h3: {
      fontFamily: 'Reddit Mono, monospace',
      fontWeight: 200,
      fontSize: '2rem',
      lineHeight: 1,

      '@media (max-width:600px)': {
        fontSize: '1rem', // Smartphone/kleinere Bildschirme
        fontWeight: 300,
      },
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '1.5rem', // Anpassung für mittlere Bildschirme
        fontWeight: 300,
      },
      '@media (min-width:961px) and (max-width: 1280px)': {
        fontSize: '2rem', // Anpassung für größere mittlere Bildschirme
      },
      '@media (min-width: 1281px)': {
        fontSize: '2rem',
      },
    },
    h4: {
      fontFamily: 'Reddit Mono, monospace',
      fontSize: '4vw',
      fontWeight: 300,
      textTransform: 'uppercase',
    },

    body1: {
      fontFamily: 'Reddit Mono, monospace',
      fontSize: '2rem',
      fontWeight: 300,
      lineHeight: 1.2,
      // textTransform: 'uppercase',
      '@media (max-width:600px)': {
        fontSize: '1rem', // Smartphone/kleinere Bildschirme
        fontWeight: 400,
      },
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '1rem', // Anpassung für mittlere Bildschirme
        fontWeight: 400,
      },
      '@media (min-width:961px) and (max-width: 1280px)': {
        fontSize: '1.5rem', // Anpassung für größere mittlere Bildschirme
      },
      '@media (min-width: 1281px)': {
        fontSize: '2rem',
      },
    },
  },
});

export default theme;
