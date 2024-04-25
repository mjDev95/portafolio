import { useEffect, useState } from 'react';
import usePageTransition from '../hooks/usePageTransition';
import Footer from '../components/Footer';
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
      <Footer/>
    </div>
  );
};

export default HomePage;
