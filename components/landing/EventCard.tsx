import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { EllipseLeft, EllipseRight, EllipseTop } from '../icons/Ellipse';

export default function EventCard({ color }: { color: string }) {
  return (
    <article className="relative w-[286px]">
      <div className="relative h-[142px] w-full">
        <Image
          src="/images/event-1.png"
          alt="event-card"
          fill
          className="rounded-t-2xl"
        />
      </div>
      <div
        className={`flex h-[72px] items-center justify-around rounded-b-2xl bg-${color}`}
      >
        <h4 className="font-sans-jarkata text-lg text-white">
          Standard <span className="font-open-sans block">Events</span>
        </h4>
        <span className="flex items-center justify-center rounded-full bg-white p-3">
          <ChevronDown />
        </span>
      </div>
      <EllipseTop />
      <EllipseRight />
      <EllipseLeft />
    </article>
  );
}
