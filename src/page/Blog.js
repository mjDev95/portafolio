import { useEffect, useState } from 'react';
import usePageTransition from '../hooks/usePageTransition';
import Hero from '../page/Hero';
import Footer from '../components/Footer';

const Blog = ({ setIsLoading, isLoading }) => {
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

export default Blog;
