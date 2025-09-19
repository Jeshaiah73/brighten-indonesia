import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const Loading = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: 'background.default',
      color: 'text.primary'
    }}>
      <Box sx={{ position: 'relative', mb: 3 }}>
        <CircularProgress 
          size={60} 
          thickness={4}
          sx={{ 
            color: 'primary.main',
            animation: 'spin 1s linear infinite'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'background.paper',
          }}
        />
      </Box>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Loading...
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Please wait while we load the application
      </Typography>
    </Box>
  );
};

export default Loading;