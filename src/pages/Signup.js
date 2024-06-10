import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Rema.jpg'; // Corrected file path
import '../styles/Auth.css';  // Corrected file path

const Signup = () => {
    return (
        <div className="auth-container">
            <div className="auth-form">
                <img src={logo} alt="REMA Afforestation" className="logo" />
                <h1>Sign up</h1>
                <form>
                    <label htmlFor="name">Names*</label>
                    <input type="text" id="name" name="name" placeholder="Full Name" required />
                    
                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" name="email" placeholder="example@gmail.com" required />
                    
                    <label htmlFor="password">Password*</label>
                    <input type="password" id="password" name="password" placeholder="min. 8 character" required />
                    
                    <label htmlFor="confirm-password">Confirm Password*</label>
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="min. 8 character" required />
                    
                    <button type="submit" className="auth-button">Sign up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
