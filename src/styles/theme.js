import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Reddit Mono, monospace',
    fontWeight: 200,
    h1: {
      fontFamily: 'Reddit Mono, monospace',
      fontWeight: 300,
      fontSize: 'clamp(2rem, 17.5vw, 20rem)',
      position: 'relative',
      lineHeight: 0.71,
    },

    h2: {
      fontFamily: 'Reddit Mono, monospace',
      fontWeight: 200,
      fontSize: '2.125rem', // Standardgröße für größere Bildschirme (entspricht 'h2')
      '@media (max-width:600px)': {
        fontSize: '2rem', // entspricht 'h4' für kleinere Bildschirme
      },
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '3rem', // Anpassung für mittlere Bildschirme
      },
      '@media (min-width:961px) and (max-width: 1280px)': {
        fontSize: '4rem', // Anpassung für größere mittlere Bildschirme
      },
      '@media (min-width: 1281px)': {
        fontSize: '5rem',
      },
    },
    h3: {
      fontFamily: 'Reddit Mono, monospace',
      fontSize: '2rem',
      fontWeight: 400,
    },
    h4: {
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
