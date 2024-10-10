'use client';

import AuthHeader from '@/components/auth/AuthHeader';
import { OttpButton } from '@/components/auth/Button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import Image from 'next/image';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

export default function page() {
  const [value, setValue] = useState<string>('');
  return (
    <div className="mx-auto -mt-16 flex w-[98%] flex-col items-center self-center font-open-sans md:-mt-0 md:w-[680px]">
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

        <h4 className="font-semibold text-black100">email</h4>

        <p className="text-sm font-semibold text-black100">
          Type your 6 digit security code
        </p>

        <form className="flex w-full flex-col items-center justify-center gap-4">
          <input className="hidden" name="value" defaultValue={value} />
          <InputOTP
            maxLength={6}
            value={value}
            onChange={(value: string) => setValue(value)}
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
        </form>
        <div className="flex gap-2 text-black100 text-opacity-40">
          Didn&apos;t get the code ?{' '}
          <form>
            <ResendButton />
          </form>
        </div>
      </article>
    </div>
  );
}

function ResendButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit" className="text-red-secondary">
      {pending ? 'Resending' : 'Resend'}
    </button>
  );
}
