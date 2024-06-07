import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import Login from './pages/Login';
import SignUp from './pages/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/dashboard" element={
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: 240, padding: 20 }}>
              <Navbar />
              <Dashboard />
            </div>
          </div>
        } />
        <Route path="/project" element={
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: 240, padding: 20 }}>
              <Navbar />
              <Project />
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
