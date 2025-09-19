import React from 'react';
import { Container, Typography, Grid, Box, useTheme, useMediaQuery, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '100+', label: 'Clients Served' },
    { value: '20+', label: 'Product Lines' },
    { value: '2', label: 'Islands Coverage' }
  ];

  const values = [
    {
      title: 'Quality',
      description: 'We maintain the highest standards in product quality and safety.',
      icon: '🏆'
    },
    {
      title: 'Innovation',
      description: 'Continuously developing new solutions to meet evolving needs.',
      icon: '💡'
    },
    {
      title: 'Sustainability',
      description: 'Committed to environmentally responsible practices.',
      icon: '🌱'
    },
    {
      title: 'Customer Focus',
      description: 'Putting our clients\' needs at the center of everything we do.',
      icon: '👥'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: `linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)`,
          color: 'white',
          py: { xs: 8, md: 12 },
          px: 2
        }}
      >
        <Container maxWidth="xl">
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h3" component="h1" gutterBottom>
                  About CV. Brighten Indonesia
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                  Leading provider of premium household chemicals solutions since 2014
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, opacity: 0.8 }}>
                  We are committed to delivering high-quality cleaning and sanitation products that meet the needs of businesses across various industries in Indonesia.
                </Typography>
                <Box component="button" sx={{ 
                  background: 'white', 
                  color: '#1E3A8A', 
                  border: 'none', 
                  padding: '12px 24px', 
                  borderRadius: 2, 
                  fontSize: 16, 
                  fontWeight: 600,
                  cursor: 'pointer',
                  '&:hover': { background: '#f0f0f0' }
                }}>
                  Learn More
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box 
                  sx={{ 
                    width: '100%', 
                    height: 300, 
                    background: 'rgba(255,255,255,0.1)', 
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Typography variant="h1" sx={{ fontSize: 120, opacity: 0.3 }}>
                    BI
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={isMobile ? 2 : 4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                  <Typography variant="h4" color="primary" sx={{ fontWeight: 600 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Values Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom textAlign="center">
          Our Core Values
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {values.map((value, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                  <Box sx={{ fontSize: 48, mb: 2 }}>{value.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Mission Statement */}
      <Box sx={{ background: '#f8f9fa', py: 8, px: 2 }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="h2" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
              To provide innovative, high-quality, and sustainable cleaning solutions that help businesses maintain the highest standards of hygiene and cleanliness while protecting the environment.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;