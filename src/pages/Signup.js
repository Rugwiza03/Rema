import React from 'react';
import { TextField, Button, Typography, Link, Card, CardContent } from '@mui/material';
import '../styles/Auth.css';

const SignUp = () => {
  return (
    <div className="auth-container">
      <Card className="auth-card">
        <CardContent>
          <div className="auth-header">
            <img src="/logo.png" alt="REMA Logo" className="auth-logo" />
            <Typography variant="h5" component="h1" className="auth-title">
              Sign up
            </Typography>
          </div>
          <form className="auth-form">
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
              required
            />
            <Button
              variant="contained"
              color="primary"
              className="auth-button"
            >
              Sign up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
