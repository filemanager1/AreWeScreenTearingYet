import { Container, Group, Burger, Text, ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import classes from './Header.module.css';
import { IconBrandGithub, IconMoon, IconSun } from '@tabler/icons-react';

const links = [
  { link: '/', label: 'Home' }
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
    >
      {link.label}
    </Link>
  ));

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
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
            variant="default"
            size="lg"
            aria-label="Toggle color scheme"
          >
            {computedColorScheme === 'dark' ? (
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
