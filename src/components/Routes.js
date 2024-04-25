import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../page/Home';
import Proyectos from '../page/Proyectos';
import Blog from '../page/Blog';

const Rutas = ({ setIsLoading }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setIsLoading={setIsLoading} />} />
        <Route path="/proyectos" element={<Proyectos setIsLoading={setIsLoading} />} />
        <Route path="/blog" element={<Blog setIsLoading={setIsLoading} />} />
      </Routes>
    </Router>
  );
};

export default Rutas;