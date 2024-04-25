import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuSuperior from '../components/Nav-superior';
import useCursorAnimation from '../hooks/useCursorAnimation';
import wire from '../img/wireframe.png';
import web from '../img/web.png'; 
import code from '../img/code.png';

const Hero = () => {
    const [showCode, setShowCode] = useState(false);
    const [showDesign, setShowDesign] = useState(true);
    const { imageRef } = useCursorAnimation(); 

    const developmentClick = () => {
        setShowCode(true);
        setShowDesign(false);
    };

    const designClick = () => {
        setShowCode(false);
        setShowDesign(true);
    };

    return (
        <section className='hero'>
            <MenuSuperior email="correo@ejemplo.com" phoneNumber="123-456-7890" data-scroll-section/>
            <div className="content-hero mx-3" data-scroll-section>
                <Container >
                    <Row>
                        <Col xs={12} md={6}>
                            <h1 className="animate-this">Bienvenido a mi sitio web</h1>
                            <p>Este es un componente de hero que ocupa el alto completo de la pantalla.</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <div>
                                <div className="position-relative mx-auto content-reveal-image">
                                    {showDesign && <img className="position-absolute img_for_reveal" src={wire} alt="Wireframe" />}
                                    {showCode && <img className="position-absolute img_for_reveal" src={code} alt="Código" />}
                                    <img ref={imageRef} className="position-absolute reveal-image" src={web} alt="Web" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}/>
                                </div>
                                <div className="tabs my-4 position-relative mx-auto nav justify-content-between">
                                    <div className={`mb-0 tab btn_dev ${showCode ? 'active' : 'disabled'}`} onClick={developmentClick}>Codigo</div>
                                    <div className={`mb-0 tab btn_design ${showDesign ? 'active' : 'disabled'}`} onClick={designClick}>Diseño</div>
                                    <div className="wizard-bar"/>
                                </div>     
                            </div>                       
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Hero;
