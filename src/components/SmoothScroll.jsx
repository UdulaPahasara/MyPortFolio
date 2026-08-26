import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroll = ({ children }) => {
  const rafIdRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo — smooth but not sluggish
      smooth: true,
      smoothTouch: false,      // touch devices scroll natively — no jank
      touchMultiplier: 1.5,
      wheelMultiplier: 0.9,    // slightly less than 1 to feel lighter
      lerp: 0.08,              // lower = resolves faster, frees JS thread sooner
    });

    // Use a single named RAF that is properly cancelled on cleanup
    const tick = (time) => {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      // Cancel pending frame before destroying to avoid memory leaks
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
