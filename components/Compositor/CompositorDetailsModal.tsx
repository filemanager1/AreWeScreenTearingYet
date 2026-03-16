import {
  Modal,
  Group,
  Title,
  Stack,
  Box,
  Text,
  Alert,
  Code,
  List,
  ThemeIcon,
  Divider,
  Timeline
} from '@mantine/core';
import { 
  IconInfoCircle, 
  IconAlertCircle
} from '@tabler/icons-react';
import { CompositorItem } from '@/src/types/compositor';

interface CompositorDetailsModalProps {
  opened: boolean;
  onClose: () => void;
  selectedItem: CompositorItem | null;
}

export function CompositorDetailsModal({ opened, onClose, selectedItem }: CompositorDetailsModalProps) {
  if (!selectedItem) return null;

  return (
    <Modal 
      opened={opened} 
      onClose={onClose} 
      title={
        <Group gap="sm">
          <Title order={3}>{selectedItem.name} details</Title>
        </Group>
      }
      size="lg"
      centered
    >
      <Stack gap="xl" mt="sm">
        <Box>
          <Text fw={600} mb="xs">Configuration Instructions</Text>
          <Alert variant="light" color="gray" radius="md" py="sm">
            <Code block bg="transparent" p={0}>{selectedItem.instruction || 'No instructions provided.'}</Code>
          </Alert>
        </Box>

        {selectedItem.notes && selectedItem.notes.length > 0 && (
          <Box>
            <Text fw={600} mb="sm">Important Notes</Text>
            <List 
              spacing="sm" 
              size="sm" 
              icon={
                <ThemeIcon color="yellow" size={20} radius="xl">
                  <IconAlertCircle size={12} />
                </ThemeIcon>
              }
            >
              {selectedItem.notes.map((note, idx) => (
                <List.Item key={idx}>{note}</List.Item>
              ))}
            </List>
          </Box>
        )}

        {selectedItem.history && selectedItem.history.length > 0 && (
          <Box>
            <Divider my="sm" variant="dashed" />
            <Text fw={600} mb="md" mt="sm">Update History</Text>
            <Timeline active={0} bulletSize={24} lineWidth={2}>
              {selectedItem.history.map((hist, idx) => (
                <Timeline.Item 
                  key={idx}
                  title={<Text fw={500} size="sm"> {hist.updateTitle}</Text>}
                >
                  <Text c="dimmed" size="sm" mt={4}>{hist.note}</Text>
                  <Text c="dimmed" size="sm" mt={4}>Source: <a href={hist.source}>{hist.source}</a> </Text>
                  <Text size="xs" mt={4} c="gray">{hist.date}</Text>
                </Timeline.Item>
              ))}
            </Timeline>
          </Box>
        )}
      </Stack>
    </Modal>
  );
}