import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Link, Card, CardContent } from '@mui/material';
import '../styles/Auth.css';

const Login = () => {
  return (
    <div className="auth-container">
      <Card className="auth-card">
        <CardContent>
          <div className="auth-header">
            <img src="/logo.png" alt="REMA Logo" className="auth-logo" />
            <Typography variant="h5" component="h1" className="auth-title">
              Login
            </Typography>
          </div>
          <form className="auth-form">
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
            <FormControlLabel
              control={<Checkbox name="rememberMe" color="primary" />}
              label="Remember me"
            />
            <Link href="#" className="auth-forgot-password">
              Forgot password?
            </Link>
            <Button
              variant="contained"
              color="primary"
              className="auth-button"
            >
              Sign in
            </Button>
            <Typography variant="body2" className="auth-footer">
              Not registered yet? <Link href="/signup">Create an Account</Link>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
