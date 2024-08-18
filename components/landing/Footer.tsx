import Image from 'next/image';
import UsefulLinks from './UsefulLinks';
import { contactUs } from '@/CONSTANTS';
import ContactUs from './ContactUs';

export default function Footer() {
  return (
    <footer className="mx-auto mt-12 max-w-5xl px-4 py-2">
      <section className="flex flex-col gap-y-6 border-b border-red-secondary pb-8 md:flex-row">
        <article className="w-1/2">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={49} height={49} />
            <h4 className="font-space-grotesk text-xl font-bold">Tc Ticket</h4>
          </div>
          <p className="mt-2 w-48 font-sans-jarkata text-lg text-stormy-slate">
            Data visualization, and expense management for your business.
          </p>
        </article>
        <article className="flex items-baseline gap-4 font-sans-jarkata md:gap-12">
          {/* links */}
          <UsefulLinks />
          <ContactUs />
        </article>
      </section>
      <article className="mt-4 flex justify-between font-sans-jarkata">
        <div className="flex flex-col gap-2 text-lg font-semibold md:flex-row">
          <p>Privacy Policy</p>
          <p className="hidden md:block">|</p>
          <p>Terms & Conditions</p>
          <p className="hidden md:block">|</p>
          <p>Cookie Policy</p>
        </div>
        <p className="font-medium text-stormy-slate">© Tc Ticket 2024</p>
      </article>
    </footer>
  );
}
