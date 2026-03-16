import { DevelopmentStatus, ExecutionQuality } from '@/src/types/compositor';
import { MantineColor } from '@mantine/core';

export function getStatusColor(status: DevelopmentStatus): MantineColor {
  switch (status) {
    case 'Merged':
      return 'green';
    case 'WIP':
      return 'yellow';
    case 'Planned':
      return 'blue';
    case 'N/A':
      return 'gray';
    default:
      return 'gray';
  }
}

export function getExecutionColor(quality: ExecutionQuality): MantineColor {
  switch (quality) {
    case 'Ideal':
      return 'teal';
    case 'Great':
      return 'purple';
    case 'Okay':
      return 'yellow';
    case 'Bad':
      return 'red';
    case 'Unknown':
      return 'gray';
    default:
      return 'gray';
  }
}

// Helper to determine the label based on quality
export function getExecutionLabel(quality: ExecutionQuality): string {
    return quality;
}
