'use client';
import { useSidebarStore } from '@/store';

export default function MobileSidbebar() {
  const isSidebarShowing = useSidebarStore((state) => state.isSidebarShowing);
  return (
    <aside
      className={`w-[200px] flex md:hidden bg-white shadow-sm ${isSidebarShowing ? 'translate-x-0' : '-translate-x-[100%]'} duration-500 transition-all z-30 flex px-4 py-5 h-screen fixed  font-open-sans`}
    >
      SideBar
    </aside>
  );
}
