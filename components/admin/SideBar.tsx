import Image from 'next/image';
import Accounttype from '../icons/accounttype';
import { dashboardLinks } from '@/CONSTANTS';
import { Separator } from '../ui/separator';
import NavLink from './NavLink';
import LogoutIcon from '../icons/logoutIcon';
import { Avatar, AvatarImage } from '../ui/avatar';

export default function SideBar() {
  return (
    <aside className="fixed hidden h-screen w-[250px] flex-col bg-white px-4 py-5 font-open-sans shadow-sm md:flex">
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
      <div className="mt-auto flex flex-col gap-3">
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
