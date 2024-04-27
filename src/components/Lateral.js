import React, { useContext } from 'react';
import { ButtonContext } from '../contextos/ButtonContext';


const Lateral = () => {
    const { isActive } = useContext(ButtonContext);

    return (
        <div className={`app-lateral ${isActive ? 'active' : ''}`}>
            <div className="fixed-nav-rounded-div">
                <div className="content-rounded">
                    <div className="div-rounded"></div>
                </div>
            </div>
            <div className="btn_contacto">X</div>
            <div className="info-fixed">
            </div>
        </div>
    );
}

export default Lateral;
