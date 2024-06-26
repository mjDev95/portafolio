import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const useCursorAnimation = (setLastXPercent) => {
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
            // Añade eventos táctiles
            imageElement.addEventListener('touchstart', handleMouseEnter);
            imageElement.addEventListener('touchend', handleMouseLeave);
        }

        if (imageRef.current) {
            gsap.set(imageRef.current, { clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' });
        }

        const movimientoMouse = (e) => {
            // Añade soporte para eventos táctiles
            const clientX = e.clientX || (e.touches && e.touches[0].clientX);
            const clientY = e.clientY || (e.touches && e.touches[0].clientY);

            if (cursorRef.current) {
                gsap.to(cursorRef.current, {
                    top: clientY,
                    left: clientX
                });
            }

            if (imageRef.current) {
                const limitesImagen = imageRef.current.getBoundingClientRect();
                const inImagen = (
                    clientX >= limitesImagen.left &&
                    clientX <= limitesImagen.right &&
                    clientY >= limitesImagen.top &&
                    clientY <= limitesImagen.bottom
                );

                if (inImagen) {
                    const x = clientX - limitesImagen.left;
                    const xPercent = (x / limitesImagen.width) * 100;
                    setLastXPercent(xPercent); 
                    gsap.to(imageRef.current, { clipPath: `polygon(0 0, ${xPercent}% 0, ${xPercent}% 100%, 0% 100%)` });
                }
            }
        };
        const handleMouseDown = () => {
            if (cursorRef.current && !isOverImage) {
              cursorRef.current.classList.add('active');
            }
        };

        const handleMouseUp = () => {
            if (cursorRef.current && !isOverImage) {
              cursorRef.current.classList.remove('active');
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
        // Añade eventos táctiles
        window.addEventListener('touchmove', movimientoMouse);
        window.addEventListener('touchstart', mouseEnterWindow);
        window.addEventListener('touchend', mouseLeaveWindow);

        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', movimientoMouse);
            window.removeEventListener('mouseover', mouseEnterWindow);
            window.removeEventListener('mouseout', mouseLeaveWindow);
            // Elimina eventos táctiles
            window.removeEventListener('touchmove', movimientoMouse);
            window.removeEventListener('touchstart', mouseEnterWindow);
            window.removeEventListener('touchend', mouseLeaveWindow);
            // Comprueba si imageElement existe antes de intentar eliminar los event listeners
            if (imageElement) {
                imageElement.removeEventListener('mouseenter', handleMouseEnter);
                imageElement.removeEventListener('mouseleave', handleMouseLeave);
                // Elimina eventos táctiles
                imageElement.removeEventListener('touchstart', handleMouseEnter);
                imageElement.removeEventListener('touchend', handleMouseLeave);
            }
            // Elimina evento de click en el documento
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [setLastXPercent, isOverImage]);

    return { cursorRef, imageRef, isOverImage };
};

export default useCursorAnimation;
