import Header from '@/components/events/Header';
import NotificationToast from '@/components/events/NotificationToast';
import PaymentToast from '@/components/events/PaymentToast';
import { ReactNode } from 'react';

export default function eventsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative mx-auto max-w-screen-xl">
      <Header />
      {children}
      <PaymentToast />
      <NotificationToast />
    </main>
  );
}
