import React from 'react';
import logo from '../assets/images/Rema.jpg'; // Corrected file path
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
       <div className='logo'>
       <img src={logo} alt="Afforestation"  width={250}/>
       {/* <h1>Afforestation</h1> */}
       </div>

      {/* <div className="user-icon">
        <img src="./assets/images/Rema.jpg" alt="User" />
      </div> */}
    </header>
  );
};

export default Header;