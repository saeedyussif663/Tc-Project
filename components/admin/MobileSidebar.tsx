'use client';
import { useSidebarStore } from '@/store';
import Image from 'next/image';
import Accounttype from '../icons/accounttype';
import { dashboardLinks } from '@/CONSTANTS';
import NavLink from './NavLink';
import { Avatar } from '../ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import LogoutIcon from '../icons/logoutIcon';

export default function MobileSidbebar() {
  const isSidebarShowing = useSidebarStore((state) => state.isSidebarShowing);
  return (
    <aside
      className={`flex w-[250px] flex-col bg-white shadow-sm md:hidden ${isSidebarShowing ? 'translate-x-0' : '-translate-x-[100%]'} fixed z-30 flex h-screen px-4 py-5 font-open-sans transition-all duration-500`}
    >
      <div className="flex flex-col items-center">
        <div className="-ml-1 -mt-3 flex h-[50px] items-center self-start">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="h-[50px]"
          />
          <h1 className="text-lg font-bold text-red-secondary">Tc Ticket</h1>
        </div>
        <div className="-ml-14 mt-1 flex items-center gap-4">
          <Accounttype />
          <div>
            <h5 className="text-gray">Account</h5>
            <p>Event Admin</p>
          </div>
        </div>
      </div>
      <div className="ml-2 mt-4 flex flex-col gap-4">
        {dashboardLinks.map((link, index) => (
          <NavLink key={index} name={link.name} icon={link.icon} />
        ))}
      </div>
      <div className="mt-auto flex flex-col gap-3 border border-red-secondary">
        <div className="flex items-center gap-3">
          <Avatar className="size-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <p className="text-wrap text-sm">serlomcecil@gmail.com</p>
        </div>
        <div className="flex cursor-pointer items-center gap-3">
          <LogoutIcon /> <p>Log Out</p>
        </div>
      </div>
    </aside>
  );
}
