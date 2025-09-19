import React from 'react';
import { Box } from '@mui/material';
import Header from './common/Header';
import Footer from './common/Footer';

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box 
        component="main" 
        sx={{ 
          flex: 1,
          width: '100%',
          backgroundColor: '#f8f9fa'
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;