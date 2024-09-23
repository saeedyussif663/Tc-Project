'use client';

import { useToastStore } from '@/store';
import { X } from 'lucide-react';
import MessageIcon from '../icons/message';

export default function NotificationToast() {
  const isNotificationShowing = useToastStore(
    (state) => state.isNotificationShowing,
  );
  const removeNotification = useToastStore((state) => state.removeNotification);
  return (
    <div
      className={`shadow-custom ${isNotificationShowing ? 'translate-y-0' : '-translate-y-40'} transition-all duration-500 absolute right-5 gap-4 top-4 items-center z-[1000] flex h-[128px] p-2 w-[320px]  rounded-md bg-white font-sans-jarkata sm:w-[382px]`}
    >
      <MessageIcon />
      <div className="relative">
        <div className="font-semibold">
          <p className="text-black100/50">app name • now</p>
          <h3 className="mt-1">New notification</h3>
        </div>
        <p className="text-black/50 text-[12px] mt-[2px]">
          Do ullamco ex velit anim do proident exercitation et anim tempor.
          Lorem sunt deserunt labore non excepteur veniam enim quis officia
          magna anim...
        </p>
        <X
          className="absolute right-1 top-1 cursor-pointer"
          onClick={removeNotification}
        />
      </div>
    </div>
  );
}
