import { Badge, Tooltip } from '@mantine/core';
import { ExecutionQuality } from '@/src/types/compositor';
import { getExecutionColor, getTierMetal } from '@/src/utils/tiers';
import { IconMedal, IconMedal2 } from '@tabler/icons-react';

interface TierBadgeProps {
  quality: ExecutionQuality;
}

export function TierBadge({ quality }: TierBadgeProps) {
  const color = getExecutionColor(quality);
  const metal = getTierMetal(quality);
  
  // Choose icon based on quality if desired, or generic medal
  const Icon = IconMedal;

  return (
    <Tooltip label={`Execution Quality: ${quality} (${metal} Tier)`} withArrow>
      <Badge 
        color={color} 
        variant="filled" 
        radius="sm"
        leftSection={<Icon size={12} />}
      >
        {metal}
      </Badge>
    </Tooltip>
  );
}
