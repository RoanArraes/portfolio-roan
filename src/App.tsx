import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Theme from './utils/theme'
import { About, Home, Projects } from './pages';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Routes>
          <Route path="/portfolio-roan" element={<Home />} />
          <Route path="/portfolio-roan/sobre" element={<About />} />
          <Route path="/portfolio-roan/projetos" element={<Projects />} />
        </Routes>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
