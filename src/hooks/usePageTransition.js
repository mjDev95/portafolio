import { useEffect } from 'react';
import { gsap } from 'gsap';

const usePageTransition = (setIsLoading) => {
  useEffect(() => {
    // Establece el estado de carga a true y el .loader a top: 0%
    setIsLoading(true);
    document.body.classList.add('no-scroll');
    gsap.set('.loader', { top: '0%' });

    // Define una función para manejar el cambio de estado a false
    const setLoadingFalse = () => {
      document.body.classList.remove('no-scroll');
      gsap.to('.loader', {
        top: '-150%',
        ease: 'power1.out',
        duration: 0.5,
        onComplete: () => {
          setIsLoading(false);
        },
      });
    };

    // Inicia la animación de salida después de un retraso
    const loaderAnimation = gsap.fromTo('.loader', 
      { top: '0%' },
      {
        top: '-150%',
        ease: 'power1.out',
        delay: 2, // Retraso de 2 segundos
        onComplete: setLoadingFalse,
      }
    );

    // Limpieza del efecto
    return () => {
      loaderAnimation.kill(); // Detiene la animación si el componente se desmonta
    };
  }, [setIsLoading]);
};

export default usePageTransition;
