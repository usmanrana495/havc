'use client';

import { Box, Typography, TextField, Button, Container, Grid } from '@mui/material';
import { useTranslations } from 'next-intl';

const ContactForm = () => {
  const t = useTranslations();

  return (
    <Box py={8} bgcolor="#f4f6f8">
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          {t('contact.title')}
        </Typography>
        <Grid container spacing={4} justifyContent="center" mt={2}>
          <Grid item xs={12} md={6}>
            <TextField label={t('contact.name')} fullWidth margin="normal" />
            <TextField label={t('contact.email')} fullWidth margin="normal" />
            <TextField label={t('contact.message')} fullWidth multiline rows={4} margin="normal" />
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              {t('contact.submit')}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
