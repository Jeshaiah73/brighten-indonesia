import React, { useContext, useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Button } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';

const DashboardPage = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    products: 0,
    clients: 0,
    quotes: 0,
    contacts: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [productsRes, clientsRes, quotesRes, contactsRes] = await Promise.all([
          api.get('/products'),
          api.get('/clients'),
          api.get('/quotes'),
          api.get('/contacts')
        ]);
        
        setStats({
          products: productsRes.data.data.length,
          clients: clientsRes.data.data.length,
          quotes: quotesRes.data.data.length,
          contacts: contactsRes.data.data.length
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchStats();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome, {user.name}!
      </Typography>
      
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Products</Typography>
              <Typography variant="h4">{stats.products}</Typography>
              <Typography>Total products</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Clients</Typography>
              <Typography variant="h4">{stats.clients}</Typography>
              <Typography>Total clients</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Quotes</Typography>
              <Typography variant="h4">{stats.quotes}</Typography>
              <Typography>Total quotes</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Contacts</Typography>
              <Typography variant="h4">{stats.contacts}</Typography>
              <Typography>Total contacts</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>Quick Actions</Typography>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="contained" component="a" href="/products" sx={{ mr: 2 }}>
              View Products
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" component="a" href="/clients" sx={{ mr: 2 }}>
              View Clients
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" component="a" href="/contact" sx={{ mr: 2 }}>
              Contact Us
            </Button>
          </Grid>
          {user.role === 'admin' && (
            <Grid item>
              <Button variant="contained" color="secondary" component="a" href="/admin">
                Admin Panel
              </Button>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default DashboardPage;