import './App.css';
import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import Skeleton from './components/skeleton';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Skeleton />
    </ThemeProvider>
  );
}

export default App;
