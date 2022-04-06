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
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<Projects />} />
        </Routes>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
