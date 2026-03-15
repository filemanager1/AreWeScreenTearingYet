import { Card, Text, Group, Stack, Code, CopyButton, ActionIcon, Tooltip, rem } from '@mantine/core';
import { IconCopy, IconCheck, IconExternalLink } from '@tabler/icons-react';
import { CompositorItem } from '@/src/types/compositor';
import { StatusBadge } from './StatusBadge';
import { TierBadge } from './TierBadge';

interface CompositorCardProps {
  item: CompositorItem;
}

export function CompositorCard({ item }: CompositorCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" align="start" mb="md">
        <div>
          <Group align="baseline" gap="xs">
            <Text fw={700} size="lg">{item.name}</Text>
            <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
              {item.core_compositor}
            </Text>
          </Group>
          
          <Group gap="xs" mt={5}>
            <StatusBadge status={item.status} />
            <TierBadge quality={item.execution} />
          </Group>
        </div>

        {item.website && (
            <ActionIcon component="a" href={item.website} target="_blank" variant="subtle" color="gray">
                <IconExternalLink size={18} />
            </ActionIcon>
        )}
      </Group>

      <Stack gap="xs" mb="md">
         {item.instruction && (
            <Group gap="xs" align="center" style={{ width: '100%' }}>
                <Code block style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.instruction}
                </Code>
                <CopyButton value={item.instruction} timeout={2000}>
                {({ copied, copy }) => (
                    <Tooltip label={copied ? 'Copied' : 'Copy config'} withArrow position="right">
                    <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                        {copied ? <IconCheck style={{ width: rem(16) }} /> : <IconCopy style={{ width: rem(16) }} />}
                    </ActionIcon>
                    </Tooltip>
                )}
                </CopyButton>
            </Group>
         )}
      </Stack>

      {item.notes && item.notes.length > 0 && (
        <Stack gap={4}>
            {item.notes.map((note, index) => (
                <Text key={index} size="sm" c="dimmed">• {note}</Text>
            ))}
        </Stack>
      )}
    </Card>
  );
}
