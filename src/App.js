import { useState, useEffect, useRef, useContext } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import Routes from './components/Routes';
import Loader from './components/Loader';
import { ButtonContext } from './contextos/ButtonContext';
import './App.css';

function App() {
  const { isActive } = useContext(ButtonContext);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  const { scroll } = useLocomotiveScroll()

  useEffect(() => {
    const fetchData = async () => {
      // Simula una petición de datos con un retraso
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();

    return () => {
      if (scroll) {
        scroll.destroy()
      }
    }
  }, [scroll])

  useEffect(() => {
    if (isActive && scroll) {
      console.log('Deteniendo el scroll...' + scroll);
      scroll.stop();
    } else if (!isActive && scroll) {
      console.log('Iniciando el scroll...' + scroll);
      scroll.start();
    }
  }, [isActive, scroll]);

  return (
    <main data-scroll-container ref={containerRef} className={`App ${isActive ? 'active' : ''}`}>
      <Loader isLoading={isLoading} />
      <Routes setIsLoading={setIsLoading} />
    </main>
  );
}

export default App;
