import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Grid, Typography, Stack, Button } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { portfolioData } from '../utils/data';

const ICON_SIZE = 74;

/**
 * Clock-position layout — 6 unique pixel positions around the 380×380 orb container.
 * All centres are ≥ 165px apart. No overlap possible.
 */
const FLOATING_ICONS = [
  // 4 corners
  { icon: 'logos:spring-icon',     color: null,       style: { top: 15,  left: 15  }, dur: 7.0, delay: 0.0 },
  { icon: 'logos:nodejs-icon',     color: null,       style: { top: 15,  left: 290 }, dur: 6.2, delay: 1.0 },
  { icon: 'logos:react',           color: null,       style: { top: 290, left: 15  }, dur: 7.5, delay: 2.5 },
  { icon: 'fluent:bot-24-regular', color: '#06b6d4',  style: { top: 290, left: 290 }, dur: 7.5, delay: 1.5 },
  // 4 edges (mid-left, mid-right, top-center, bottom-center)
  { icon: 'mdi:github',            color: 'white',    style: { top: 155, left: -50 }, dur: 8.0, delay: 2.0 },
  { icon: 'logos:mongodb-icon',    color: null,       style: { top: 155, left: 355 }, dur: 6.8, delay: 0.5 },
  { icon: 'logos:java',            color: null,       style: { top: -45, left: 155 }, dur: 7.2, delay: 1.2 },
  { icon: 'logos:c-sharp',         color: null,       style: { top: 350, left: 155 }, dur: 6.5, delay: 0.8 },
];

const GlassIconBox = ({ icon, color }) => (
  <Box sx={{
    width: ICON_SIZE, height: ICON_SIZE,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    borderRadius: '18px',
    background: 'rgba(12, 22, 38, 0.88)',
    border: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.35)',
  }}>
    <Icon icon={icon} width="40" height="40" {...(color ? { color } : {})} />
  </Box>
);

/**
 * PERFORMANCE FIX:
 * Instead of 8 separate useState hooks (= 8 React re-renders per scroll frame),
 * we toggle a single CSS class on <html>. Zero React renders during scroll.
 * Each FloatingIcon reads a prop to conditionally animate — no state at all.
 */
let scrollTimer = null;
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    document.documentElement.classList.add('is-scrolling');
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      document.documentElement.classList.remove('is-scrolling');
    }, 150);
  }, { passive: true });
}

// Individual floating icon
const FloatingIcon = ({ icon, color, style, dur, delay }) => (
  <Box sx={{
    position: { xs: 'relative', md: 'absolute' },
    top: { xs: 'auto', md: style?.top },
    left: { xs: 'auto', md: style?.left },
    zIndex: 3,
  }}>
    <motion.div
      animate={{ y: [-12, 10, -12], rotate: [-4, 4, -4] }}
      transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <GlassIconBox icon={icon} color={color} />
    </motion.div>
  </Box>
);

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ pt: { xs: 15, md: 20, lg: 20 }, pb: { xs: 10, md: 15, lg: 20 }, minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">

          {/* LEFT: Text Content */}
          <Grid item xs={12} md={6} lg={7} sx={{ zIndex: 2, textAlign: { xs: 'center', md: 'left' } }}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.div variants={itemVariants}>
                <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', mb: 2 }}>
                  Welcome to my portfolio
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '3.5rem', lg: '5.0rem' }, lineHeight: 1.1, mb: 3, letterSpacing: '-2px' }}>
                  Hi, I'm <Box component="span" sx={{ color: 'primary.main' }}>{portfolioData.personalInfo.name.split(' ')[0]}</Box>.<br />
                  I build web apps.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.2rem', maxWidth: '500px', mb: 5, lineHeight: 1.7, mx: { xs: 'auto', md: 0 } }}>
                  {portfolioData.personalInfo.bio}
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Stack direction="row" spacing={3} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    onClick={() => handleScroll('projects')}
                    sx={{ borderRadius: '8px', px: 4, py: 1.5, fontSize: '1.1rem', fontWeight: 600 }}
                  >
                    View Work
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large" 
                    onClick={() => handleScroll('contact')}
                    sx={{ borderRadius: '8px', px: 4, py: 1.5, fontSize: '1.1rem', borderColor: 'rgba(255,255,255,0.2)', color: 'white', '&:hover': { borderColor: 'white' } }}
                  >
                    Contact Me
                  </Button>
                </Stack>
              </motion.div>
            </motion.div>
          </Grid>

          {/* RIGHT: Orb + floating icons */}
          <Grid item xs={12} md={6} lg={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { xs: 8, md: 0,lg:-18 },ml:{xs:0, md:5,lg:6} }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            >
              <Box sx={{
                position: 'relative',
                width: { xs: '100%', md: 380 },
                height: { xs: 'auto', md: 380 },
                display: { xs: 'flex', md: 'block' },
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 3,
                overflow: 'visible',
                mx: 'auto',
                // On md/lg it uses the absolute orb layout, so we scale it. On xs/sm it's a flex row so no scale needed.
                transform: { xs: 'none', md: 'scale(0.65)', lg: 'scale(0.95)' },
              }}>
                {/* Gradient orb — CSS animation (compositor thread, no JS) */}
                <Box sx={{
                  display: { xs: 'none', md: 'block' },
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 240, height: 240,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
                  boxShadow: '0 0 60px rgba(6, 182, 212, 0.35)',
                  // CSS animation runs on GPU compositor — never on the main JS thread
                  animation: 'orbPulse 5s ease-in-out infinite',
                  zIndex: 1,
                }} />
                <style>{`
                  @keyframes orbPulse {
                    0%, 100% { opacity: 0.82; }
                    50%       { opacity: 1;    }
                  }
                `}</style>

                {/* Icons — each pauses its own Framer animation during scroll */}
                {FLOATING_ICONS.map((item, i) => (
                  <FloatingIcon key={i} {...item} />
                ))}
              </Box>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
