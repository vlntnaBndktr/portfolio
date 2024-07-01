import './App.css';
import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import Skeleton from './components/skeleton';
import GridSkeleton from './components/gridSkeleton';
import StickyHeader from './components/stickyHeader';
import Positions from './components/positions';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Positions />
    </ThemeProvider>
  );
}

export default App;
