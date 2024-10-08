'use client';

import { useToastStore } from '@/store';
import { Bell, Menu, SearchIcon, ShoppingCart, UserPen } from 'lucide-react';
import Image from 'next/image';
import Filter from '../icons/filter';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

export default function Header() {
  const showNotification = useToastStore((state) => state.showNotification);
  return (
    <header className="flex w-full items-center px-3 py-3 md:px-8 md:py-6">
      <div className="flex items-center gap-2 font-space-grotesk">
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
          className="w-full rounded-2xl bg-[#F2F2F2] px-12 py-2 font-open-sans text-gray"
        />
        <Filter />
        <SearchIcon
          className="absolute bottom-[10px] left-3 cursor-pointer text-gray"
          size={20}
        />
      </div>
      <div className="hidden gap-8 text-gray md:flex">
        <div className="relative">
          <Bell
            className="cursor-pointer"
            size={26}
            onClick={showNotification}
          />
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
              className="w-full rounded-md bg-[#F2F2F2] px-12 py-2 font-open-sans text-gray"
            />

            <SearchIcon
              className="absolute bottom-[10px] left-3 cursor-pointer text-gray"
              size={20}
            />
          </div>
          <div className="flex gap-8 text-gray">
            <Filter />
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
