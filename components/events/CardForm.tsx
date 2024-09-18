'use client';

import { cardPayment } from '@/actions/paymentActions';
import { useToastStore } from '@/store';
import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Wechat from '../icons/wechat';

interface InitialState {
  err: any;
}

const initialState: InitialState = {
  err: null,
};

export default function CardForm() {
  const [state, formAction] = useFormState(cardPayment, initialState);
  const [expiry, setExpiry] = useState('2030-06');
  const showToast = useToastStore((state) => state.showToast);
  const removeToast = useToastStore((state) => state.removeToast);

  useEffect(() => {
    if (state.err === true) {
      showToast();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      setTimeout(removeToast, 1200);
    }

    if (state.err === false) {
      showToast();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      setTimeout(removeToast, 1200);
    }

    state.err = null;
  }, [state]);

  return (
    <form className="mt-4 flex flex-col gap-3" action={formAction}>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Name on card</label>
        <input
          type="text"
          className="form_input"
          placeholder="Meet Patel"
          name="name"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Card number</label>
        <input
          type="number"
          className="form_input"
          placeholder="0000 0000 0000 0000"
          name="number"
          required
        />
      </div>

      <div className="relative flex flex-col gap-1">
        <label className="text-sm font-medium">Card expirstion</label>

        <input
          type="month"
          className="form_input bg-transparent md:bg-auto"
          name="expiration"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          id="picker"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Card Security Code</label>
        <input
          type="text"
          className="form_input"
          placeholder="Code"
          name="code"
          required
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
