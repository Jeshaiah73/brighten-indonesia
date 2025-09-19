import React, { useState, useContext } from 'react';
import { Container, Typography, TextField, Button, Paper, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      // Error sudah ditangani oleh AuthContext
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Login
        </Typography>
        
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            placeholder="Enter your email"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            placeholder="Enter your password"
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            sx={{ 
              mt: 2, 
              width: '100%',
              background: '#1E3A8A',
              '&:hover': { background: '#1E40AF' }
            }}
          >
            Login
          </Button>
        </form>
        
        <Typography sx={{ mt: 2, textAlign: 'center' }}>
          Don't have an account?{' '}
          <Button component="a" href="/register" variant="text">
            Register
          </Button>
        </Typography>
      </Paper>
    </Container>
  );
};

export default LoginPage;