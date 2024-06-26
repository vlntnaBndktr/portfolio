import './App.css';
import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import Skeleton from './components/skeleton';
import GridSkeleton from './components/gridSkeleton';
import StickyHeader from './components/stickyHeader';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StickyHeader />
    </ThemeProvider>
  );
}

export default App;
