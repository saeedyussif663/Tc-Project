import Greetings from '@/components/admin/Greetings';
import MobileSidbebar from '@/components/admin/MobileSidebar';
import SideBar from '@/components/admin/SideBar';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex">
      <SideBar />
      <MobileSidbebar />

      <main className="flex h-full w-full flex-col rounded-3xl px-4 py-4 font-open-sans md:ml-[250px] md:px-8">
        <Greetings />
        {children}
      </main>
    </section>
  );
}
