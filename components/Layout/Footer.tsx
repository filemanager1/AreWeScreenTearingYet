import { Container, Group, Anchor, Text } from '@mantine/core';
import classes from './Footer.module.css';

const links = [
  { link: 'https://github.com/filemanager1/AreWeScreenTearingYet/', label: 'Contribute on GitHub' }
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container size="lg" className={classes.inner}>
        <Text c="dimmed" size="sm">
          © {new Date().getFullYear()} Are We Screen Tearing Yet?
        </Text>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
