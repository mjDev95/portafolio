import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from 'gsap';
import MenuSuperior from '../components/Nav-superior';
import useCursorAnimation from '../hooks/useCursorAnimation';
import wire from '../img/wireframe.png';
import web from '../img/web.png'; 
import code from '../img/code.png';

const Hero = () => {
    const [showCode, setShowCode] = useState(false);
    const [showDesign, setShowDesign] = useState(true);
    const [lastXPercent, setLastXPercent] = useState(50);
    const { imageRef, isOverImage } = useCursorAnimation(setLastXPercent); 

    const revealImage = async () => {
        await gsap.to(imageRef.current, { clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`, duration: 1 });
    };

    const developmentClick = async () => {
        if (!showCode) {
            await revealImage();
            setShowCode(true);
            setShowDesign(false);
        }
    };

    const designClick = async () => {
        if (!showDesign) {
            await revealImage();
            setShowCode(false);
            setShowDesign(true);
        }
    };

    useEffect(() => {
        if (!isOverImage && (showCode || showDesign)) {
            gsap.to(imageRef.current, { clipPath: `polygon(0 0, ${lastXPercent}% 0, ${lastXPercent}% 100%, 0 100%)`, duration: 1 });
        }
    }, [isOverImage, showCode, showDesign, lastXPercent, imageRef]);


    return (
        <section className='hero'>
            <MenuSuperior email="correo@ejemplo.com" phoneNumber="123-456-7890" data-scroll-section/>
            <div className="content-hero mx-3" data-scroll-section>
                <Container >
                    <Row>
                        <Col xs={12} md={8}>
                            <div className="text">
                                <p className="subheading"><span className="hi">¡Hola!</span> Soy Mario</p>
                                <h1 className="mb-4 mt-3">
                                    Diseñador y desarrollador creativo <span className="font-weight-bold">de UI/UX</span>
                                </h1>
                                <div className="ml-0 ml-lg-auto mr-auto mr-lg-0 btn_contacto">X</div>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="my-5">
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
