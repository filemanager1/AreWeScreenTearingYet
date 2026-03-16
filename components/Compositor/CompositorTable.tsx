import { useState, useMemo } from 'react';
import { IconSearch, IconListDetails } from '@tabler/icons-react';
import {
  Table,
  Text,
  TextInput,
  Anchor,
  Box,
  Paper,
  Group,
  Select,
  Badge,
  ScrollArea,
  Button,
  Stack,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { CompositorItem } from '@/src/types/compositor';
import { TierBadge } from './TierBadge';
import { StatusBadge } from './StatusBadge';
import { CompositorDetailsModal } from './CompositorDetailsModal';

interface CompositorTableProps {
  data: CompositorItem[];
}

export function CompositorTable({ data }: CompositorTableProps) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string | null>(null);

  const [opened, { open, close }] = useDisclosure(false);
  const [selectedItem, setSelectedItem] = useState<CompositorItem | null>(null);

  const processedData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                            item.core_compositor.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category ? item.category === category : true;
      return matchesSearch && matchesCategory;
    });
  }, [data, search, category]);

  const handleOpenModal = (item: CompositorItem) => {
    setSelectedItem(item);
    open();
  };

  return (
    <Stack gap="md">
      <Group grow>
        <TextInput
          placeholder="Search by name or core..."
          leftSection={<IconSearch size={16} />}
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
        />
        <Select
          placeholder="Filter by category"
          data={['Desktop Environment', 'Standalone Compositor']}
          value={category}
          onChange={setCategory}
          clearable
        />
      </Group>

      <Paper withBorder radius="md" p="md" shadow="none">
        <ScrollArea>
          <Table striped highlightOnHover layout="auto">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Name</Table.Th>
                <Table.Th>Core</Table.Th>
                <Table.Th>Category</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Execution</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {processedData.length > 0 ? (
                processedData.map((item) => (
                  <Table.Tr key={item.slug}>
                    <Table.Td>
                      <Anchor href={item.website} target="_blank" fw={600} size="sm" underline="hover" c="inherit">
                        {item.name}
                      </Anchor>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm">{item.core_compositor}</Text>
                    </Table.Td>
                    <Table.Td>
                      <Badge variant="light" color="gray" radius="sm">{item.category}</Badge>
                    </Table.Td>
                    <Table.Td>
                      <StatusBadge status={item.status} />
                    </Table.Td>
                    <Table.Td>
                      <TierBadge quality={item.execution} />
                    </Table.Td>
                    <Table.Td>
                      <Button 
                        size="xs" 
                        variant="subtle" 
                        leftSection={<IconListDetails size={14} />}
                        onClick={() => handleOpenModal(item)}
                      >
                        Details
                      </Button>
                    </Table.Td>
                  </Table.Tr>
                ))
              ) : (
                <Table.Tr>
                  <Table.Td colSpan={6}>
                    <Text fw={500} ta="center" c="dimmed" py="xl">
                      No compositors found matching your search.
                    </Text>
                  </Table.Td>
                </Table.Tr>
              )}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </Paper>

      <CompositorDetailsModal 
        opened={opened} 
        onClose={close} 
        selectedItem={selectedItem} 
      />
    </Stack>
  );
}
