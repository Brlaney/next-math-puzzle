# Next-TS 

## A Next.js template repository pre-configured with my go-to frontend stack

- Typescript (easier debugging, clean & consistant code)
- Scss  (custom themes, mixins, & more)
- UiKit (classes, components, & styling)

## Current issues:

My text editor (Visual Studio Code) is currently giving me and error in each file that imports anything from react. For example:

```jsx
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import 'uikit/dist/js/uikit.js';
import 'uikit/dist/css/uikit.css';
import '@/styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence>
      <Layout>
        <Component
          {...pageProps}
          key={router.route}
        />
      </Layout>
    </AnimatePresence>
  )
};
```

In the first line of the example above, 'react' is underlined with the red squiggly lines we all have come to loathe. 

The error message given by my editor is the following:

`Cannot find module 'react' or its corresponding type declarations.ts(2307)`
