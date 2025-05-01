'use client';

import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { useTranslations } from 'next-intl';



const Testimonials = () => {

    const t=useTranslations();
    const testimonials = [
        {
          name: 'Ahmed',
          review: t('testimonials.testimonial1'),
        },
        {
          name: 'Salwa',
          review: t('testimonials.testimonial2'),
        },
        {
          name: 'Hasan',
          review: t('testimonials.testimonial3'),
        },
      ];
  return (
    <Box py={8}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          {t('testimonials.title')}
        </Typography>
        <Grid container spacing={4} mt={2}>
          {testimonials.map((t, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper sx={{ p: 4 }}>
                <Typography variant="body1" mb={2}>
                  "{t.review}"
                </Typography>
                <Typography variant="subtitle2">{t.name}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
