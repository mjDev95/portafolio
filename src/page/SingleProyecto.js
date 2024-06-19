import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import usePageTransition from '../hooks/usePageTransition';
import BotonAtras from '../components/BotonAtras';
import { useParams } from 'react-router-dom';



const Proyecto = ({ setIsLoading, proyectos }) => {
    usePageTransition(setIsLoading);
    const { link } = useParams();
    const proyecto = proyectos[link];  
    
    if (!proyecto) {
        return <div>Proyecto no encontrado</div>;
    }
    

    return (
        <section className="single-proyecto">
            <BotonAtras/>
            <Container>
                <Row>
                <Col xs={12} >
                    <div className="ratio ratio-21x9 overflow-hidden">
                        <Image className="mt-5 object-fit-cover" src={proyecto.imagen}  />
                    </div>                   
                    <p><small>{proyecto.categoria}</small></p>
                    <h1><strong>{proyecto.titulo}</strong></h1>
                    <p className="my-5">{proyecto.descripcion}</p>
                </Col>
                </Row>
            </Container>
        </section>
    );
};
    
export default Proyecto;
