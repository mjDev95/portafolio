import React, { useContext } from 'react';
import { ButtonContext } from '../contextos/ButtonContext';

function ButtonsMain({ content, anchorText }) {
  const { isActive, toggleActive } = useContext(ButtonContext);

  const handleClick = () => {
    if (content !== undefined) {
      toggleActive(content);
    } else {
      toggleActive();
    }
  };

  return <div className={`btn_contacto ${isActive ? 'active' : ''}`} data-content={content} onClick={handleClick}>{anchorText}</div>;
}


export default ButtonsMain;
