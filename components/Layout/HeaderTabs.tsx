import {
  Burger,
  Container,
  Group,
  Tabs,
  Text,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  Drawer,
  ScrollArea,
  Divider,
} from '@mantine/core';
import { useDisclosure, useMounted } from '@mantine/hooks';
import { IconMoon, IconSun, IconEyeQuestion } from '@tabler/icons-react';
import Link from 'next/link';
import classes from './HeaderTabs.module.css';

const tabs = ['Home', 'Why', 'Guides'];

interface HeaderTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function HeaderTabs({ activeTab, onTabChange }: HeaderTabsProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });
  const isMounted = useMounted();

  const isDark = isMounted ? computedColorScheme === 'dark' : true;

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="md">
        <Group justify="space-between">
          <Link href="/" className={classes.logoButton}>
            <Group gap={7}>
              <IconEyeQuestion size={24} stroke={1.5} />
              <Text fw={700} size="lg" lh={1}>
                Are We Screen Tearing Yet?
              </Text>
            </Group>
          </Link>

          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="xs"
            size="sm"
            aria-label="Toggle navigation"
          />

          <ActionIcon
            onClick={() => setColorScheme(isDark ? 'light' : 'dark')}
            variant="default"
            size="lg"
            aria-label="Toggle color scheme"
            visibleFrom="xs"
          >
            {isDark ? (
              <IconSun size={20} stroke={1.5} />
            ) : (
              <IconMoon size={20} stroke={1.5} />
            )}
          </ActionIcon>
        </Group>
      </Container>

      <Container size="md">
        <Tabs
          value={activeTab}
          onChange={(value) => onTabChange(value || 'Home')}
          variant="outline"
          visibleFrom="sm"
          classNames={{
            root: classes.tabs,
            list: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="xs"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />
          {tabs.map((tab) => (
            <a
              href="#"
              key={tab}
              className={classes.drawerLink}
              onClick={(event) => {
                event.preventDefault();
                onTabChange(tab);
                close();
              }}
            >
              {tab}
            </a>
          ))}
        </ScrollArea>
      </Drawer>
    </div>
  );
}
