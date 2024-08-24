'use client';

import { forgotPasswordAction } from '@/actions';
import AuthHeader from '@/components/auth/AuthHeader';
import Button from '@/components/auth/Button';
import BackButton from '@/components/ui/backButton';
import { useFormState } from 'react-dom';

interface InitialState {
  message: string;
  status?: boolean;
}

const initialState: InitialState = {
  message: '',
  status: false,
};

export default function page() {
  const [state, formAction] = useFormState(forgotPasswordAction, initialState);
  return (
    <section className="flex h-auto w-full items-center justify-start font-open-sans md:my-auto md:h-[94%] md:w-1/2">
      <article className="flex h-full w-full flex-col items-center justify-start gap-5 pt-32 md:w-[70%] md:justify-center md:pt-0">
        <AuthHeader
          title="Forgot Password ?"
          desc="Enter your email to reset your password."
        />
        <form action={formAction} className="flex w-full flex-col gap-4 px-4">
          <input
            type="email"
            placeholder="Please enter your email address"
            className="input py-2"
            name="email"
            required
          />
          {state.message && (
            <p
              className={`${state.status ? 'text-green-500' : 'text-red-500'}`}
            >
              {state.message}
            </p>
          )}
          <Button>Submit</Button>
        </form>
        <BackButton />
      </article>
    </section>
  );
}
