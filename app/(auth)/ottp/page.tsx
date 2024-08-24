'use client';

import AuthHeader from '@/components/auth/AuthHeader';
import Image from 'next/image';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { useEffect, useState } from 'react';
import Button, { OttpButton } from '@/components/auth/Button';
import { getSession, sendOTTp } from '@/actions/authActions';
import { useRouter } from 'next/navigation';
import { resendOTTP } from '@/actions/authActions';
import { useFormState } from 'react-dom';

const initialState = {
  message: '',
};

export default function Page() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [number, setNumber] = useState('');
  const [token, setToken] = useState('');

  const [state, formAction] = useFormState(sendOTTp, initialState);

  async function checkSession() {
    const session = await getSession();

    if (session === null) {
      router.push('/signup');
      return;
    }
    setToken(session.token);
    setNumber(session.phone_number);
  }

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <section className="flex h-screen w-full items-center justify-start font-open-sans md:my-auto md:h-[94%] md:w-1/2">
      <article className="flex h-full w-full flex-col items-center justify-center gap-5 md:w-[70%] md:justify-center">
        <Image
          src="/images/DeviceMobile.png"
          alt="mobile-device"
          width={80}
          height={80}
        />
        <AuthHeader
          title="Two Step Verification"
          desc="Enter the verification code we sent to"
        />

        <h4 className="text-lg font-semibold text-black100">{number}</h4>

        <p className="text-sm font-semibold text-black100">
          Type your 4 digit security code
        </p>

        <form
          action={formAction}
          className="flex w-full flex-col items-center justify-center gap-4"
        >
          <input className="hidden" name="value" value={value} />
          <InputOTP
            maxLength={6}
            value={value}
            onChange={(value) => setValue(value)}
          >
            <InputOTPGroup className="gap-4">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <OttpButton />
          {state.message && (
            <p className="self-start text-sm text-red-secondary">
              {state.message}
            </p>
          )}
        </form>
        <div className="flex gap-2 text-black100 text-opacity-40">
          Didn&apos;t get the code ?{' '}
          <form action={resendOTTP}>
            <button type="submit" className="text-red-secondary">
              Resend
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}
