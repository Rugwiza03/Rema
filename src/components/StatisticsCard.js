import React from 'react';
import '../styles/StatisticsCard.css';

const StatisticsCard = ({ title, value, change, subtitle, icon }) => {
    return (
        <div className="statistics-card">
            <div className="card-icon">
                <img src={icon} alt={title} />
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{value} <span>{change}</span></p>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default StatisticsCard;
