import { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Container, Box, Group } from '@mantine/core';
import { HeaderTabs } from '@/components/Layout/HeaderTabs';
import { Footer } from '@/components/Layout/Footer';
import { ProjectIntro, ProjectQuote } from '@/components/Landing/ProjectIntro';
import { StatsRing } from '@/components/Landing/StatsRing';
import { CompositorTable } from '@/components/Compositor/CompositorTable';
import { InfoModalButton } from '@/components/UI/InfoModalButton';
import { LegendModalContent } from '@/components/Landing/LegendModalContent';
import { WhyPage } from '@/components/Landing/WhyPage';
import { GuidesPage } from '@/components/Landing/GuidesPage';
import { getCompositors } from '@/src/utils/data';
import { CompositorItem } from '@/src/types/compositor';
import { IconListDetails } from '@tabler/icons-react';

interface HomeProps {
  compositors: CompositorItem[];
}

export default function Home({ compositors }: HomeProps) {
  const [activeTab, setActiveTab] = useState<string>('Home');

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
      <HeaderTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        {activeTab === 'Home' ? (
          <>
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
                <InfoModalButton label="What do these mean?" title="What do these mean?" icon={<IconListDetails size={18}/>}>
                  <LegendModalContent />
                </InfoModalButton>
              </Group>

              <Box mb={60}>
                <CompositorTable data={compositors} />
              </Box>
            </Container>
          </>
        ) : activeTab === 'Why' ? (
          <WhyPage />
        ) : (
          <GuidesPage />
        )}
      </main>

      <Footer />
    </>
  );
}

/* TODO: Change tab navigation to real routes for SEO
 * Currently using SPA-style navigation (all content in index.tsx)
 * When SEO is a priority, create:
 *   - pages/why.tsx (or pages/why/index.tsx)
 *   - Use Next.js Link and proper routing
 *   - Update HeaderTabs to use Next.js Link instead of internal state
 */

export const getStaticProps: GetStaticProps = async () => {
  const compositors = getCompositors();
  return {
    props: {
      compositors,
    },
  };
};
