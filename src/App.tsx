import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';

import Theme from './utils/theme'
import { Home } from './pages';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
