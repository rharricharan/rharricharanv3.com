import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import '@fontsource/inter'; // Defaults to weight 400
import '@fontsource/inter/400.css'; // Specific weight
import '@fontsource/inter/500.css'; // Specific weight
import '@fontsource/inter/700.css'; // Bold weight
import '@fontsource/inter/900.css'; // Black weight

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
