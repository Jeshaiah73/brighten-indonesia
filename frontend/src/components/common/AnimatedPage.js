import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Box sx={{ width: '100%' }}>
        {children}
      </Box>
    </motion.div>
  );
};

export default AnimatedPage;