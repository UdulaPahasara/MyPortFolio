import React from 'react';
import { Box, Container, Typography, IconButton, Divider } from '@mui/material';
import { Icon } from '@iconify/react';
import { portfolioData } from '../utils/data';

const Footer = () => {
  const year = new Date().getFullYear();
  const name = portfolioData.personalInfo.name.split(' ')[0];

  const socials = [
    { icon: 'mdi:github',    href: portfolioData.personalInfo.github,   label: 'GitHub' },
    { icon: 'mdi:linkedin',  href: portfolioData.personalInfo.linkedin, label: 'LinkedIn' },
    { icon: 'mdi:facebook',  href: portfolioData.personalInfo.facebook, label: 'Facebook' },
    { icon: 'mdi:whatsapp',  href: `https://wa.me/${portfolioData.personalInfo.whatsapp.replace('+', '')}`, label: 'WhatsApp' },
    { icon: 'mdi:email',     href: `mailto:${portfolioData.personalInfo.email}`, label: 'Email' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        mt: 4,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        bgcolor: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <Container maxWidth="lg">
        
        {/* Social Icons Row */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 3 }}>
          {socials.map(({ icon, href, label }) => (
            <IconButton
              key={label}
              component="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              sx={{
                color: 'text.secondary',
                border: '1px solid rgba(255,255,255,0.08)',
                width: 42, height: 42,
                transition: 'all 0.25s',
                '&:hover': {
                  color: 'primary.main',
                  borderColor: 'primary.main',
                  bgcolor: 'rgba(6, 182, 212, 0.08)',
                  transform: 'translateY(-3px)',
                },
              }}
            >
              <Icon icon={icon} width="20" height="20" />
            </IconButton>
          ))}
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)', mb: 3 }} />

        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', letterSpacing: '0.5px' }}>
            © {year}{' '}
            <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
              {name}
            </Box>
            . Designed & Built with using React & MUI.
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.25)', mt: 0.5, display: 'block' }}>
            All rights reserved.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default Footer;
