'use client';

import { Box, Typography, Grid, Container } from '@mui/material';
import { useTranslations } from 'next-intl';

const About = () => {
    const t = useTranslations();
  return (
    <Box 
      py={8} 
      sx={{ 
        backgroundColor: 'rgba(245, 245, 245, 0.9)',
        backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(245,245,245,0.9))',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          backgroundImage: 'url("/images/hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
          zIndex: 0
        }
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img 
              src="/images/about.avif" 
              alt="About us" 
              style={{ 
                width: '100%', 
                borderRadius: 8,
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }} 
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom sx={{ color: '#333' }}>
              {t('about.headline')}
            </Typography>
            <Typography variant="h6" paragraph sx={{ color: '#555' }}>
              {t('about.details')}
            </Typography>
            <ul style={{ padding: 0 }}>
              <li style={{ 
                fontSize: '1.2rem', 
                marginBottom: '1rem',
                color: '#444',
                fontWeight: 500
              }}>
                {t('about.list.ventilation')}
              </li>
              <li style={{ 
                fontSize: '1.2rem', 
                marginBottom: '1rem',
                color: '#444',
                fontWeight: 500
              }}>
                {t('about.list.airQuality')}
              </li>
              <li style={{ 
                fontSize: '1.2rem', 
                marginBottom: '1rem',
                color: '#444',
                fontWeight: 500
              }}>
                {t('about.list.consulting')}
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
