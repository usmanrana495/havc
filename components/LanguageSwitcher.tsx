// components/LanguageSwitcher.tsx
'use client';

import { useLocale } from 'next-intl';
import { MenuItem, Select, FormControl } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const locales = ['en', 'ar'];
const defaultLocale = 'en';

const LanguageSwitcher = () => {
  const locale = useLocale(); // Get the current locale from NextIntl
  const router = useRouter();
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/en';

  console.log('pathname....', pathname);

  // State to manage the selected locale
  const [selectedLocale, setSelectedLocale] = useState<string>(locale || defaultLocale);

  // Set the selected locale from the current locale
  useEffect(() => {
    setSelectedLocale(locale || defaultLocale);
  }, [locale]);

  const handleChange = (e: any) => {
    const newLocale = e.target.value;

    // Forcefully update the URL and reload the page
    const pathParts = pathname.split('/').filter(Boolean);

    // If the first part is a locale, remove it
    if (locales.includes(pathParts[0])) {
      pathParts.shift();
    }

    // Reconstruct the path with the new locale
    let newPath = '/' + pathParts.join('/');
    if (newPath === '/') newPath = '';

    // Add the new locale prefix if it's not the default
    if (newLocale !== defaultLocale) {
      newPath = `/${newLocale}${newPath}`;
    }

    // If no path, go to the root
    if (!newPath) newPath = '/en';

    console.log('newPath....', newPath);

    // Update the URL and reload the page
    window.location.href = newPath;
  };

  return (
    <FormControl variant="outlined" size="small">
      <Select
        value={selectedLocale} // Set the locale from the state
        onChange={handleChange}
        IconComponent={KeyboardArrowDownIcon}
        startAdornment={<LanguageIcon sx={{ mr: 1, fontSize: '1.2rem' }} />}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ar" dir="rtl">العربية</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;
