import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Vite 8 uses rolldown — manualChunks must be a function, not an object.
        manualChunks(id) {
          if (id.includes('@mui/material') || id.includes('@emotion/react') || id.includes('@emotion/styled')) {
            return 'vendor-mui';
          }
          if (id.includes('framer-motion')) {
            return 'vendor-motion';
          }
          if (id.includes('@iconify')) {
            return 'vendor-icons';
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})


