'use client';

import { Box, Grid, Typography, Container, Paper } from '@mui/material';
import { Build, AcUnit, LocalHospital } from '@mui/icons-material';
import { useTranslations } from 'next-intl';


const Services = () => {
    const t=useTranslations();

const services = [
    {
      icon: <Build fontSize="large" color="primary" />,
      title: t('services.AC Performance Solutions'),
    },
    {
      icon: <LocalHospital fontSize="large" color="primary" />,
      title: t('services.Indoor Air Quality Testing'),
    },
    {
      icon: <AcUnit fontSize="large" color="primary" />,
      title: t('services.Chill Cool Protection'),
    },
  ];
  return (
    <Box py={8} bgcolor="#f9f9f9">
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          {t('services.title')}
        </Typography>
        <Grid container spacing={4} mt={2}>
          {services.map((service, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                {service.icon}
                <Typography variant="h6" mt={2}>
                  {service.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
