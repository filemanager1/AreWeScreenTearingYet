import { Badge, Tooltip } from '@mantine/core';
import { ExecutionQuality } from '@/src/types/compositor';
import { getExecutionColor, getExecutionLabel } from '@/src/utils/tiers';
import { IconMedal } from '@tabler/icons-react';

interface TierBadgeProps {
  quality: ExecutionQuality;
}

export function TierBadge({ quality }: TierBadgeProps) {
  const color = getExecutionColor(quality);
  const label = getExecutionLabel(quality);
  
  const Icon = IconMedal;

  return (
    <Tooltip label={`Execution Quality: ${quality}`} withArrow>
      <Badge 
        color={color} 
        variant="filled" 
        radius="sm"
        leftSection={<Icon size={12} />}
      >
        {label}
      </Badge>
    </Tooltip>
  );
}
