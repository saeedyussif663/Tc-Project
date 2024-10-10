import Image from 'next/image';
import { ReactNode } from 'react';

export default function AdminAuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto flex min-h-screen max-w-screen-lg flex-col justify-between py-4">
      <div className="flex items-center gap-1 font-sans-jarkata">
        <Image alt="logo" src="/logo.png" width={49} height={49} />
        <h1 className="text-2xl font-bold text-red-secondary">Tc Ticket</h1>
      </div>
      {children}
      <div></div>
    </section>
  );
}
