import { useState, useEffect, useContext } from 'react';
import Routes from './components/Routes';
import Loader from './components/Loader';
import { ButtonContext } from './contextos/ButtonContext';
import './App.css';

function App() {
  const { isActive } = useContext(ButtonContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simula una petición de datos con un retraso
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);


  return (
    <main className={`App ${isActive ? 'active' : ''}`}>
      <Loader isLoading={isLoading} />
      <Routes setIsLoading={setIsLoading} />
    </main>
  );
}

export default App;
