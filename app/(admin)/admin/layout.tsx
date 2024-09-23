import MobileSidbebar from '@/components/admin/MobileSidebar';
import SideBar from '@/components/admin/SideBar';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex">
      <SideBar />
      <MobileSidbebar />

      <main className="flex h-full w-full flex-col rounded-3xl md:ml-[250px]">
        {children}
      </main>
    </section>
  );
}
