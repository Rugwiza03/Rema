// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...props }) => {
    // Here you can implement any logic for protecting routes
    // For now, let's simply render the provided element
    return <Route {...props} element={element} />;
};

export default ProtectedRoute;
