import { ChevronDown, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import Link from 'next/link';

export default function MobileNav() {
  return (
    <div className="mt-2 md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu size={30} />
        </SheetTrigger>
        <SheetContent>
          <nav className="mt-3 font-sans-jarkata text-lg font-medium">
            <ul className="flex flex-col gap-6">
              <li>
                <Link href="#">
                  Products
                  <ChevronDown className="ml-[3px] inline" size={18} />
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
          <div className="mt-4 flex flex-col gap-5 font-sans-jarkata">
            <Link href="/login" className="text-lg font-medium">
              Login
            </Link>
            <Link
              href="/sign-up"
              className="rounded-lg bg-red-secondary px-6 py-3 font-semibold text-white"
            >
              Sing up
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
