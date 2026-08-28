import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, Chip, Stack, Button, Collapse, useTheme, Pagination } from '@mui/material';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { portfolioData } from '../utils/data';

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
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
            flexDirection: { xs: 'column-reverse', md: index % 2 === 0 ? 'row' : 'row-reverse' },
            bgcolor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            alignItems: 'stretch',
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
                minHeight: { xs: '200px', md: '250px' },
                maxHeight: { sm: '300px', md: '350px' },
                border: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
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
                alt={`${project.title} — project screenshot`}
                loading="lazy"
                decoding="async"
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
                  minHeight: { xs: '200px', md: '250px' },
                  maxHeight: { sm: '300px', md: '350px' },
                  border: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
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
                  loading="lazy"
                  decoding="async"
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
              
              <Box sx={{ bgcolor: theme.palette.mode === 'dark' ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)', p: 3, borderRadius: '12px', mb: 3, border: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)' }}>
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
                        <Box sx={{ mt: 3, pt: 3, borderTop: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)' }}>
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
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<Icon icon="mdi:open-in-new" />}
                  sx={{ borderRadius: '8px' }}
                >
                  Visit Site
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
  const [page, setPage] = useState(1);
  const projectsPerPage = 3;
  const pageCount = Math.ceil(portfolioData.projects.length / projectsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const displayedProjects = portfolioData.projects.slice(
    (page - 1) * projectsPerPage,
    page * projectsPerPage
  );

  return (
    <Box sx={{ py: 15 }}>
      <Container maxWidth="lg">
        
        <Box sx={{ mb: 10, textAlign: { xs: 'center', md: 'center' } }}>
          <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', mb: 2 }}>
            Featured Work
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>
            Latest Projects
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {displayedProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
          ))}
        </Grid>

        {pageCount > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
            <Pagination 
              count={pageCount} 
              page={page} 
              onChange={handleChange} 
              color="primary"
              size="large"
              sx={{
                '& .MuiPaginationItem-root': {
                  color: 'text.secondary',
                  '&.Mui-selected': {
                    color: 'white',
                  }
                }
              }}
            />
          </Box>
        )}

      </Container>
    </Box>
  );
};

export default Projects;
