import { useRef, useEffect,useState} from 'react';
import gsap from 'gsap';

const useCursorAnimation = () => {

    const cursorRef = useRef(null);
    const imageRef = useRef(null);
    const [isOverImage, setIsOverImage] = useState(false);
        
    const handleMouseEnter = () => setIsOverImage(true);
    const handleMouseLeave = () => setIsOverImage(false);

    useEffect(() => {

        const imageElement = document.querySelector('.content-reveal-image');
        if (imageElement) {
            imageElement.addEventListener('mouseenter', handleMouseEnter);
            imageElement.addEventListener('mouseleave', handleMouseLeave);
        }


        if (imageRef.current) {
            gsap.set(imageRef.current, { clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' });
        }

        const movimientoMouse = (e) => {
            if (cursorRef.current) {
                gsap.to(cursorRef.current, {
                    top: e.clientY,
                    left: e.clientX
                });
            }
            
            if (imageRef.current) {
                const limitesImagen = imageRef.current.getBoundingClientRect();
                const inImagen = (
                    e.clientX >= limitesImagen.left &&
                    e.clientX <= limitesImagen.right &&
                    e.clientY >= limitesImagen.top &&
                    e.clientY <= limitesImagen.bottom
                );
        
                if (inImagen) {       
                    const x = e.clientX - limitesImagen.left;
                    const xPercent = (x / limitesImagen.width) * 100;
                    gsap.to(imageRef.current, { clipPath: `polygon(0 0, ${xPercent}% 0, ${xPercent}% 100%, 0% 100%)` });
                }

            }
        };

        const mouseEnterWindow = () => {
            if (cursorRef.current) {
                cursorRef.current.style.display = 'block';
            }
        };

        const mouseLeaveWindow = () => {
            if (cursorRef.current) {
                cursorRef.current.style.display = 'none';
            }
        };

        window.addEventListener('mousemove', movimientoMouse);
        window.addEventListener('mouseover', mouseEnterWindow);
        window.addEventListener('mouseout', mouseLeaveWindow);

        return () => {
            window.removeEventListener('mousemove', movimientoMouse);
            window.removeEventListener('mouseover', mouseEnterWindow);
            window.removeEventListener('mouseout', mouseLeaveWindow);
            imageElement.removeEventListener('mouseenter', handleMouseEnter);
            imageElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return { cursorRef, imageRef, isOverImage };
};

export default useCursorAnimation;
