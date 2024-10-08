import Provider from '@/components/ui/Provider';
import type { Metadata } from 'next';
import { Open_Sans, Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space_grotesk',
});

const open_sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

const jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta_sans',
});

export const metadata: Metadata = {
  title: 'Tc Project',
  description: 'An event ticketing platform',
  metadataBase: new URL('http://localhost:3000'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Provider>
        <body
          className={`${space_grotesk.variable} ${jakarta_sans.variable} ${open_sans.variable} overflow-x-hidden`}
        >
          {children}
        </body>
      </Provider>
    </html>
  );
}
