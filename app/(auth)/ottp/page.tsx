'use client';

import AuthHeader from '@/components/auth/AuthHeader';
import Image from 'next/image';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { useEffect, useState } from 'react';
import { OttpButton } from '@/components/auth/Button';
import { getSession, sendOTTp } from '@/actions/authActions';
import { useRouter } from 'next/navigation';
import { resendOTTP } from '@/actions/authActions';
import { useFormState, useFormStatus } from 'react-dom';
import { useToast } from '@/components/ui/use-toast';

interface InitialState {
  message: string;
  status?: 'success' | 'failed' | '';
}

const initialState: InitialState = {
  message: '',
  status: '',
};

export default function Page() {
  const router = useRouter();
  const [value, setValue] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [state, formAction] = useFormState(sendOTTp, initialState);
  const [resendState, resendFormAction] = useFormState(
    resendOTTP,
    initialState,
  );
  const { toast } = useToast();

  async function checkSession() {
    const session = await getSession();

    if (session === null) {
      router.push('/signup');
      return;
    }
    setToken(session.token);
    setEmail(session.email);
  }

  useEffect(() => {
    checkSession();
  }, []);

  useEffect(() => {
    if (state.message) {
      toast({
        description: state.message,
        variant: 'destructive',
        duration: 3000,
      });
    }

    state.message = '';
  }, [state.message]);

  useEffect(() => {
    if (resendState.message) {
      toast({
        description: resendState.message,
        variant: resendState.status === 'success' ? 'success' : 'destructive',
        duration: 3000,
      });
    }

    resendState.message = '';
  }, [resendState.message]);

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

        <h4 className="font-semibold text-black100">{email}</h4>

        <p className="text-sm font-semibold text-black100">
          Type your 6 digit security code
        </p>

        <form
          action={formAction}
          className="flex w-full flex-col items-center justify-center gap-4"
        >
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
          <form action={resendFormAction}>
            <ResendButton />
          </form>
        </div>
      </article>
    </section>
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
