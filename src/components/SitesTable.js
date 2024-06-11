// src/components/SitesTable.js
import React from 'react';
import '../styles/SitesTable.css';

const SitesTable = () => {
    const sites = [
        { number: '#4910', name: 'Site one', location: 'Nyarugenge site', coordinate: 'S 1° 52\' 58", E 30° 8\'' },
        { number: '#4909', name: 'Site two', location: 'Kicukiro site', coordinate: 'S 1° 52\' 58", E 30° 8\'' },
        { number: '#4908', name: 'Site three', location: 'Gasabo site', coordinate: 'S 1° 52\' 58", E 30° 8\'' },
        { number: '#4907', name: 'Site four', location: 'Rubavu site', coordinate: 'S 1° 52\' 58", E 30° 8\'' },
        { number: '#4906', name: 'Site five', location: 'Muhanga site', coordinate: 'S 1° 52\' 58", E 30° 8\'' },
        { number: '#4905', name: 'Site six', location: 'Ruhango site', coordinate: 'S 1° 52\' 58", E 30° 8\'' },
        { number: '#4904', name: 'Site seven', location: 'Huye site', coordinate: 'S 1° 52\' 58", E 30° 8\'' },
        { number: '#4903', name: 'Site eight', location: 'Nyamagabe site', coordinate: 'S 1° 52\' 58", E 30° 8\'' }
    ];

    return (
        <div className="sites-table">
            <table>
                <thead>
                    <tr>
                        <th># Number</th>
                        <th>Site Name</th>
                        <th>Location</th>
                        <th>Coordinate</th>
                    </tr>
                </thead>
                <tbody>
                    {sites.map((site, index) => (
                        <tr key={index}>
                            <td>{site.number}</td>
                            <td>{site.name}</td>
                            <td>{site.location}</td>
                            <td>{site.coordinate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SitesTable;
