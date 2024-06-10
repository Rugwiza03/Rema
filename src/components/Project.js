import React from 'react';
import '../styles/Project.css';
import ProjectNavBar from './ProjectNavBar';

const Project = () => {
  return (
<>
<ProjectNavBar />

<div className="project">
      <div className="project-header">
        <h1>Project</h1>
      </div>
      <div className="project-content">
        <form>
          <div className="form-group">
            <label>Project Name</label>
            <input type="text" placeholder="Enter project name" />
          </div>
          <div className="form-group">
            <label>Site</label>
            <select>
              <option>Select Site</option>
            </select>
          </div>
          <div className="form-group">
            <label>Start Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Project Type</label>
            <select>
              <option>Select project type</option>
            </select>
          </div>
          <button className='create-btn'>Create</button>
        </form>
      </div>
    </div></>
  );
};

export default Project;