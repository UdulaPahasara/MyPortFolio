import React, { lazy, Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';
import Navbar from './components/Navbar';
import SmoothScroll from './components/SmoothScroll';

// ── Lazy-loaded sections ─────────────────────────────────────────────────────
// Each section becomes its own JS chunk. The browser downloads only what it
// needs — Hero loads immediately; Skills/Projects/Contact load on demand.
const Hero    = lazy(() => import('./components/Hero'));
const Skills  = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer  = lazy(() => import('./components/Footer'));

// Minimal, non-blocking fallback shown while a chunk is downloading
const SectionFallback = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 10 }}>
    <CircularProgress size={32} color="primary" />
  </Box>
);

function App() {
  return (
    <SmoothScroll>
      <Box sx={{ position: 'relative' }}>

        {/* Background gradient orbs — fixed so they never repaint on scroll */}
        <Box
          aria-hidden="true"
          sx={{
            position: 'fixed',
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
          <Suspense fallback={<SectionFallback />}>
            <Box id="about"><Hero /></Box>
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Box id="skills"><Skills /></Box>
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Box id="projects"><Projects /></Box>
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Box id="contact"><Contact /></Box>
          </Suspense>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </Box>

      </Box>
    </SmoothScroll>
  );
}

export default App;
