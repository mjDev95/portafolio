import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../page/Home';
import Proyectos from '../page/Proyectos';
import Proyecto from '../page/SingleProyecto';
import Blog from '../page/Blog';
import ProyectoABC from '../proyectos/abc';
import ProyectoSanJose from '../proyectos/san-jose';

const proyectos = { abc: ProyectoABC, 'san-jose': ProyectoSanJose };

const Rutas = ({ setIsLoading }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setIsLoading={setIsLoading} />} />
        <Route path="/proyectos" element={<Proyectos setIsLoading={setIsLoading} />} />
        <Route path="/proyectos/:link" element={<Proyecto proyectos={proyectos} setIsLoading={setIsLoading}/>} />
        <Route path="/blog" element={<Blog setIsLoading={setIsLoading} />} />
      </Routes>
    </Router>
  );
};

export default Rutas;