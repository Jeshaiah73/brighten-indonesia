import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import Testimonials from '../components/common/Testimonials';
import api from '../services/api';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [stats, setStats] = useState({
    products: 0,
    clients: 0,
    quotes: 0,
    contacts: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [productsRes, clientsRes] = await Promise.all([
          api.get('/products'),
          api.get('/clients')
        ]);
        
        setStats({
          products: productsRes.data.data.length,
          clients: clientsRes.data.data.length,
          quotes: 0, // Placeholder
          contacts: 0 // Placeholder
        });
      } catch (err) {
        console.error('Error fetching stats:', err);
        setError('Unable to load statistics. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div style={{ 
            width: '50px', 
            height: '50px', 
            border: '5px solid #f3f3f3',
            borderTop: '5px solid #1E3A8A',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }}></div>
          <p style={{ marginTop: '20px', color: '#666' }}>Loading...</p>
        </div>
      </Container>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 8, mt: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#1E3A8A' }}>
            Welcome to CV. Brighten Indonesia
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Your trusted partner for premium household chemicals solutions across Java and Bali
          </Typography>
        </motion.div>
      </Box>

      {/* Stats Section */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card sx={{ textAlign: 'center', p: 3, boxShadow: 0, border: '1px solid #e0e0e0' }}>
              <Typography variant="h4" color="primary" sx={{ fontWeight: 600 }}>
                {stats.products}+
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Products
              </Typography>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card sx={{ textAlign: 'center', p: 3, boxShadow: 0, border: '1px solid #e0e0e0' }}>
              <Typography variant="h4" color="primary" sx={{ fontWeight: 600 }}>
                {stats.clients}+
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Clients Served
              </Typography>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card sx={{ textAlign: 'center', p: 3, boxShadow: 0, border: '1px solid #e0e0e0' }}>
              <Typography variant="h4" color="primary" sx={{ fontWeight: 600 }}>
                10+
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Years Experience
              </Typography>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card sx={{ textAlign: 'center', p: 3, boxShadow: 0, border: '1px solid #e0e0e0' }}>
              <Typography variant="h4" color="primary" sx={{ fontWeight: 600 }}>
                2
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Islands Coverage
              </Typography>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Services Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 600 }}>
          Our Premium Services
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  boxShadow: 0, 
                  border: '1px solid #e0e0e0',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  '&:hover': {
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#1E3A8A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                      <span style={{ fontSize: 24 }}>🧼</span>
                    </Box>
                  </Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Premium Chemicals
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    High-quality household chemicals for hotels, restaurants, hospitals, and outsourcing companies.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  boxShadow: 0, 
                  border: '1px solid #e0e0e0',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  '&:hover': {
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                      <span style={{ fontSize: 24 }}>🚚</span>
                    </Box>
                  </Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Nationwide Delivery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Reliable delivery services across Java and Bali islands with on-time guarantee.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  boxShadow: 0, 
                  border: '1px solid #e0e0e0',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  '&:hover': {
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                      <span style={{ fontSize: 24 }}>🛡️</span>
                    </Box>
                  </Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Quality Assurance
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ISO certified products with strict quality control and safety standards.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <Box sx={{ textAlign: 'center', py: 6, bgcolor: '#f8f9fa', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          Ready to Elevate Your Cleaning Standards?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Contact us today for a customized solution for your business
        </Typography>
        <Box>
          <button 
            style={{
              background: '#1E3A8A', 
              color: 'white', 
              padding: '12px 30px', 
              border: 'none', 
              borderRadius: 50, 
              fontSize: 16, 
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#1E40AF'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#1E3A8A'}
            onClick={() => window.location.href = '/contact'}
          >
            Get Started
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;