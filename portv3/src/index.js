import React from 'react';
import ReactDOM from 'react-dom/client'; // Use react-dom/client for React 18+
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/inter'; // Defaults to weight 400
import '@fontsource/inter/400.css'; // Specific weight
import '@fontsource/inter/500.css'; // Specific weight
import '@fontsource/inter/700.css'; // Bold weight
import '@fontsource/inter/900.css'; // Black weight

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Log performance if needed
reportWebVitals(console.log);
