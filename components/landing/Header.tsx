import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobilNav';

export default function Header() {
  return (
    <header className="mt-1 flex h-20 items-center justify-between pl-1 pr-5 sm:h-24 sm:px-8">
      <Link href="/" className="flex items-center font-space-grotesk">
        <Image
          src="/logo.png"
          alt="logo"
          className="-ml-4 hidden sm:block"
          width={49}
          height={49}
        />
        <Image
          src="/logo.png"
          alt="logo"
          className="block sm:hidden"
          width={40}
          height={40}
        />
        <span className="-ml-1 text-xl font-bold text-red-secondary sm:text-2xl">
          Tc Ticket
        </span>
      </Link>
      {/* large nav */}
      <nav className="hidden font-sans-jarkata text-lg font-medium md:block">
        <ul className="flex gap-6">
          <li>
            <Link href="#">
              Products
              <ChevronDown className="ml-[2px] inline" size={18} />
            </Link>
          </li>
          <li>
            <Link href="#">Visual Event</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
        </ul>
      </nav>
      <div className="hidden items-center gap-5 font-sans-jarkata md:flex">
        <Link href="/signin" className="text-lg font-medium">
          Login
        </Link>
        <Link
          href="/signup"
          className="rounded-lg bg-red-secondary px-6 py-3 font-semibold text-white"
        >
          Sign up
        </Link>
      </div>
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
}
