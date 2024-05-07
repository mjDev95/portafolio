import React, { useContext } from 'react';
import { ButtonContext } from '../contextos/ButtonContext';
import ButtonsMain from './ButtonsMain';

const Lateral = () => {
    const { isActive, activeContent } = useContext(ButtonContext);

    return (
        <div className={`app-lateral ${isActive ? 'active' : ''}`}>
            <div className="fixed-nav-rounded-div">
                <div className="content-rounded">
                    <div className="div-rounded"></div>
                </div>
            </div>
            <ButtonsMain  anchorText="X" />
            <div className="info-fixed">
                {activeContent === 'diseno' && <div className="diseno"></div>}
                {activeContent === 'desarrollo web' && <div className="desarollo_web"></div>}
                {activeContent === 'social media' && <div className="social_media"></div>}
            </div>
        </div>
    );
}

export default Lateral;
