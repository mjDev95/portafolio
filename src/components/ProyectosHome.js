import React, { useEffect, useMemo } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProyectoABC from '../proyectos/abc';
import ProyectoSanJose from '../proyectos/san-jose';

const ProyectosHome = () => {
  const proyectos = useMemo(() => [ProyectoABC, ProyectoSanJose], []);
  const [imagenSeleccionada, setImagenSeleccionada] = React.useState(proyectos[0].imagen);

  const manejarHover = (imagen) => {
    setImagenSeleccionada(imagen);
  };

  useEffect(() => {
    setImagenSeleccionada(proyectos[0].imagen);
  }, [proyectos]);

  return (
    <section data-scroll-section>
        <Container>
    
            <div className="d-flex my-5 justify-content-between align-items-center">
                <h2>PROYECTOS <span>DESTACADOS</span></h2>
                <Link to="/proyectos">Ver todos los proyectos</Link>
            </div>

            <Row>
                <Col xs={12} lg={6} className="d-none d-lg-block">
                    <div className='img_tab_proyecto position-relative'>
                        {proyectos.map((proyecto, index) => (
                            <Image key={index} src={proyecto.imagen} fluid className={proyecto.imagen === imagenSeleccionada ? 'active position-absolute top-0 left-0' : 'position-absolute top-0 left-0'} />
                        ))}
                    </div>
                </Col>
                <Col xs={12} lg={6}>
                {proyectos.map((proyecto, index) => (
                    <div className='showcase__title d-flex flex-column align-items-start justify-content-around' key={index} onMouseEnter={() => manejarHover(proyecto.imagen)}>
                        <div className="d-lg-none">
                            <Image src={proyecto.imagen} fluid className='my-5'/>
                        </div>
                        <Link to={proyecto.link}>
                            <p className='subtitle mb-0'>{proyecto.categoria}</p>
                            <p className='title mb-lg-0'>{proyecto.titulo}</p>
                        </Link>
                    </div>
                ))}
                </Col>
            </Row>
        </Container>
    </section>

  );
};

export default ProyectosHome;
