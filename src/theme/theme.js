import { createTheme } from '@mui/material/styles';

export const getAppTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#06b6d4', // Cyan 500
    },
    secondary: {
      main: '#8b5cf6', // Violet 500
    },
    background: {
      default: mode === 'dark' ? '#0f172a' : '#f8fafc',
      paper: mode === 'dark' ? '#1e293b' : '#ffffff',
    },
    text: {
      primary: mode === 'dark' ? '#f8fafc' : '#0f172a',
      secondary: mode === 'dark' ? '#94a3b8' : '#475569',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Geist", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Geist", sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Geist", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.5px',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 24px',
        },
        contained: {
          boxShadow: '0 4px 14px 0 rgba(6, 182, 212, 0.39)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(6, 182, 212, 0.23)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // Remove default MUI overlay
          backgroundColor: mode === 'dark' ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(12px)',
          border: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});
