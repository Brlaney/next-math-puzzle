import React from 'react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
// import 'uikit/dist/js/uikit.js';
import 'uikit/dist/css/uikit.css';
import '@/styles/globals.scss';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  )
};
