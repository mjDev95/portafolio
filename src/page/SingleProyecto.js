import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import usePageTransition from '../hooks/usePageTransition';
import { useParams } from 'react-router-dom';



const Proyecto = ({ setIsLoading, proyectos }) => {
    usePageTransition(setIsLoading);
    const { link } = useParams();
    const proyecto = proyectos[link];  
    
    if (!proyecto) {
        return <div>Proyecto no encontrado</div>;
    }
    

    return (
        <Container>
            <Row>
            <Col xs={12} lg={6}>
                <h5>{proyecto.categoria}</h5>
                <h4>{proyecto.titulo}</h4>
                <Image src={proyecto.imagen} fluid />
                <p>{proyecto.descripcion}</p>
            </Col>
            </Row>
        </Container>
    );
};
    
export default Proyecto;
