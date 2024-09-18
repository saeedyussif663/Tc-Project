'use client';
import { useToastStore } from '@/store';
import { X } from 'lucide-react';
import ErrorIcon from '../icons/error';
import SuccessIcon from '../icons/success';

export default function PaymentToast() {
  const isShowing = useToastStore((state) => state.isShowing);
  const removeToast = useToastStore((state) => state.removeToast);

  const type = 'error';
  if (type === 'error') {
    return (
      <div
        className={`shadow-custom ${isShowing ? 'translate-y-0' : '-translate-y-40'} duration-500 transition-all absolute right-5 top-4 z-[1000] flex h-[128px] w-[320px] gap-4 rounded-md bg-white font-sans-jarkata sm:w-[382px]`}
      >
        <div className="flex h-full w-[48px] items-center justify-center rounded-s-lg bg-[#FFDCE4]">
          <ErrorIcon />
        </div>
        <div className="relative flex w-[262px] flex-col justify-center text-sm">
          <h5 className="font-semibold">It’s awkward 😅</h5>
          <p className="mt-1 font-medium">
            We were unable to process payment for your payment
          </p>
          <span className="mt-2 font-semibold text-red-secondary">
            Change Payment Method
          </span>
          <X
            className="absolute right-3 top-4 cursor-pointer sm:-right-8"
            onClick={removeToast}
          />
        </div>
      </div>
    );
  }

  if (type === 'success') {
    return (
      <div className="shadow-custom absolute right-5 top-4 z-[1000] flex h-[128px] w-[320px] gap-4 rounded-md bg-white font-sans-jarkata sm:w-[382px]">
        <div className="flex h-full w-[48px] items-center justify-center rounded-s-lg bg-[#FFDCE4]">
          <SuccessIcon />
        </div>
        <div className="relative flex w-[262px] flex-col justify-center text-sm">
          <h5 className="font-semibold">Payment Successful</h5>
          <p className="mt-1 font-medium">Server is now working again.</p>
          <span className="mt-2 font-semibold text-red-secondary">
            View Invoice
          </span>
          <X
            className="absolute right-3 top-4 cursor-pointer sm:-right-8"
            onClick={removeToast}
          />
        </div>
      </div>
    );
  }
}
