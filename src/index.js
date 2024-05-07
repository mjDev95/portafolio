import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Cursor from './components/Cursor';
import Lateral from './components/Lateral';
import { ButtonProvider } from './contextos/ButtonContext';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('aplication'));
root.render(
  <React.StrictMode>
    <ButtonProvider>
      <LocomotiveScrollProvider
        options={{ smooth: true, /* smartphone: { smooth: true } */}}
        watch={[]}
      >
        <App />
        <Lateral/>
        <Cursor/>
      </LocomotiveScrollProvider>
    </ButtonProvider>
  </React.StrictMode>
);

reportWebVitals();
