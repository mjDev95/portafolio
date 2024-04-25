import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
    return (
        <footer  data-scroll-section>
            <Container>
                <Row className="my-4">
                    <Col xs={12} lg="auto">
                        <a className="link_correo d-block mb-4" href="/home">hey@email.com</a>
                        <div className='d-flex align-items-center justify-content-between'>
                            <p >Instagram </p>
                            <p >Linkedin </p>
                            <p>Dribbble </p>
                        </div>
                    </Col>
                </Row>
                <div className='py-5'>
                    <p className="copyright">© {new Date().getFullYear()}. Todos los derechos reservados</p> 
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
