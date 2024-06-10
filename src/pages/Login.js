import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Rema.jpg'; // Corrected file path
import '../styles/Auth.css';  // Corrected file path

const Login = () => {
    return (
        <div className="auth-container">
            <div className="auth-form">
            <img src={logo} alt="REMA Afforestation" className="logo" />              <h1>Login</h1>
                <form>
                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" name="email" placeholder="example@gmail.com" required />
                    
                    <label htmlFor="password">Password*</label>
                    <input type="password" id="password" name="password" placeholder="min. 8 character" required />
                    
                    <div className="remember-me">
                        <input type="checkbox" id="remember" name="remember" />
                        <label htmlFor="remember">Remember me</label>
                        <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
                    </div>
                    
                    <button type="submit" className="auth-button">Sign up</button>
                </form>
                <p>
                    Not registered yet? <Link to="/signup">Create an Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
