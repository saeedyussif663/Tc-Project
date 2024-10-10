import Greetings from '@/components/admin/Greetings';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function page() {
  return (
    <section className="mt-16 w-full px-4 py-4 md:mt-0 md:w-auto md:px-8">
      <Greetings />
      <main className="mt-5 font-sans-jarkata">
        <div className="flex items-center justify-end gap-5">
          <span className="rounded-[10px] bg-[#f5f5f5] px-5 py-2 text-sm">
            Upcoming Events
          </span>
          <Link
            href="create-event"
            className="flex items-center gap-1 rounded-[10px] bg-red-secondary px-5 py-2 text-sm text-white"
          >
            <Plus size={16} /> Add a new Event
          </Link>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <LargeEvent image="/images/eventImage.png" />
          <MobileEvent />
          <LargeEvent image="/images/eventImage1.png" />
          <MobileEvent />
        </div>
      </main>
    </section>
  );
}

function LargeEvent({ image }: { image: string }) {
  return (
    <article className="hidden flex-row items-center justify-between gap-4 rounded-lg border-l-[10px] border-l-red-secondary bg-[#F5F5F5] md:flex">
      <div className="flex w-1/2 flex-col gap-6 p-4 md:flex-row md:items-center md:gap-4">
        <img src={image} alt="eventImage" className="ml-auto w-[160px]" />
        <div>
          <h4 className="font-semibold">RapperHolic Event</h4>
          <span className="line-clamp-1 text-sm text-red-secondary">
            24th April 2024 19: 00 GMT - 28th April 2024 21:00 GMT{' '}
          </span>
          <p className="my-[2px] text-[12px] text-gray">
            National Conference, Accra Ghana
          </p>
          <p className="text-[12px] text-gray">
            Hosted by <span>TcTicket</span>
          </p>
        </div>
      </div>

      <div className="flex items-center px-4">
        <div className="flex h-full flex-col items-center justify-center gap-2 px-4 text-xs">
          <p className="">Status</p>
          <p className="font-semibold text-[#53E03C]">Live</p>
        </div>
        <div className="flex h-full flex-col items-center justify-center gap-2 px-4 text-xs">
          <p className="font-light">Total</p>
          <p className="font-semibold">400</p>
        </div>
        <div className="flex h-full flex-col items-center justify-center gap-2 px-4 text-xs">
          <p className="font-light">Sold</p>
          <p className="font-semibold">20</p>
        </div>
        <div className="flex h-full flex-col items-center justify-center gap-2 px-4 text-xs">
          <p className="font-light">Available</p>
          <p className="font-semibold">380</p>
        </div>
      </div>
    </article>
  );
}

function MobileEvent() {
  return (
    <article className="flex flex-col gap-6 rounded-lg border-l-[10px] border-l-red-secondary bg-[#F5F5F5] py-3 md:hidden">
      <div className="px-4">
        <h4 className="font-semibold">RapperHolic Event</h4>
        <span className="line-clamp-1 text-sm text-red-secondary">
          24th April 2024 19: 00 GMT - 28th April 2024 21:00 GMT{' '}
        </span>
        <p className="my-[2px] text-[12px] text-gray">
          National Conference, Accra Ghana
        </p>
        <p className="text-[12px] text-gray">
          Hosted by <span>TcTicket</span>
        </p>
      </div>
      <div className="flex h-full w-1/2 items-center">
        <div className="flex h-full flex-col items-center justify-center gap-2 border-r-[0.1px] border-gray px-4 text-xs">
          <p className="">Status</p>
          <p className="font-semibold text-[#53E03C]">Live</p>
        </div>
        <div className="flex h-full flex-col items-center justify-center gap-2 border-r-[0.1px] border-gray px-4 text-xs">
          <p className="font-light">Total</p>
          <p className="font-semibold">400</p>
        </div>
        <div className="flex h-full flex-col items-center justify-center gap-2 border-r-[0.1px] border-gray px-4 text-xs">
          <p className="font-light">Sold</p>
          <p className="font-semibold">20</p>
        </div>
        <div className="flex h-full flex-col items-center justify-center gap-2 border-r-[0.1px] border-gray px-4 text-xs">
          <p className="font-light">Available</p>
          <p className="font-semibold">380</p>
        </div>
      </div>
    </article>
  );
}
