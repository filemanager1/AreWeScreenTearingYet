import { Text, Group, Stack, List, ThemeIcon, Box } from '@mantine/core';
import { StatusBadge } from '@/components/Compositor/StatusBadge';
import { TierBadge } from '@/components/Compositor/TierBadge';
import { IconCode, IconDeviceGamepad2 } from '@tabler/icons-react';

export function LegendModalContent() {
  return (
    <Stack gap="xl">
        <Box>
            <Group gap="xs" mb="md">
                <ThemeIcon color="grape" size={24} radius="xl">
                    <IconCode size={16} />
                </ThemeIcon>
                <Text fw={700}>Development Status</Text>
            </Group>
            
            <List spacing="md" size="sm" center pl="sm">
                <List.Item
                    icon={<StatusBadge status="Merged" />}
                >
                    Support is officially released and available in stable versions.
                </List.Item>
                <List.Item
                    icon={<StatusBadge status="WIP" />}
                >
                    Merge Request exists and is being worked on actively.
                </List.Item>
                 <List.Item
                    icon={<StatusBadge status="Planned" />}
                >
                    Developers have stated intent, but no code exists yet.
                </List.Item>
            </List>
        </Box>

        <Box>
           <Group gap="xs" mb="md">
               <ThemeIcon color="teal" size={24} radius="xl">
                   <IconDeviceGamepad2 size={16} />
               </ThemeIcon>
               <Text fw={700}>Execution Quality</Text>
           </Group>

           <List spacing="md" size="sm" center pl="sm">
                <List.Item
                    icon={<TierBadge quality="Ideal" />}
                >
                    <b>Ideal:</b> Works out of the box or with a simple GUI toggle. No glitches.
                </List.Item>
                <List.Item
                     icon={<TierBadge quality="Good" />}
                >
                     <b>Good:</b> Works well, but requires config files, env vars, or has minor caveats.
                </List.Item>
                <List.Item
                     icon={<TierBadge quality="Bad" />}
                >
                     <b>Bad:</b> Experimental. Expect bugs, crashes, or complex patching.
                </List.Item>
           </List>
        </Box>
    </Stack>
  );
}
