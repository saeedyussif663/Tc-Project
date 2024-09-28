import CreateEventForm from '@/components/admin/CreateEventForm';
import Greetings from '@/components/admin/Greetings';

export default function CreateEvent() {
  return (
    <section className="px-4 py-4 font-open-sans md:px-8">
      <Greetings />
      <CreateEventForm />
    </section>
  );
}
