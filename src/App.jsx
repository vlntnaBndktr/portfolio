import './styles/App.css';
import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography } from '@mui/material';
import StickyHeader from './components/stickyHeader';
import Positions from './components/positions';
import Layout from './components/layout';
import BlackLayout from './components/blackLayout';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BlackLayout />
    </ThemeProvider>
  );
}

export default App;
