import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import ClientMap from '../components/clients/ClientMap';
import ClientList from '../components/clients/ClientList';
import api from '../services/api';

const ClientsPage = () => {
  const [clients, setClients] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await api.get('/clients');
        setClients(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchClients();
  }, []);

  const filteredClients = filter ? clients.filter(client => client.industry === filter) : clients;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Our Clients
      </Typography>
      
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" gutterBottom>Filter by Industry:</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <button onClick={() => setFilter('')} style={{ padding: '8px 16px', background: '#f0f0f0', border: 'none', borderRadius: '4px' }}>All</button>
          <button onClick={() => setFilter('Hotel')} style={{ padding: '8px 16px', background: '#e3f2fd', border: 'none', borderRadius: '4px' }}>Hotel</button>
          <button onClick={() => setFilter('Resto')} style={{ padding: '8px 16px', background: '#e8f5e9', border: 'none', borderRadius: '4px' }}>Restaurant</button>
          <button onClick={() => setFilter('Rumah Sakit')} style={{ padding: '8px 16px', background: '#ffebee', border: 'none', borderRadius: '4px' }}>Hospital</button>
          <button onClick={() => setFilter('Outsourcing')} style={{ padding: '8px 16px', background: '#f3e5f5', border: 'none', borderRadius: '4px' }}>Outsourcing</button>
        </Box>
      </Box>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ClientMap />
        </Grid>
        <Grid item xs={12} md={6}>
          <ClientList clients={filteredClients} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ClientsPage;