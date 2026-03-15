import { Badge } from '@mantine/core';
import { DevelopmentStatus } from '@/src/types/compositor';
import { getStatusColor } from '@/src/utils/tiers';

interface StatusBadgeProps {
  status: DevelopmentStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const color = getStatusColor(status);
  
  return (
    <Badge color={color} variant="light" radius="sm">
      {status}
    </Badge>
  );
}
