import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <img src="/Rema.jpg" alt="REMA" className="logo" />
            <h1>Afforestation</h1>
            <div className="user-icon">
                <img src="/Rema.jpg" alt="User" />
            </div>
        </header>
    );
};

export default Header;
