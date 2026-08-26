import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Split large vendor libraries into separate cached chunks.
        // Result: faster initial load + better long-term browser caching.
        manualChunks: {
          // MUI is the largest dep (~300KB). Split it into its own chunk.
          'vendor-mui': ['@mui/material', '@emotion/react', '@emotion/styled'],
          // Framer Motion is ~120KB — separated so it can cache independently.
          'vendor-motion': ['framer-motion'],
          // Iconify is loaded on every section — isolated for efficient caching.
          'vendor-icons': ['@iconify/react'],
        },
      },
    },
    // Raise the chunk warning threshold to suppress warnings for known large deps.
    chunkSizeWarningLimit: 600,
  },
})

