import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, Chip, Stack, Button, Collapse } from '@mui/material';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { portfolioData } from '../utils/data';

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const hasDetails = project.features || project.highlights;

  return (
    <Grid item xs={12}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <Card 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
            bgcolor: 'transparent',
            border: 'none',
            bgcolor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            alignItems: 'stretch', // Stretches left and right columns to equal height
            gap: { xs: 4, md: 8 }
          }}
        >
          {/* Image Side */}
          <Box sx={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
            {/* Main Image */}
            <Box 
              sx={{ 
                flex: 1,
                borderRadius: '20px', 
                overflow: 'hidden', 
                position: 'relative',
                minHeight: { xs: '250px', md: 0 },
                border: '1px solid rgba(255,255,255,0.1)',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(6, 182, 212, 0.1)',
                  transition: 'background 0.3s ease',
                },
                '&:hover::after': {
                  background: 'transparent',
                }
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              />
            </Box>

            {/* Extra Images (Expandable) */}
            {expanded && project.extraImages && project.extraImages.map((img, idx) => (
              <Box 
                key={idx}
                sx={{ 
                  flex: 1,
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  position: 'relative',
                  minHeight: { xs: '250px', md: 0 },
                  border: '1px solid rgba(255,255,255,0.1)',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(6, 182, 212, 0.1)',
                    transition: 'background 0.3s ease',
                  },
                  '&:hover::after': {
                    background: 'transparent',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  image={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  sx={{ 
                    width: '100%', 
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Content Side */}
          <Box sx={{ flex: 1, width: '100%', textAlign: { xs: 'center', md: 'left' }, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardContent sx={{ p: 0 }}>
              <Typography variant="h3" sx={{ mb: 2, fontSize: '2.5rem' }}>
                {project.title}
              </Typography>
              
              <Box sx={{ bgcolor: 'rgba(30, 41, 59, 0.8)', p: 3, borderRadius: '12px', mb: 3, border: '1px solid rgba(255,255,255,0.05)' }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: (expanded && hasDetails) ? 2 : 0 }}>
                  {project.description}
                </Typography>
                
                {hasDetails && (
                  <>
                    <Collapse in={expanded}>
                      {project.features && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 2 }}>
                          {project.features.map((feature, idx) => (
                            <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, textAlign: 'left' }}>
                              <Icon icon="mdi:check-circle" color="#06b6d4" width="20" style={{ marginTop: '4px', flexShrink: 0 }} />
                              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                <Box component="span" sx={{ color: '#fff', fontWeight: 600, mr: 1 }}>{feature.title}:</Box>
                                {feature.desc}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      )}

                      {project.highlights && (
                        <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                          <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', mb: 2, textAlign: 'left' }}>
                            Technical Highlights
                          </Typography>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            {project.highlights.map((highlight, idx) => (
                              <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, textAlign: 'left' }}>
                                <Icon icon="mdi:lightning-bolt" color="#8b5cf6" width="20" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                  {highlight}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      )}
                    </Collapse>
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, mt: expanded ? 3 : 2 }}>
                      <Button 
                        onClick={() => setExpanded(!expanded)}
                        endIcon={<Icon icon={expanded ? "mdi:chevron-up" : "mdi:chevron-down"} />}
                        sx={{ 
                          color: 'primary.main', 
                          textTransform: 'none', 
                          fontWeight: 600,
                          p: 0,
                          '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' }
                        }}
                      >
                        {expanded ? 'Show Less' : 'Read More'}
                      </Button>
                    </Box>
                  </>
                )}
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                {project.tech.map((t, i) => (
                  <Chip 
                    key={i} 
                    label={t} 
                    sx={{ 
                      bgcolor: 'rgba(6, 182, 212, 0.1)', 
                      color: 'primary.main',
                      fontWeight: 600,
                      borderRadius: '6px'
                    }} 
                  />
                ))}
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button 
                  variant="contained" 
                  color="primary"
                  href={project.githubUrl}
                  target="_blank"
                  startIcon={<Icon icon="mdi:github" />}
                  sx={{ borderRadius: '8px' }}
                >
                  Source Code
                </Button>
              </Box>

            </CardContent>
          </Box>

        </Card>
      </motion.div>
    </Grid>
  );
};

const Projects = () => {
  return (
    <Box sx={{ py: 15 }}>
      <Container maxWidth="lg">
        
        <Box sx={{ mb: 10, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', mb: 2 }}>
            Featured Work
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>
            Latest Projects
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default Projects;
