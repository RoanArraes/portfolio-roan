import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Theme from './utils/theme'
import { About, Home, Projects } from './pages';
import { ROUTES } from './utils/routes';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
