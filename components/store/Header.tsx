import {
  Bell,
  Icon,
  ListFilter,
  Menu,
  SearchIcon,
  ShoppingCart,
  UserPen,
} from 'lucide-react';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

export default function Header() {
  return (
    <header className="flex w-full items-center px-3 py-4 md:px-8">
      <div className="flex gap-2 font-space-grotesk">
        <Image
          src="/images/other-logo.png"
          alt="Logo"
          width={33}
          height={28}
          style={{ width: 'auto', height: 'auto' }}
        />
        <h1 className="text-2xl font-bold text-red-secondary">Tc Ticket</h1>
      </div>
      <div className="relative mx-auto hidden w-[500px] items-center gap-4 md:flex">
        <input
          type="text"
          name="search"
          placeholder="Search events"
          className="text-gray w-full rounded-2xl bg-[#F2F2F2] px-12 py-2 font-open-sans"
        />
        <ListFilter className="text-gray cursor-pointer" size={30} />
        <SearchIcon
          className="text-gray absolute bottom-[10px] left-3 cursor-pointer"
          size={20}
        />
      </div>
      <div className="text-gray hidden gap-8 md:flex">
        <div className="relative">
          <Bell className="cursor-pointer" size={26} />
          <span className="absolute bottom-3 left-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#ED3737] text-white">
            3
          </span>
        </div>
        <ShoppingCart className="cursor-pointer" size={26} />
        <UserPen className="cursor-pointer" size={26} />
      </div>

      {/* small screen nav */}
      <Sheet>
        <SheetTrigger className="ml-auto md:hidden">
          <Menu size={26} className="text-gray" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6">
          <div className="relative mx-auto flex w-full items-center gap-4 pt-4">
            <input
              type="text"
              name="search"
              placeholder="Search events"
              className="text-gray w-full rounded-2xl bg-[#F2F2F2] px-12 py-2 font-open-sans"
            />

            <SearchIcon
              className="text-gray absolute bottom-[10px] left-3 cursor-pointer"
              size={20}
            />
          </div>
          <div className="text-gray flex gap-8">
            <ListFilter className="cursor-pointer" size={26} />
            <div className="relative">
              <Bell className="cursor-pointer" size={26} />
              <span className="absolute bottom-3 left-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#ED3737] text-white">
                3
              </span>
            </div>
            <ShoppingCart className="cursor-pointer" size={26} />
            <UserPen className="cursor-pointer" size={26} />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
