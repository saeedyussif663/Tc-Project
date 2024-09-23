import Menu from '@/components/admin/Menu';
import MobileSidbebar from '@/components/admin/MobileSidebar';
import SideBar from '@/components/admin/SideBar';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex">
      <SideBar />
      <MobileSidbebar />

      <main className="md:ml-[200px] flex flex-col relative w-full  rounded-3xl  h-full">
        {children}
        <Menu />
      </main>
    </section>
  );
}
