import AuthLayout from '@/components/auth/AuthLayout';
import { Toaster } from '@/components/ui/toaster';
import { authOptions } from '@/lib/utils';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import '../globals.css';

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
      <main className="flex h-screen w-full justify-between gap-12 px-2 md:px-6 2xl:justify-start">
        <AuthLayout />
        {children}
      </main>
      <Toaster />
    </>
  );
}
