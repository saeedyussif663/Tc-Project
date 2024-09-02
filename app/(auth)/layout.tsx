import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans, Open_Sans } from 'next/font/google';
import '../globals.css';
import AuthLayout from '@/components/auth/AuthLayout';
import { Toaster } from '@/components/ui/toaster';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/utils';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Tc Project | Auth',
  description: 'An event ticketing platform',
  metadataBase: new URL('http://localhost:3000'),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/store');
  }

  return (
    <>
      <main className="flex h-screen w-full justify-between gap-12 px-2 md:px-6 2xl:justify-start 2xl:px-0">
        <AuthLayout />
        {children}
      </main>
      <Toaster />
    </>
  );
}
