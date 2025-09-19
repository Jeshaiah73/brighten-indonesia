import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, useTheme, useMediaQuery, Button } from '@mui/material';
import { motion } from 'framer-motion';

const SolutionsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const solutions = [
    {
      title: 'Hotel Solutions',
      description: 'Complete cleaning solutions for hotels, resorts, and hospitality businesses.',
      icon: '🏨',
      features: ['Laundry Solutions', 'Housekeeping', 'Disinfection', 'Eco-friendly Products']
    },
    {
      title: 'Restaurant Solutions',
      description: 'Specialized cleaning and sanitizing solutions for food service establishments.',
      icon: '🍽️',
      features: ['Kitchen Cleaning', 'Floor Care', 'Bathroom Sanitation', 'Grease Removal']
    },
    {
      title: 'Healthcare Solutions',
      description: 'Infection control and sanitizing solutions for medical facilities.',
      icon: '🏥',
      features: ['Surface Disinfection', 'Hand Hygiene', 'Laundry', 'Waste Management']
    },
    {
      title: 'Industrial Solutions',
      description: 'Heavy-duty cleaning solutions for manufacturing and industrial facilities.',
      icon: '🏭',
      features: ['Degreasers', 'Floor Cleaners', 'Safety Products', 'Bulk Supply']
    }
  ];

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Industry-Specific Solutions
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Tailored cleaning solutions for every industry
        </Typography>
      </Box>

      {/* Solutions Grid */}
      <Grid container spacing={isMobile ? 2 : 4}>
        {solutions.map((solution, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ fontSize: 48, mb: 2 }}>{solution.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {solution.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {solution.description}
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {solution.features.map((feature, idx) => (
                      <Typography key={idx} variant="body2" sx={{ display: 'block', mb: 1 }}>
                        • {feature}
                      </Typography>
                    ))}
                  </Box>
                  <Button variant="contained" color="primary">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SolutionsPage;