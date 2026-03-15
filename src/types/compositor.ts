export type Category = 'Desktop Environment' | 'Standalone Compositor';
export type DevelopmentStatus = 'Merged' | 'WIP' | 'Planned' | 'N/A';
export type ExecutionQuality = 'Ideal' | 'Good' | 'Bad' | 'Unknown';

export interface UpdateLog {
  date: string; // ISO 8601
  version: string;
  note: string;
  reference_url?: string;
}

export interface CompositorItem {
  slug: string;           // Unique ID (e.g., "kde-plasma", "hyprland")
  name: string;           // Display Name (e.g., "KDE Plasma")
  core_compositor: string;// Technical Name (e.g., "KWin")
  category: Category;     // Logic separation for UI
  status: DevelopmentStatus; // Code availability (Merged, WIP, etc.)
  execution: ExecutionQuality; // Quality of experience (Ideal, Good, Bad)
  instruction: string;    // Brief how-to (e.g., "System Settings > Display" or "general:allow_tearing=true")
  
  // Metadata
  website: string;
  repo_url?: string;
  
  // Detailed info
  notes: string[];        // Caveats (e.g., "Fullscreen only", "XWayland issues")
  history: UpdateLog[];   // Changelog of support
}
