import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Project = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <div className="main-content">
                {/* Your Project content goes here */}
                <h1>Project</h1>
            </div>
        </div>
    );
};

export default Project;
