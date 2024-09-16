import EventPayment from '@/components/events/EventPayment';
import PaymentInformation from '@/components/events/PaymentInformation';

export default function EventDetail() {
  return (
    <main className="mb-3 mt-[10px] flex flex-col justify-between gap-8 px-3 font-sans-jarkata md:flex-row md:px-8">
      <EventPayment />
      <PaymentInformation />
    </main>
  );
}
