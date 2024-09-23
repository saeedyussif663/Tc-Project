'use client';

import { useSidebarStore } from '@/store';
import { Calendar, MenuIcon, X } from 'lucide-react';

export default function Greetings() {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const isSidebarShowing = useSidebarStore((state) => state.isSidebarShowing);
  return (
    <article className="flex justify-between">
      <h2 className="text-lg">
        Good Day, <span className="text-base">Selorm</span>
      </h2>
      <div className="flex gap-2">
        <div className="hidden cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-secondary p-2 text-[12px] text-white md:flex">
          <Calendar size={14} /> View Event
        </div>
        <input
          type="text"
          className="hidden rounded-xl bg-[#F2F2F2] px-3 text-gray md:block"
          placeholder="Search here...."
        />
        {isSidebarShowing ? (
          <X onClick={toggleSidebar} className="block md:hidden" />
        ) : (
          <MenuIcon onClick={toggleSidebar} className="block md:hidden" />
        )}
      </div>
    </article>
  );
}
