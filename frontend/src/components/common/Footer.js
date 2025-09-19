import React from 'react';
import { Box, Container, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Mail, Phone, LocationOn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook />, color: '#1877f2', url: '#' },
    { icon: <Twitter />, color: '#1da1f2', url: '#' },
    { icon: <Instagram />, color: '#e4405f', url: '#' },
    { icon: <LinkedIn />, color: '#0077b5', url: '#' },
  ];

  const quickLinks = [
    { title: 'Products', url: '/products' },
    { title: 'Solutions', url: '/solutions' },
    { title: 'About Us', url: '/about' },
    { title: 'Blog', url: '/blog' },
    { title: 'Contact', url: '/contact' },
  ];

  const supportLinks = [
    { title: 'FAQ', url: '/faq' },
    { title: 'Privacy Policy', url: '#' },
    { title: 'Terms of Service', url: '#' },
    { title: 'Support', url: '#' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        py: 8,
        px: 2,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h6" gutterBottom color="primary">
                CV. Brighten Indonesia
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Your trusted partner for premium household chemicals solutions across Java and Bali.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      component="a"
                      href={social.url}
                      sx={{
                        color: social.color,
                        bgcolor: 'background.paper',
                        border: `2px solid ${social.color}`,
                        '&:hover': {
                          bgcolor: social.color,
                          color: 'white',
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Box>
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={link.url}
                      color="text.secondary"
                      sx={{ display: 'block', py: 0.5 }}
                      underline="hover"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h6" gutterBottom>
                Support
              </Typography>
              <Box>
                {supportLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={link.url}
                      color="text.secondary"
                      sx={{ display: 'block', py: 0.5 }}
                      underline="hover"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Mail color="primary" />
                  <Typography variant="body2" color="text.secondary">
                    info@brighten-indonesia.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Phone color="primary" />
                  <Typography variant="body2" color="text.secondary">
                    +62 21 1234 5678
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <LocationOn color="primary" />
                  <Typography variant="body2" color="text.secondary">
                    Jl. Chemical No. 123<br />
                    Jakarta, Indonesia 12345
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: 1,
            borderColor: 'divider',
            pt: 4,
            mt: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} CV. Brighten Indonesia. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;