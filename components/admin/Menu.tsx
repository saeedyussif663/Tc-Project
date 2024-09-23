'use client';

import { useSidebarStore } from '@/store';

export default function Menu() {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  return (
    <p
      className="absolute right-4 top-4 block md:hidden"
      onClick={toggleSidebar}
    >
      menu
    </p>
  );
}
