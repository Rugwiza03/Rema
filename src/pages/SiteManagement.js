// src/pages/SiteManagement.js
import React from 'react';
import StatisticsCard from '../components/StatisticsCard';
import SitesTable from '../components/SitesTable';
import projectIcon from '../assets/icon/project.png'; // Placeholder icon path
import siteIcon from '../assets/icon/site.png'; // Placeholder icon path
import taskIcon from '../assets/icon/task.png'; // Placeholder icon path
import '../styles/SiteManagement.css';

const SiteManagement = () => {
    return (
        <div className="site-management">
            <div className="statistics-cards">
                <StatisticsCard 
                    title="Projects" 
                    value="13" 
                    change="+15.6%" 
                    subtitle="Year of 2021" 
                    icon={projectIcon} 
                />
                <StatisticsCard 
                    title="Sites" 
                    value="24" 
                    change="-20%" 
                    subtitle="Last Week" 
                    icon={siteIcon} 
                />
                <StatisticsCard 
                    title="Tasks" 
                    value="51" 
                    change="Completed" 
                    subtitle="" 
                    icon={taskIcon} 
                />
            </div>
            <SitesTable />
        </div>
    );
};

export default SiteManagement;
