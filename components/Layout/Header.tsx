import { Container, Group, Burger, ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { useDisclosure, useMounted } from '@mantine/hooks';
import Link from 'next/link';
import classes from './Header.module.css';
import { IconMoon, IconSun } from '@tabler/icons-react';

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });
  const isMounted = useMounted();

  const isDark = isMounted ? computedColorScheme === 'dark' : true;

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <Link href="/" className={classes.logoText}>
            Are We Screen Tearing Yet?
          </Link>
        </Group>

        <Group>
          <ActionIcon
            onClick={() => setColorScheme(isDark ? 'light' : 'dark')}
            variant="default"
            size="lg"
            aria-label="Toggle color scheme"
          >
            {isDark ? (
              <IconSun size={20} stroke={1.5} />
            ) : (
              <IconMoon size={20} stroke={1.5} />
            )}
          </ActionIcon>
        </Group>
      </Container>
    </header>
  );
}
