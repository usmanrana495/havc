
'use client';

import * as React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import theme from '@/styles/theme';

export default function ThemeRegistry({
  children,
  direction = 'ltr'
}: {
  children: React.ReactNode;
  direction?: 'ltr' | 'rtl';
}) {
  const cache = React.useMemo(() => {
    return createCache({
      key: direction === 'rtl' ? 'mui-rtl' : 'mui',
      stylisPlugins: direction === 'rtl' ? [prefixer, rtlPlugin] : []
    });
  }, [direction]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={{ ...theme, direction }}>
        <CssBaseline />
        <div dir={direction}>{children}</div>
      </ThemeProvider>
    </CacheProvider>
  );
}
