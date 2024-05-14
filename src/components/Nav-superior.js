import React from 'react';
import { Sun, Moon } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import { useTheme } from '../hooks/useTheme'; 



function MenuSuperior({ email, phoneNumber}) {
    const { theme, toggleTheme } = useTheme();

    return (
        <div id="topbar" className="d-flex align-items-center menu-superior justify-content-between justify-content-lg-end">
            <a href="#login" className="mx-3" aria-label="Email">{email}</a>
            <a href="#login" className="mx-3" aria-label="Phone">{phoneNumber}</a>
            <Button variant="link ms-auto ms-lg-0" onClick={toggleTheme}>
                {theme === 'dark' ? <Sun color="gold" size={16} /> : <Moon color="silver" size={16} />}
            </Button>
        </div>
    );
}

export default MenuSuperior;