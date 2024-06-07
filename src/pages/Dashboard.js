import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import '../styles/Dashboard.css';

const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
  datasets: [
    {
      label: 'Projects',
      data: [12, 19, 3, 5, 2, 3, 7, 8],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: 'Sites',
      data: [2, 3, 20, 5, 1, 4, 3, 8],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Typography variant="h4" className="dashboard-title">Dashboard</Typography>
      <Card className="dashboard-card">
        <CardContent className="dashboard-card-content">
          <Typography variant="h6">Projects and Sites</Typography>
          <Bar data={data} />
        </CardContent>
      </Card>
      {/* Add map and other elements here */}
    </div>
  );
};

export default Dashboard;
