'use client';

import { useTranslations } from 'next-intl';
import { Box, Typography, Button, Container } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageSwitcher from './LanguageSwitcher';

const HeroBanner = () => {
  const t = useTranslations();

  return (
    <Box sx={{ 
      position: 'relative',
      height: 600,
      display: 'flex',
      alignItems: 'center',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))',
        zIndex: 1
      }
    }}>
      {/* Language Switcher positioned in top-right corner */}
      <Box 
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          zIndex: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '8px',
          padding: '6px 12px',
          border: '2px solid #FF5722',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
        }}
      >
        <LanguageSwitcher />
      </Box>
         
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/images/hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Typography 
          variant="h1" 
          sx={{
            color: '#ffffff',
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)',
            fontSize: { xs: '2.5rem', md: '4.5rem' },
            fontWeight: 'bold'
          }}
          gutterBottom
        >
          {t('hero.title')}
        </Typography>
        <Typography variant="h5" sx={{
          color: '#ffffff',
          textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)',
        }} mb={3}>
          {t('hero.subtitle').split(/(\d[\d\s]+)/).map((part, index) => 
            /^\d[\d\s]+$/.test(part) ? (
              <Box
                key={index}
                component="span"
                sx={{
                  color: '#FF5722',
                  fontWeight: 'bold',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  marginLeft: '8px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                  border: '2px solid #FF5722',
                  fontSize: '1.1em',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    backgroundColor: '#FF5722',
                    color: '#ffffff'
                  }
                }}
              >
                {part}
              </Box>
            ) : part
          )}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          startIcon={<PhoneIcon sx={{ fontSize: '1.5rem' }} />}
          sx={{ 
            fontWeight: 'bold',
            textTransform: 'none',
            fontSize: '1.2rem',
            py: 2,
            px: 4
          }}
          onClick={() => window.open('tel:+966566139956', '_blank')}
        >
          {t('hero.button')}
        </Button>
      </Container>
    </Box>
  );
};

export default HeroBanner;