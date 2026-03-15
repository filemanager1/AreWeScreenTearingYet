import { Container, Group, Burger, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import classes from './Header.module.css';
import { IconBrandGithub } from '@tabler/icons-react';

const links = [
  { link: '/', label: 'Home' },
  { link: '/why', label: 'Why Tearing?' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

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
      <Container size="lg" className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <Link href="/" className={classes.logoText}>
            Are We Screen Tearing Yet?
          </Link>
        </Group>

        <Group gap={5} visibleFrom="xs">
          {items}
          <a 
            href="https://github.com/filemanager1/AreWeScreenTearingYet/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={classes.link}
          >
             <Group gap={4}>
                <IconBrandGithub size={16} />
                <span>GitHub</span>
             </Group>
          </a>
        </Group>
      </Container>
    </header>
  );
}
