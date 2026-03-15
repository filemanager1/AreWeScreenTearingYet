import '@mantine/core/styles.css';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from '@mantine/core';
import Head from 'next/head';
import { theme } from '@/src/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Are We Screen Tearing Yet?</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
