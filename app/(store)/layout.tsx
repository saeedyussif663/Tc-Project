import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans, Open_Sans } from 'next/font/google';
import '../globals.css';
import Provider from '@/components/ui/Provider';

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
  title: 'Tc Project | Store',
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
          className={`${space_grotesk.variable} ${jakarta_sans.variable} ${open_sans.variable} mx-auto max-w-7xl overflow-x-hidden`}
        >
          {children}
        </body>
      </Provider>
    </html>
  );
}
