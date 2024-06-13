// src/components/Reporting.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import './Reporting.css';

const Reporting = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [
      {
        label: 'Carbon Sequestration Metrics',
        data: [65, 59, 80, 81, 56, 55, 40, 45, 35, 50],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="reporting">
      <div className="reporting-cards">
        <div className="card">
          <h3>Projects</h3>
          <p>13 <span className="text-success">+15%</span></p>
          <p>Year of 2023</p>
        </div>
        <div className="card">
          <h3>Sites</h3>
          <p>24 <span className="text-success">+20%</span></p>
          <p>Last Week</p>
        </div>
        <div className="card">
          <h3>Tasks</h3>
          <p>Completed: 51</p>
          <p>In Progress: 32</p>
          <p>Failed: 5</p>
        </div>
      </div>
      <div className="status">
        <h3>Project & Status</h3>
        <ul>
          <li>Site Selection - <span className="text-success">Finished</span></li>
          <li>Implementation - <span className="text-success">Finished</span></li>
          <li>Maintenance - <span className="text-warning">In Progress</span></li>
          <li>Long-term maintenance - <span className="text-warning">In Progress</span></li>
        </ul>
      </div>
      <div className="chart">
        <h3>Carbon Sequestration Metrics</h3>
        <Line data={data} />
      </div>
    </div>
  );
};

export default Reporting;
