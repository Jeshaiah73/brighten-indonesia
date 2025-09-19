import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { AuthContext } from '../../context/AuthContext';
import ThemeToggle from './ThemeToggle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Products', path: '/products' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Clients', path: '/clients' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
    ...(user?.role === 'admin' ? [{ label: 'Admin', path: '/admin' }] : [])
  ];

  const authItems = user ? [
    { label: `Welcome, ${user.name}`, type: 'text' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Logout', action: handleLogout, type: 'button' }
  ] : [
    { label: 'Login', path: '/login' },
    { label: 'Register', path: '/register' }
  ];

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{ 
          background: theme.palette.mode === 'light' 
            ? 'rgba(255, 255, 255, 0.8)' 
            : 'rgba(30, 41, 59, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 4 } }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography 
                variant="h6" 
                component={Link} 
                to="/" 
                style={{ 
                  textDecoration: 'none', 
                  color: theme.palette.primary.main, 
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  '&:hover': { color: theme.palette.primary.dark }
                }}
              >
                CV. Brighten Indonesia
              </Typography>
            </Box>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 4 }}>
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  component={item.path ? Link : 'button'}
                  to={item.path}
                  onClick={item.action || closeMobileMenu}
                  sx={{ 
                    mx: 1,
                    fontWeight: 500,
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      width: 0,
                      height: '2px',
                      backgroundColor: theme.palette.primary.main,
                      transform: 'translateX(-50%)',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover': {
                      color: theme.palette.primary.dark,
                      '&:after': {
                        width: '100%',
                      },
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {authItems.map((item, index) => (
                <React.Fragment key={index}>
                  {item.type === 'text' ? (
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary',
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </Typography>
                  ) : item.type === 'button' ? (
                    <Button 
                      color="inherit" 
                      onClick={item.action}
                      sx={{ 
                        fontWeight: 500,
                        '&:hover': { color: theme.palette.primary.dark }
                      }}
                    >
                      {item.label}
                    </Button>
                  ) : (
                    <Button 
                      color="inherit" 
                      component={Link} 
                      to={item.path}
                      onClick={closeMobileMenu}
                      sx={{ 
                        fontWeight: 500,
                        '&:hover': { color: theme.palette.primary.dark }
                      }}
                    >
                      {item.label}
                    </Button>
                  )}
                </React.Fragment>
              ))}
              
              <ThemeToggle />
              
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: 'flex', md: 'none' } }}
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </motion.div>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: theme.palette.background.paper,
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                component={item.path ? Link : 'button'}
                to={item.path}
                onClick={item.action || closeMobileMenu}
                sx={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  py: 2,
                  mx: 0,
                  mb: 1,
                  fontWeight: 500,
                  color: theme.palette.text.primary,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          
          <Box sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 2, mt: 2 }}>
            {authItems.map((item, index) => (
              <React.Fragment key={index}>
                {item.type === 'text' ? (
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      display: 'block',
                      py: 2,
                      color: theme.palette.text.secondary,
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </Typography>
                ) : item.type === 'button' ? (
                  <Button 
                    color="inherit" 
                    onClick={item.action}
                    sx={{ 
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      py: 2,
                      mb: 1,
                      fontWeight: 500,
                      '&:hover': { color: theme.palette.primary.dark }
                    }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Button 
                    color="inherit" 
                    component={Link} 
                    to={item.path}
                    onClick={closeMobileMenu}
                    sx={{ 
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      py: 2,
                      mb: 1,
                      fontWeight: 500,
                      '&:hover': { color: theme.palette.primary.dark }
                    }}
                  >
                    {item.label}
                  </Button>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Header;