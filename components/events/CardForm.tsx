'use client';

import { useFormState, useFormStatus } from 'react-dom';
import Wechat from '../icons/wechat';
import { cardPayment } from '@/actions/paymentActions';

export default function CardForm() {
  const [state, formAction] = useFormState(cardPayment, { error: false });
  return (
    <form className="mt-4 flex flex-col gap-3" action={formAction}>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Name on card</label>
        <input
          type="text"
          className="form_input"
          placeholder="Meet Patel"
          name="name"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Card number</label>
        <input
          type="text"
          className="form_input"
          placeholder="0000 0000 0000 0000"
          name="number"
        />
      </div>

      <div className="relative flex flex-col gap-1">
        <label className="text-sm font-medium">Card expirstion</label>

        <input
          type="month"
          className="form_input bg-transparent md:bg-auto"
          name="expiration"
          value="2030-06"
          id="picker"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Card Security Code</label>
        <input
          type="text"
          className="form_input"
          placeholder="Code"
          name="code"
        />
      </div>
      <Button />
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="flex w-full items-center justify-center gap-2 rounded-md bg-red-secondary py-2 text-white"
    >
      <Wechat />
      {pending ? 'making payment' : 'Pay Now'}
    </button>
  );
}
