import { Container, Title, Text, Button, Group } from '@mantine/core';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Are We Tearing Yet?</title>
        <meta name="description" content="Tracking the state of Immediate Presentation in Wayland." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container size="lg" py="xl">
        <Title order={1} style={{ textAlign: 'center', marginTop: 50 }}>
          Are We Tearing Yet?
        </Title>
        <Text c="dimmed" style={{ textAlign: 'center' }} size="lg" mt="md">
          Tracking the state of Immediate Presentation (Screen Tearing) in Wayland.
        </Text>
        
        <Group justify="center" mt="xl">
          <Button size="lg" variant="default" component="a" href="/why">Why?</Button>
          <Button size="lg">Explore Compositors</Button>
        </Group>
      </Container>
    </>
  );
}
