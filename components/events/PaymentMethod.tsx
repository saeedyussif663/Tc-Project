'use client';

import { PaymentTypes } from '@/CONSTANTS';

interface Props {
  method: PaymentTypes;
  paymentType: PaymentTypes;
  setPaymentType: React.Dispatch<React.SetStateAction<PaymentTypes>>;
}

export default function PaymentMethod({
  method,
  paymentType,
  setPaymentType,
}: Props) {
  return (
    <div
      className="flex w-fit cursor-pointer items-center gap-3"
      onClick={() => setPaymentType(method)}
    >
      <div
        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${method === paymentType ? 'border-red-secondary' : 'border-gray'} `}
      >
        <span
          className={`mt-[.3px] h-4/5 w-4/5 rounded-full ${method === paymentType ? 'bg-red-secondary' : 'h-0 w-0'} `}
        ></span>
      </div>
      <p className="text-sm font-medium">{method}</p>
    </div>
  );
}
