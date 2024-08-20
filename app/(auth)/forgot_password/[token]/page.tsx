'use client';

import AuthHeader from '@/components/auth/AuthHeader';
import Image from 'next/image';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { useState } from 'react';
import Button from '@/components/auth/Button';

export default function page() {
  const [value, setValue] = useState('');
  return (
    <section className="flex h-auto w-full items-center justify-start font-open-sans md:my-auto md:h-[94%] md:w-1/2">
      <article className="flex h-full w-full flex-col items-center justify-start gap-5 pt-20 md:w-[70%] md:justify-center md:pt-0">
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

        <h4 className="text-lg font-semibold text-black100">+852 19850622</h4>

        <p className="text-sm font-semibold text-black100">
          Type your 4 digit security code
        </p>

        <form className="flex w-full flex-col items-center justify-center gap-4">
          <InputOTP
            maxLength={4}
            value={value}
            onChange={(value) => setValue(value)}
          >
            <InputOTPGroup className="gap-4">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
          <Button state={true}>Submit</Button>
          <p className="text-black100 text-opacity-40">
            Didn&apos;t get the code ?{' '}
            <span className="text-red-secondary">Resend</span> or{' '}
            <span className="text-red-secondary">Call Us</span>{' '}
          </p>
        </form>
      </article>
    </section>
  );
}
