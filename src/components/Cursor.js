import React from 'react';
import useCursorAnimation from '../hooks/useCursorAnimation';
import { ArrowsAngleExpand } from 'react-bootstrap-icons'; // Importa el icono

const Cursor = () => { 
  const { cursorRef, isOverImage } = useCursorAnimation(); // Obtén isOverImage del hook

  return (
    <div ref={cursorRef} className="animated-cursor">
      {isOverImage && <div className="arrow_hero"><ArrowsAngleExpand /></div>}
    </div>
  );
};

export default Cursor;
