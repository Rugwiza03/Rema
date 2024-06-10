// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Remove authentication state and related functions
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const value = { isAuthenticated, setIsAuthenticated };
    const value = {}; // Empty context value
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
