import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import DataContextProvider from './Components/DataContextProvider';
import ThemeContextProvider from './Components/ThemeContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </DataContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);