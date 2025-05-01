"use client"

import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HeroBanner from '@/components/HeroBanner';
import About from '../../components/About';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <ContactForm />
      <Footer />

      {/* Floating Action Button (FAB) for language switcher */}
      <Fab size='large'
        sx={{
          position: 'fixed',
          bottom: 50,
          right: 50,
          zIndex: 1000,
          backgroundColor: '#25D366',
          '&:hover': {
            backgroundColor: '#128C7E'
          }
        }}
        onClick={() => window.open('https://wa.me/966566139956', '_blank')}
      >
        <WhatsAppIcon fontSize='large' sx={{ color: 'white' }} />
      </Fab>
    </>
  );
}
