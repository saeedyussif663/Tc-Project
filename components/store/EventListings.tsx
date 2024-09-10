import { Bookmark, ExternalLink } from 'lucide-react';
import Tabs from './Tabs';
import EventItem from './EventItem';
import { Suspense } from 'react';

export default function EventListings() {
  return (
    <main className="mx-auto mt-6 flex max-w-[1000px] flex-col items-center gap-9 font-open-sans">
      <Suspense>
        <Tabs />
      </Suspense>
      <Events />
    </main>
  );
}

function Events() {
  return (
    <section className="flex w-full flex-col gap-6 font-open-sans">
      <EventItem />
      <EventItem />
      <EventItem />
      <EventItem />
    </section>
  );
}
