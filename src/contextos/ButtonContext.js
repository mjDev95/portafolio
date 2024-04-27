import React, { createContext, useState, useEffect, useCallback } from 'react';

export const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = useCallback(() => {
        setIsActive(prevIsActive => !prevIsActive);
    }, []);

    useEffect(() => {
        const buttons = document.querySelectorAll('.btn_contacto');
        buttons.forEach(button => {
            button.addEventListener('click', toggleActive);
        });

        return () => {
            buttons.forEach(button => {
                button.removeEventListener('click', toggleActive);
            });
        };
    }, [toggleActive]);  // Ahora toggleActive es una dependencia

    return (
        <ButtonContext.Provider value={{ isActive }}>
            {children}
        </ButtonContext.Provider>
    );
};
