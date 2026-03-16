import { IconCheck, IconSettings, IconList } from '@tabler/icons-react';
import { Center, Group, Paper, RingProgress, SimpleGrid, Text } from '@mantine/core';

interface StatsRingProps {
  total: number;
  merged: number;
  ideal: number;
}

export function StatsRing({ total, merged, ideal }: StatsRingProps) {
  
  const mergedPercentage = total > 0 ? Math.round((merged / total) * 100) : 0;
  const idealPercentage = total > 0 ? Math.round((ideal / total) * 100) : 0;

  const data = [
    { 
        label: 'Supported (Merged)', 
        stats: `${merged}/${total}`, 
        progress: mergedPercentage, 
        color: 'teal', 
        icon: IconCheck 
    },
    { 
        label: 'Ideal Experience', 
        stats: `${ideal}/${total}`, 
        progress: idealPercentage, 
        color: 'blue', 
        icon: IconSettings 
    },
    {
      label: 'Tracked Compositors',
      stats: `${total}`,
      progress: 100,
      color: 'gray',
      icon: IconList,
    },
  ];

  const stats = data.map((stat) => {
    const Icon = stat.icon;
    return (
      <Paper withBorder radius="md" p="xs" key={stat.label}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <Icon size={20} stroke={1.5} />
              </Center>
            }
          />

          <div>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {stat.label}
            </Text>
            <Text fw={700} size="xl">
              {stat.stats}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });

  return <SimpleGrid cols={{ base: 1, sm: 3 }} mb="xl">{stats}</SimpleGrid>;
}
