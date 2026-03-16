import { Text, List, ThemeIcon, Code } from '@mantine/core';
import { IconBolt, IconDeviceGamepad2, IconHistory } from '@tabler/icons-react';

export function WhyModalContent() {
  return (
    <div>
        <Text mb="md">
            For years, the Linux desktop (Wayland) has forced VSync on everyone. While great for desktop smoothness, this introduced unavoidable input latency in games.
        </Text>

        <List spacing="sm" size="sm" center mb="lg">
             <List.Item
                icon={
                    <ThemeIcon color="blue" size={24} radius="xl">
                    <IconHistory size={16} />
                    </ThemeIcon>
                }
            >
                <b>The "Perfect Frame" Era:</b> Wayland was designed to never tear. Every frame was perfectly synchronized, which meant waiting for the monitor's refresh cycle.
            </List.Item>
            <List.Item
                icon={
                    <ThemeIcon color="red" size={24} radius="xl">
                    <IconBolt size={16} />
                    </ThemeIcon>
                }
            >
                <b>The Latency Problem:</b> In competitive gaming (CS2, Overwatch), waiting 16ms (60Hz) or even 7ms (144Hz) for a frame to display is too slow.
            </List.Item>
             <List.Item
                icon={
                    <ThemeIcon color="teal" size={24} radius="xl">
                    <IconDeviceGamepad2 size={16} />
                    </ThemeIcon>
                }
            >
                <b>The Solution:</b> Immediate Presentation (<code>wp_tearing_control_v1</code>) allows games to bypass the compositor's VSync and send frames directly to the screen as soon as they are rendered.
            </List.Item>
        </List>

        <Text size="sm">
            Yes, this causes visual <b>screen tearing</b>. But for competitive gamers, seeing the newest information <i>now</i> (even if torn) is worth the visual artifact.
        </Text>
    </div>
  );
}
