import React, { useState } from 'react';
import { Box, Fab, Tooltip, useTheme, useMediaQuery } from '@mui/material';
import { WhatsApp as WhatsAppIcon, Phone as PhoneIcon, Mail as MailIcon } from '@mui/icons-material';

const FloatingActionButtons = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const actions = [
    {
      icon: <WhatsAppIcon />,
      label: 'WhatsApp',
      color: 'success',
      href: 'https://wa.me/6281234567890'
    },
    {
      icon: <PhoneIcon />,
      label: 'Call Us',
      color: 'primary',
      href: 'tel:6281234567890'
    },
    {
      icon: <MailIcon />,
      label: 'Email',
      color: 'secondary',
      href: 'mailto:info@brighten-indonesia.com'
    }
  ];

  return (
    <>
      <Fab
        onClick={() => setOpen(!open)}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
          background: '#1E3A8A',
          '&:hover': {
            background: '#1E40AF'
          }
        }}
      >
        <WhatsAppIcon />
      </Fab>
      
      {open && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column-reverse',
            gap: 1
          }}
        >
          {actions.map((action, index) => (
            <Tooltip
              key={index}
              title={action.label}
              placement="left"
              arrow
            >
              <Fab
                size="small"
                color={action.color}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  position: 'relative',
                  transform: `translateY(${index * 60}px)`,
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(${index * 60}px) scale(1.1)`
                  }
                }}
              >
                {action.icon}
              </Fab>
            </Tooltip>
          ))}
        </Box>
      )}
    </>
  );
};

export default FloatingActionButtons;