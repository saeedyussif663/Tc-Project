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
      className={`shadow-custom ${isNotificationShowing ? 'translate-y-0' : '-translate-y-40'} absolute right-5 top-4 z-[1000] flex h-[128px] w-[320px] items-center gap-4 rounded-md bg-white p-2 font-sans-jarkata transition-all duration-500 sm:w-[382px]`}
    >
      <MessageIcon />
      <div className="relative">
        <div className="font-semibold">
          <p className="text-black100/50">app name • now</p>
          <h3 className="mt-1">New notification</h3>
        </div>
        <p className="mt-[2px] text-[12px] text-black/50">
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
