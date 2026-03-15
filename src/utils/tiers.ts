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
      return 'teal'; // Gold-ish usually, but teal is good for "Perfect"
    case 'Good':
      return 'blue';
    case 'Bad':
      return 'red';
    case 'Unknown':
      return 'gray';
    default:
      return 'gray';
  }
}

// Helper to determine the "Tier" (Metal) based on quality
export function getTierMetal(quality: ExecutionQuality): string {
    switch (quality) {
        case 'Ideal': return 'Platinum';
        case 'Good': return 'Gold';
        case 'Bad': return 'Bronze';
        default: return 'Stone';
    }
}
