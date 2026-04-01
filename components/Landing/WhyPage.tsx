import { Container, Title, Text, List, ThemeIcon, Box, Stack } from '@mantine/core';
import { IconBolt, IconDeviceGamepad2, IconHistory } from '@tabler/icons-react';

export function WhyPage() {
  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Box>
          <Title order={1} mb="md">
            Why Accept Screen Tearing?
          </Title>
          <Text size="lg" c="dimmed">
            For years, the Linux desktop (Wayland) has forced VSync on everyone. While great for
            desktop smoothness, this introduced unavoidable input latency in games.
          </Text>
        </Box>

        <Box>
          <List spacing="lg" size="lg" center>
            <List.Item
              icon={
                <ThemeIcon color="blue" size={32} radius="xl">
                  <IconHistory size={20} />
                </ThemeIcon>
              }
            >
              <Text fw={700}>The &quot;Perfect Frame&quot; Era</Text>
              <Text size="sm" c="dimmed" mt={4}>
                Wayland was designed to never tear. Every frame was perfectly synchronized, which
                meant waiting for the monitor&apos;s refresh cycle.
              </Text>
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon color="red" size={32} radius="xl">
                  <IconBolt size={20} />
                </ThemeIcon>
              }
            >
              <Text fw={700}>The Latency Problem</Text>
              <Text size="sm" c="dimmed" mt={4}>
                In competitive gaming (CS2, Overwatch), waiting 16ms (60Hz) or even 7ms (144Hz) for
                a frame to display is too slow.
              </Text>
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon color="teal" size={32} radius="xl">
                  <IconDeviceGamepad2 size={20} />
                </ThemeIcon>
              }
            >
              <Text fw={700}>The Solution: Immediate Presentation</Text>
              <Text size="sm" c="dimmed" mt={4}>
                <code>wp_tearing_control_v1</code> allows games to bypass the compositor&apos;s
                VSync and send frames directly to the screen as soon as they are rendered.
              </Text>
            </List.Item>
          </List>
        </Box>

        <Box>
          <Text size="lg">
            Yes, this causes visual <strong>screen tearing</strong>. But for competitive gamers,
            seeing the newest information <em>now</em> (even if torn) is worth the visual
            artifact.
          </Text>
        </Box>
      </Stack>
    </Container>
  );
}
