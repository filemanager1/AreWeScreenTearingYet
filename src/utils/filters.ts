import { CompositorItem, Category } from '@/src/types/compositor';

export function filterCompositors(
  items: CompositorItem[],
  query: string
): CompositorItem[] {
  const lowerQuery = query.toLowerCase();
  
  if (!lowerQuery) {
    return items;
  }

  return items.filter((item) => {
    return (
      item.name.toLowerCase().includes(lowerQuery) ||
      item.core_compositor.toLowerCase().includes(lowerQuery) ||
      item.slug.toLowerCase().includes(lowerQuery)
    );
  });
}

export function groupByCategory(items: CompositorItem[]) {
  return {
    desktopEnvironments: items.filter(
      (item) => item.category === 'Desktop Environment'
    ),
    standaloneCompositors: items.filter(
      (item) => item.category === 'Standalone Compositor'
    ),
  };
}
