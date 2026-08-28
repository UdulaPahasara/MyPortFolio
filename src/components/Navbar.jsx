import React, { useState, useEffect, useContext } from 'react';
import { Box, Container, Stack, Typography, Button, IconButton, useTheme } from '@mui/material';
import { Icon } from '@iconify/react';
import { portfolioData } from '../utils/data';
import profileImg from '../assets/Profile/profile.webp';
import { ThemeContext } from '../theme/ThemeContext';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('About');
  const { mode, toggleTheme } = useContext(ThemeContext);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['About', 'Skills', 'Projects', 'Contact'];
      let current = 'About';

      // Check if user is at the very bottom of the page
      if (window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 50) {
        setActiveSection('Contact');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          // Offset of 120 gives a little buffer below the 80px navbar
          if (rect.top <= 120) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    
    const resizeObserver = new ResizeObserver(() => {
      handleScroll();
    });
    resizeObserver.observe(document.documentElement);

    handleScroll(); // Call once on mount to set initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <Box component="header" sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, backdropFilter: 'blur(12px)', borderBottom: mode === 'dark' ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)', bgcolor: mode === 'dark' ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.8)' }}>
      <Container maxWidth="lg">
        {/* Outer flex container */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 80 }}>
          
          {/* LEFT: Profile Photo & Logo (Takes up 1/3 space) */}
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              component="img"
              src={profileImg}
              alt="Udula Pehesara Profile Portrait"
              sx={{
                width: 48,
                height: 48,
                minWidth: 48,
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center top',
                border: '2px solid',
                borderColor: 'primary.main',
                bgcolor: 'rgba(255,255,255,0.05)'
              }}
            />
            <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: '-0.5px', display: { xs: 'none', sm: 'block' } }}>
              {portfolioData.personalInfo.name.split(' ')[0]}<Box component="span" sx={{ color: 'primary.main' }}>.</Box>
            </Typography>
          </Box>

          {/* CENTER: Navigation Links (Takes up 1/3 space) */}
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 4 }}>
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <Typography 
                key={item} 
                variant="body2" 
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    const offset = 80; // Height of the fixed navbar
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                sx={{ 
                  color: activeSection === item ? 'primary.main' : 'text.secondary', 
                  fontWeight: activeSection === item ? 700 : 500, 
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.2s',
                  '&:hover': { color: 'primary.main' },
                  '&::after': activeSection === item ? {
                    content: '""',
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    width: '100%',
                    height: 2,
                    bgcolor: 'primary.main',
                    borderRadius: 1
                  } : {}
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* RIGHT: Buttons (Takes up 1/3 space) */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2 }}>
            <IconButton aria-label="Toggle light/dark mode" onClick={toggleTheme} sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
              <Icon icon={mode === 'dark' ? 'ph:sun-fill' : 'ph:moon-fill'} width="24" />
            </IconButton>
            <IconButton aria-label="Visit my GitHub profile" href={portfolioData.personalInfo.github} target="_blank" sx={{ color: 'text.secondary', display: { xs: 'none', sm: 'flex' }, '&:hover': { color: 'text.primary' } }}>
              <Icon icon="mdi:github" width="24" />
            </IconButton>
            <Button variant="contained" color="primary" sx={{ borderRadius: '8px' }}>
              Resume
            </Button>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
