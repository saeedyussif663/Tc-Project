'use client';

import AuthHeader from '@/components/auth/AuthHeader';
import Button from '@/components/auth/Button';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Inputs {
  email: string;
}

export default function page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <section className="flex h-auto w-full items-center justify-start font-open-sans md:my-auto md:h-[94%] md:w-1/2">
      <article className="flex h-full w-full flex-col items-center justify-start gap-5 pt-32 md:w-[70%] md:justify-center md:pt-0">
        <AuthHeader
          title="Forgot Password ?"
          desc="Enter your email to reset your password."
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4 px-4"
        >
          <input
            type="email"
            placeholder="Please enter your email address"
            className="input mb-2 py-2"
            {...register('email')}
          />
          <Button>Submit</Button>
        </form>
        <button
          className="text-sm text-red-secondary"
          onClick={() => router.back()}
        >
          Back
        </button>
      </article>
    </section>
  );
}
