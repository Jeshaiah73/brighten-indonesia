import React from 'react';
import { IconButton, useTheme, styled } from '@mui/material';
import { Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon } from '@mui/icons-material';
import { useTheme as useAppTheme } from '../../context/ThemeContext';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '50%',
  width: 48,
  height: 48,
  background: theme.palette.mode === 'light' 
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
    : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
}));

const Ripple = styled('span')(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  transform: 'scale(0)',
  animation: 'ripple 0.6s linear',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
}));

const ThemeToggle = () => {
  const theme = useTheme();
  const { darkMode, toggleTheme } = useAppTheme();

  const handleClick = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
    toggleTheme();
  };

  return (
    <StyledIconButton onClick={handleClick} color="inherit">
      {darkMode ? (
        <LightModeIcon sx={{ fontSize: 24, color: '#fff' }} />
      ) : (
        <DarkModeIcon sx={{ fontSize: 24, color: '#fff' }} />
      )}
    </StyledIconButton>
  );
};

export default ThemeToggle;