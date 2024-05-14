import { useEffect } from 'react';
import { gsap } from 'gsap';

const usePageTransition = (setIsLoading) => {
  useEffect(() => {
    gsap.set('.loader', { x: '0%' });

    setIsLoading(true);

    gsap.fromTo('.loader', 
      { top: '0%' },
      {
        top: '-100%',
        ease: 'power1.out',
        onComplete: () => {
          setIsLoading(false);
        },
      }
    );
  }, [setIsLoading]);
};

export default usePageTransition;
