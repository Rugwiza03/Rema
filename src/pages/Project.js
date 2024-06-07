import React from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import '../styles/Project.css';

const Project = () => {
  return (
    <div className="project">
      <Typography variant="h4" className="project-title">Create New Project</Typography>
      <Card>
        <CardContent>
          <form noValidate autoComplete="off" className="project-form">
            <TextField
              fullWidth
              label="Enter project name"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Select site"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Start and end date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Select project type"
              variant="outlined"
            />
            <Button variant="contained" color="primary">
              Create
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Project;
