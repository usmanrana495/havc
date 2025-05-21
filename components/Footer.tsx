'use client';

import { Box, Typography, Grid, Link, Container } from '@mui/material';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations();

  return (
    <Box bgcolor="#0d1b2a" color="white" py={6}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">علي للتبريد Ali Cooling</Typography>
            <Typography variant="body2">
              {t('footer.about')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">{t('footer.services')}</Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="#" color="inherit">{t('footer.acRepair')}</Link></li>
              <li><Link href="#" color="inherit">{t('footer.maintenance')}</Link></li>
              <li><Link href="#" color="inherit">{t('footer.installation')}</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">{t('footer.newsletter')}</Typography>
            <Typography variant="body2">{t('footer.subscribe')}</Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" mt={4}>
          © {new Date().getFullYear()} علي للتبريد Ali Cooling {t('footer.rights')}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
