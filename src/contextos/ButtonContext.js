import React, { createContext, useState, useCallback } from 'react';

export const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);
    const [activeContent, setActiveContent] = useState(null);



    const toggleActive = useCallback((content) => {
        setIsActive(prevIsActive => !prevIsActive);
        setActiveContent(content);
    }, []);
    
    return (
        <ButtonContext.Provider value={{ isActive, activeContent, toggleActive }}>
            {children}
        </ButtonContext.Provider>
    );
};
