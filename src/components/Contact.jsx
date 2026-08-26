import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { portfolioData } from '../utils/data';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          form.current.reset();
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus('error');
          console.error('FAILED...', error.text);
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      );
  };

  const textFieldSx = {
    '& .MuiOutlinedInput-root': {
      color: 'white',
      bgcolor: 'rgba(255,255,255,0.03)',
      borderRadius: '12px',
      '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
      '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
      '&.Mui-focused fieldset': { borderColor: 'primary.main' },
    },
    '& .MuiInputLabel-root': { color: 'text.secondary' },
    '& .MuiInputLabel-root.Mui-focused': { color: 'primary.main' }
  };

  const contactLinks = [
    { icon: 'mdi:email-outline',  label: 'Email',    value: portfolioData.personalInfo.email,    href: `mailto:${portfolioData.personalInfo.email}` },
    { icon: 'mdi:github',         label: 'GitHub',   value: 'github.com',                        href: portfolioData.personalInfo.github },
    { icon: 'mdi:linkedin',       label: 'LinkedIn', value: 'linkedin.com',                      href: portfolioData.personalInfo.linkedin },
    { icon: 'mdi:facebook',       label: 'Facebook', value: 'facebook.com',                      href: portfolioData.personalInfo.facebook },
    { icon: 'mdi:whatsapp',       label: 'WhatsApp', value: portfolioData.personalInfo.whatsapp, href: `https://wa.me/${portfolioData.personalInfo.whatsapp.replace('+', '')}` },
  ];

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, position: 'relative' }}>
      <Container maxWidth="lg">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>

          {/* ── Section Header ── */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <motion.div variants={itemVariants}>
              <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', mb: 2 }}>
                Get In Touch
              </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 3 }}>
                Let's Work <Box component="span" sx={{ color: 'primary.main' }}>Together.</Box>
              </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}>
                Have a project in mind, looking for a developer, or just want to say hi?
                Feel free to reach out — I'm always open to new opportunities.
              </Typography>
            </motion.div>
          </Box>

          {/* ── Row 1: 3 Contact Info Chips ── */}
          <motion.div variants={itemVariants}>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' },
              gap: 2,
              mb: 2,
            }}>
              {contactLinks.slice(0, 3).map(({ icon, label, value, href }) => (
                <Box
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Connect with me via ${label}`}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2.5,
                    borderRadius: '16px',
                    bgcolor: 'rgba(15, 23, 42, 0.5)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                    '&:hover': {
                      border: '1px solid rgba(6, 182, 212, 0.4)',
                      bgcolor: 'rgba(6, 182, 212, 0.06)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Box sx={{
                    width: 44, height: 44, borderRadius: '10px', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    bgcolor: 'rgba(6, 182, 212, 0.12)',
                    color: 'primary.main',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                  }}>
                    <Icon icon={icon} width="22" height="22" />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.3 }}>
                      {label}
                    </Typography>
                    <Typography sx={{ color: 'text.primary', fontWeight: 600, fontSize: '0.88rem' }}>
                      {value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </motion.div>

          {/* ── Row 2: Last 2 chips centered ── */}
          <motion.div variants={itemVariants}>
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              gap: 2,
              mb: 4,
            }}>
              {contactLinks.slice(3).map(({ icon, label, value, href }) => (
                <Box
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Connect with me via ${label}`}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    borderRadius: '14px',
                    bgcolor: 'rgba(15, 23, 42, 0.5)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                    flex: '0 1 calc(33.333% - 8px)',
                    minWidth: { xs: '100%', sm: 'auto' },
                    '&:hover': {
                      border: '1px solid rgba(6, 182, 212, 0.4)',
                      bgcolor: 'rgba(6, 182, 212, 0.06)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Box sx={{
                    width: 44, height: 44, borderRadius: '10px', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    bgcolor: 'rgba(6, 182, 212, 0.12)',
                    color: 'primary.main',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                  }}>
                    <Icon icon={icon} width="22" height="22" />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.3 }}>
                      {label}
                    </Typography>
                    <Typography sx={{ color: 'text.primary', fontWeight: 600, fontSize: '0.88rem' }}>
                      {value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </motion.div>

          {/* ── Full-width Contact Form ── */}
          <motion.div variants={itemVariants}>
            <Box ref={form} onSubmit={sendEmail} component="form" sx={{
              p: { xs: 3, sm: 5 },
              borderRadius: '24px',
              bgcolor: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            }}>
              <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 2,
              }}>
                {/* Row 1 */}
                <TextField required name="first_name" label="FIRST NAME"    variant="outlined" sx={textFieldSx} />
                <TextField required name="last_name"  label="LAST NAME"     variant="outlined" sx={textFieldSx} />

                {/* Row 2 */}
                <TextField required name="email" type="email" label="EMAIL ADDRESS" variant="outlined" sx={textFieldSx} />
                <TextField required name="phone"      label="PHONE NUMBER"  variant="outlined" sx={textFieldSx} />

                {/* Row 3 — full width */}
                <TextField
                  required
                  name="message"
                  label="ENTER YOUR MESSAGE"
                  variant="outlined"
                  multiline
                  rows={5}
                  sx={{ ...textFieldSx, gridColumn: '1 / -1' }}
                />

                {/* Row 4 — submit full width */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="contained"
                  color={submitStatus === 'success' ? 'success' : submitStatus === 'error' ? 'error' : 'primary'}
                  size="large"
                  sx={{
                    gridColumn: '1 / -1',
                    py: 1.8,
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    letterSpacing: '2px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {isSubmitting ? 'SENDING...' : submitStatus === 'success' ? 'MESSAGE SENT!' : submitStatus === 'error' ? 'ERROR!' : 'SUBMIT'}
                </Button>
              </Box>
            </Box>
          </motion.div>

        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
