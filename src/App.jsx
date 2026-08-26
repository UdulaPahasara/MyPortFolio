import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SmoothScroll from './components/SmoothScroll';
import './App.css';

function App() {
  return (
    <SmoothScroll>
      <Box sx={{ position: 'relative' }}>

        {/*
          FIXED: Removed filter:blur(80px/100px) on large elements.
          CSS filter:blur on 600-800px elements forces a full GPU rasterize
          pass on every single scroll frame — the single biggest jank source.
          Replaced with pure radial-gradient backgrounds at lower opacity.
          Visual result is essentially identical but costs nothing to scroll past.
        */}
        <Box
          aria-hidden="true"
          sx={{
            position: 'fixed', // fixed so it doesn't repaint on scroll at all
            top: 0, left: 0,
            width: '100vw', height: '100vh',
            zIndex: 0, pointerEvents: 'none',
            overflow: 'hidden',
          }}
        >
          <Box sx={{
            position: 'absolute', top: '-15%', right: '-10%',
            width: '55vw', height: '55vw',
            borderRadius: '50%',
            // No filter: just a radial gradient — zero GPU cost during scroll
            background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 68%)',
          }} />
          <Box sx={{
            position: 'absolute', top: '35%', left: '-15%',
            width: '65vw', height: '65vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 68%)',
          }} />
        </Box>

        {/* Content Layer */}
        <Box sx={{ position: 'relative', zIndex: 10 }}>
          <Navbar />
          <Box id="about"><Hero /></Box>
          <Box id="skills"><Skills /></Box>
          <Box id="projects"><Projects /></Box>
          <Box id="contact"><Contact /></Box>
        </Box>

      </Box>
    </SmoothScroll>
  );
}

export default App;
