import Header from '@/components/events/Header';
import PaymentToast from '@/components/events/PaymentToast';
import { ReactNode } from 'react';

export default function eventsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative">
      <Header />
      {children}
      <PaymentToast />
    </main>
  );
}
