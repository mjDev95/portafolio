import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Cursor from './components/Cursor';
import Lateral from './components/Lateral';
import { ButtonProvider } from './contextos/ButtonContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('aplication'));
root.render(
  <React.StrictMode>
    <ButtonProvider>
      <App />    
      <Lateral/>
      <Cursor/>
    </ButtonProvider>
  </React.StrictMode>
);

reportWebVitals();
