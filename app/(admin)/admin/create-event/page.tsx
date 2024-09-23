import Greetings from '@/components/admin/Greetings';
import { Asterisk } from 'lucide-react';

export default function CreateEvent() {
  return (
    <section className="px-4 py-4 font-open-sans md:px-8">
      <Greetings />
      <article className="mt-4">
        <h3 className="font-semibold">Create an Event</h3>
        <form className="mt-4 flex flex-col gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <h4 className="w-full border-b border-red-secondary pb-1">
              Event Details
            </h4>

            <div>
              <label>
                Event Title <Asterisk size={12} className="inline-block" />
              </label>
              <input type="text" name="eventTitle" />
              <p>This is the name of the event that customers will see</p>
            </div>

            <div>
              <label>Event Type</label>
              <input type="text" name="eventType" />
            </div>

            <div>
              <label>Description</label>
              <input type="text" name="description" />
            </div>

            <div>
              <label>
                Location <Asterisk size={12} className="inline-block" />
              </label>
              <input type="text" name="eventTitle" />
            </div>
          </div>
          <div></div>
        </form>
      </article>
    </section>
  );
}
