import React from 'react';
import useCursorAnimation from '../hooks/useCursorAnimation';

const Cursor = () => { 
  const { cursorRef, isOverImage } = useCursorAnimation(); // Obtén isOverImage del hook

  return (
    <div ref={cursorRef} className="animated-cursor">
      {isOverImage && <div className="imgs_hero" />}
    </div>
  );
};

export default Cursor;
