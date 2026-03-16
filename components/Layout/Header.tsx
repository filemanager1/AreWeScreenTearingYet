import { Container, Group, Burger, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import classes from './Header.module.css';
import { IconBrandGithub } from '@tabler/icons-react';

const links = [
  { link: '/', label: 'Home' }
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
      </Container>
    </header>
  );
}
