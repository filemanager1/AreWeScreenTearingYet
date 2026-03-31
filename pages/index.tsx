import { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Container, Title, Stack, SimpleGrid, Text, Divider, Box, Group } from '@mantine/core';
import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { ProjectIntro, ProjectQuote } from '@/components/Landing/ProjectIntro';
import { StatsRing } from '@/components/Landing/StatsRing';
import { CompositorTable } from '@/components/Compositor/CompositorTable';
import { InfoModalButton } from '@/components/UI/InfoModalButton';
import { WhyModalContent } from '@/components/Landing/WhyModalContent';
import { LegendModalContent } from '@/components/Landing/LegendModalContent';
import { getCompositors } from '@/src/utils/data';
import { CompositorItem } from '@/src/types/compositor';
import { IconHelp, IconListDetails } from '@tabler/icons-react';

interface HomeProps {
  compositors: CompositorItem[];
}

export default function Home({ compositors }: HomeProps) {
  // Stats
  const mergedCount = compositors.filter(c => c.status === 'Merged').length;
  const idealCount = compositors.filter(c => c.execution === 'Ideal').length;
  const totalCount = compositors.length;

  return (
    <>
      <Head>
        <title>Are We Screen Tearing Yet?</title>
        <meta name="description" content="Tracking the state of Immediate Presentation (screen tearing) support across Linux Wayland compositors." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
          <Container size="lg">
              <ProjectIntro />
          </Container>
        <Container size="lg" pb={80}>
          <Box mb={50}>
              <ProjectQuote />
          </Box>
          <Box mb={30}>
             <StatsRing 
                total={totalCount} 
                merged={mergedCount} 
                ideal={idealCount} 
             />
          </Box>

          <Group justify="center" mb={50} gap="md">
              <InfoModalButton label="Why Tearing?" title="Why Tearing?" icon={<IconHelp size={18}/>}>
                  <WhyModalContent />
              </InfoModalButton>
              <InfoModalButton label="What do these mean?" title="What do these mean?" icon={<IconListDetails size={18}/>}>
                  <LegendModalContent />
              </InfoModalButton>
          </Group>

          <Box mb={60}>
              <CompositorTable data={compositors} />
          </Box>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const compositors = getCompositors();
  return {
    props: {
      compositors,
    },
  };
};
