import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Cursor from './components/Cursor';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('aplication'));
root.render(
  <React.StrictMode>
    <App />    
    <Cursor/>
  </React.StrictMode>
);

reportWebVitals();
