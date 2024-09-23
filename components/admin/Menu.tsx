'use client';

import { useSidebarStore } from '@/store';

export default function Menu() {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  return (
    <p
      className="absolute right-4 block md:hidden top-4"
      onClick={toggleSidebar}
    >
      menu
    </p>
  );
}
