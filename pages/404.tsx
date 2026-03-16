import Head from 'next/head';
import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { NotFoundTitle } from '@/components/NotFound/NotFoundTitle';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Are We Screen Tearing Yet?</title>
        <meta name="description" content="Page not found" />
      </Head>

      <Header />

      <main>
        <NotFoundTitle />
      </main>

      <Footer />
    </>
  );
}
