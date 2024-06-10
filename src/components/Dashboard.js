import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="stats">
                <div className="stat">
                    <h3>Projects</h3>
                    <p>13</p>
                </div>
                <div className="stat">
                    <h3>Sites</h3>
                    <p>24</p>
                </div>
                <div className="stat">
                    <h3>Tasks</h3>
                    <p>88</p>
                </div>
            </div>
            <div className="charts">
                <div className="bar-chart">Bar Chart Here</div>
                <div className="map">Map Here</div>
            </div>
        </div>
    );
};

export default Dashboard;
