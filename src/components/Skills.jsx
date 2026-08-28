import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { portfolioData } from '../utils/data';

const Skills = () => {
  const theme = useTheme();
  return (
    <Box sx={{ py: 1, bgcolor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.4)' : 'rgba(241, 245, 249, 0.4)' }}>
      <Container maxWidth="lg">

        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', mb: 2 }}>
            My Toolkit
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>
            Technologies &amp; Skills
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}>
            A collection of tools and frameworks I use to bring ideas to life.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card sx={{
                width: { xs: 140, sm: 160, md: 180 },
                height: { xs: 140, sm: 160, md: 180 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                cursor: 'default',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  borderColor: 'primary.main',
                  boxShadow: '0 10px 30px -10px rgba(6, 182, 212, 0.2)',
                }
              }}>
                <CardContent sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{ color: 'text.primary', mb: 2, display: 'flex', justifyContent: 'center' }}>
                    <Icon icon={skill.icon} width="48" height="48" />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', md: '1.1rem' } }}>
                    {skill.name}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default Skills;
