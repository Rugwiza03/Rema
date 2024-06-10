import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Project from './components/Project';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import "../src/App.css"
import ProjectNavBar from './components/ProjectNavBar';
//import logo from '../assets/images/Rema.jpg';


function App() {
    return (
        <>
      <AuthProvider>
            
            <Router>
                <div className="App">
                    <Header />
                  
                   <Sidebar />
                   
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/project" element={<Project />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
        </>
       
    );
}

export default App;
