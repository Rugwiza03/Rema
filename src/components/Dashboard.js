import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../styles/Dashboard.css';

const data = {
  labels: ['Completed', 'In Progress', 'Failed'],
  datasets: [
    {
      label: 'Tasks',
      data: [51, 32, 5],
      backgroundColor: ['#4caf50', '#2196f3', '#f44336'],
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

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
        <div className="bar-chart">
          <Bar data={data} options={options} />
        </div>
        <div className="map">Map Here</div>
      </div>
    </div>
  );
};

export default Dashboard;