'use client';

import { useSidebarStore } from '@/store';
import { Menu, X } from 'lucide-react';

export default function HamburgerIcon() {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const isSidebarShowing = useSidebarStore((state) => state.isSidebarShowing);
  return (
    <div className="fixed z-10 h-16 w-full p-4 shadow-sm md:hidden">
      <div className="relative">
        {!isSidebarShowing ? (
          <Menu className="absolute right-4 top-2" onClick={toggleSidebar} />
        ) : (
          <X className="absolute right-4 top-2" onClick={toggleSidebar} />
        )}
      </div>
    </div>
  );
}
