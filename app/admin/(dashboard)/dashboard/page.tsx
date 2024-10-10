import Greetings from '@/components/admin/Greetings';
import Checkmark from '@/components/icons/checkmark';
import { Copy } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <section className="mt-16 px-4 py-4 md:mt-0 md:px-8">
      <Greetings />
      <main className="mt-8 flex flex-col items-center gap-6 font-open-sans md:flex-row">
        <article className="flex h-[220px] w-[240px] flex-col justify-between rounded-lg border-[0.5px] border-gray p-4">
          <div className="flex items-center justify-between">
            <h5 className="text-xs font-semibold">Setup your site</h5>
            <Checkmark />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative h-[28px] w-full rounded-lg bg-[#F2F2F2]">
              <Copy
                size={12}
                className="absolute right-3 top-2.5 cursor-pointer"
              />
            </div>
            <Link
              href="/admin/profile"
              className="w-fit rounded-md bg-red-secondary px-4 py-1 text-xs text-white"
            >
              View Site
            </Link>
          </div>
        </article>
        <article className="flex h-[220px] w-[240px] flex-col justify-between rounded-lg border-[0.5px] border-gray p-4">
          <h5 className="text-xs font-semibold">Connect Payment Method</h5>
          <Link
            href=""
            className="w-fit rounded-md bg-[#53E03C] px-4 py-1 text-xs text-white"
          >
            Set up Payement Gateway
          </Link>
        </article>
        <article className="flex h-[220px] w-[240px] flex-col justify-between rounded-lg border-[0.5px] border-gray p-4">
          <div className="flex items-center justify-between">
            <h5 className="text-xs font-semibold">
              Let’s build your first event!
            </h5>
            <Checkmark />
          </div>
          <Link
            href="/admin/create-event"
            className="w-fit rounded-md bg-[#53E03C] px-4 py-1 text-xs text-white"
          >
            Create an Event
          </Link>
        </article>
      </main>
    </section>
  );
}
