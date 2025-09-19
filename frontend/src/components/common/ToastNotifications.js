import React, { useState, useEffect } from 'react';
import { Box, Snackbar, Alert, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Close as CloseIcon } from '@mui/icons-material';

const ToastNotifications = () => {
  const [toasts, setToasts] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    // Listen for toast events
    const handleToast = (event) => {
      const { message, type = 'info', duration = 5000 } = event.detail;
      const id = Date.now();
      
      setToasts(prev => [...prev, { id, message, type, duration }]);
      
      // Auto remove after duration
      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
      }, duration);
    };

    window.addEventListener('toast', handleToast);
    return () => window.removeEventListener('toast', handleToast);
  }, []);

  const handleClose = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <Box sx={{ position: 'fixed', top: 20, right: 20, zIndex: 9999 }}>
      {toasts.map((toast) => (
        <Snackbar
          key={toast.id}
          open={true}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          sx={{ 
            position: 'relative',
            mb: 1,
            '& .MuiPaper-root': {
              borderRadius: 2,
              minWidth: 300,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }
          }}
        >
          <Alert 
            severity={toast.type}
            action={
              <IconButton 
                size="small" 
                onClick={() => handleClose(toast.id)}
                sx={{ color: 'inherit' }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          >
            {toast.message}
          </Alert>
        </Snackbar>
      ))}
    </Box>
  );
};

export default ToastNotifications;