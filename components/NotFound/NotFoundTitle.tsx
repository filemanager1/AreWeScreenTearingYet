import { Button, Container, Group, Text, Title } from '@mantine/core';
import Link from 'next/link'; // Import Link for navigation
import classes from './NotFoundTitle.module.css';

export function NotFoundTitle() {
  return (
    <Container className={classes.root}>
      <div className={classes.label} data-text="404">404</div>
      <Title className={classes.title}>Frame Dropped.</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        This page got lost in the swapchain. It seems the compositor couldn't 
        present the content you were looking for.
      </Text>
      <Group justify="center">
        <Button component={Link} href="/" variant="subtle" size="md">
          Take me back to home page
        </Button>
      </Group>
    </Container>
  );
}
