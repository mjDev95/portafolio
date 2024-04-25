import { useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { gsap } from 'gsap';

const usePageTransition = (setIsLoading) => {
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) {
      gsap.set('.loader', { x: '0%' });

      setIsLoading(true);

      gsap.fromTo('.loader', 
        { top: '0%' },
        {
          top: '-100%',
          ease: 'power1.out',
          onComplete: () => {
            scroll.update();
            setIsLoading(false);
          },
        }
      );
    }
  }, [scroll, setIsLoading]);
};

export default usePageTransition;
