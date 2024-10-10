'use client';

import Alert from '@/components/icons/alert';
import BuyTicket from '@/components/icons/buyTicket';
import CreateEvent from '@/components/icons/createEvent';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();
  return (
    <section className="mx-auto flex h-screen max-w-screen-xl flex-col px-4 pb-2 pt-4 md:justify-between">
      <div className="flex items-center gap-1 font-sans-jarkata">
        <Image alt="logo" src="/logo.png" width={49} height={49} />
        <h1 className="text-2xl font-bold text-red-secondary">Tc Ticket</h1>
      </div>
      <article className="mt-10 flex flex-col items-center self-center md:mt-0 md:w-[457px]">
        <div className="font-sans-jarkata">
          <h1 className="text-center text-2xl font-light md:text-4xl">
            Welcome to <span className="font-semibold">Tc Ticket</span>
          </h1>
          <p className="mt-5 text-center text-xl md:text-2xl">
            Elevating Events, One System at a Time.
          </p>
        </div>
        <div className="mt-10 font-open-sans">
          <div
            className="flex w-full cursor-pointer items-center gap-3 rounded-lg bg-[#F7F9FB] p-6 transition-all hover:border-2 hover:border-red-500 md:w-[384px]"
            onClick={() => router.replace('/signup')}
          >
            <BuyTicket />
            <div>
              <h5 className="font-semibold">Purchase a ticket</h5>
              <p className="mt-1 text-[#1C1C1C66]/40">
                Tap here to purchase a ticket
              </p>
            </div>
          </div>

          <div
            className="mt-6 flex w-full cursor-pointer items-center gap-3 rounded-lg bg-[#F7F9FB] p-6 transition-all hover:border-2 hover:border-red-500 md:w-[384px]"
            onClick={() => router.replace('/admin/signup')}
          >
            <CreateEvent />
            <div>
              <h5 className="font-semibold">Create an Event</h5>
              <p className="mt-1 text-[#1C1C1C66]/40">
                Tap here to create an Event
              </p>
            </div>
          </div>
        </div>
      </article>

      <div className="mt-10 flex items-center gap-4 self-center font-sans-jarkata md:mt-0">
        <Alert />
        <p className="text-gray">
          By authenticating you confirm that you’ve read and <br />
          accepting or{' '}
          <span className="font-semibold text-red-secondary">
            Terms and Services
          </span>{' '}
          and{' '}
          <span className="font-semibold text-red-secondary">
            Privacy Policy
          </span>
          .
        </p>
      </div>
    </section>
  );
}
