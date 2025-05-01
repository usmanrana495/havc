'use client';

import { Box, Grid, Typography, Container, Card, CardContent, Avatar } from '@mui/material';
import { useTranslations } from 'next-intl';
const team = [
  { name: 'Ali Haider', title: 'HVAC Engineer' },
  { name: 'Shahid ', title: 'Repair Specialist' },
  { name: 'Bilal', title: 'Cooling Expert' },
  { name: 'Ali Haider', title: 'Senior Technician' },
];

const Team = () => {
  const t = useTranslations();

  return (
    <Box py={8} bgcolor="#f9f9f9">
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          {t('team.ourProfessionalExpertTeam')}
        </Typography>
        <Grid container spacing={4} mt={2}>
          {team.map((member, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card sx={{ textAlign: 'center', py: 2 }}>
                <Avatar src={`/images/team${i + 1}.jpg`} sx={{ width: 80, height: 80, mx: 'auto' }} />
                <CardContent>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2">{member.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
