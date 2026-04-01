import { Container, Title, Text, Stack, Box } from '@mantine/core';

export function GuidesPage() {
  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Box>
          <Title order={1} mb="md">
            Guides
          </Title>
          <Text size="lg" c="dimmed">
            Learn how to enable and configure Immediate Presentation on your Wayland compositor.
          </Text>
        </Box>

        <Box>
          <Text>
            Coming soon c:
          </Text>
        </Box>
      </Stack>
    </Container>
  );
}
