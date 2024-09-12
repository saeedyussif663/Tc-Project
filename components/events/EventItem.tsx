import { Bookmark, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function EventItem({ id }: { id: string }) {
  return (
    <Link
      href={`/events/${id}`}
      className="mx-auto flex w-5/6 items-center justify-between gap-4 rounded-lg border-l-[10px] border-l-red-secondary bg-[#F5F5F5] p-4"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-4">
        <img
          src="/images/eventImage.png"
          alt="eventImage"
          className="w-[160px]"
        />
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
      <div className="flex flex-col gap-5 self-end">
        <span className="flex gap-4 text-gray">
          <Bookmark className="cursor-pointer" />
          <ExternalLink className="cursor-pointer" />
        </span>
        <p className="text-[12px] text-gray">
          Starts at:{' '}
          <span className="block text-base font-bold text-red-secondary">
            $ 200.00
          </span>{' '}
        </p>
      </div>
    </Link>
  );
}
