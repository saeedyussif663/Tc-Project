import PaymentInformation from '@/components/events/PaymentInformation';

export default function EventDetail() {
  return (
    <main className="mb-3 mt-[10px] flex flex-col justify-between px-3 font-sans-jarkata md:flex-row md:px-8">
      <section>event</section>
      <PaymentInformation />
    </main>
  );
}
