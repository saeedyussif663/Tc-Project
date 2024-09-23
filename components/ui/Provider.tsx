'use client';

import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';

interface ProviderProps {
  children: ReactNode;
  session?: Session | null;
}

export default function Provider({ children, session }: ProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
