import fs from 'fs';
import path from 'path';
import { CompositorItem } from '@/src/types/compositor';

const dataDirectory = path.join(process.cwd(), 'data');

export function getCompositors(): CompositorItem[] {
  const filePath = path.join(dataDirectory, 'compositors.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data: CompositorItem[] = JSON.parse(fileContents);
  
  // Sort alphabetically by name by default
  return data.sort((a, b) => a.name.localeCompare(b.name));
}
