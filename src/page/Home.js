import { useEffect, useState } from 'react';
import usePageTransition from '../hooks/usePageTransition';
import Footer from '../components/Footer';
import ProyectosHome from '../components/ProyectosHome';
import Hero from '../page/Hero';

const HomePage = ({ setIsLoading, isLoading }) => {
  const [isExiting, setIsExiting] = useState(false);
  
  usePageTransition(setIsLoading);

  useEffect(() => {
    return () => setIsExiting(true);
  }, []);

  return (
    <div  className={`contenido_page ${isExiting ? '' : 'exit'}`}>
      <Hero/>      
      <ProyectosHome/>
      <Footer/>
    </div>
  );
};

export default HomePage;
