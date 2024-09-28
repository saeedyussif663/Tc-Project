'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { useToast } from '../ui/use-toast';

interface Inputs {
  email: string;
  password: string;
}

export default function SigninForm() {
  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();

  async function onSubmit(data: Inputs) {
    setIsSubmitting(true);
    const res = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (!res?.error) {
      router.push('/store');
      return;
    }

    setIsSubmitting(false);

    toast({
      description: res.error,
      variant: 'destructive',
      duration: 3000,
    });
  }

  return (
    <form
      className="mt-1 flex w-full flex-col gap-6 px-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="email"
        placeholder="Email"
        className="input"
        {...register('email')}
        autoComplete="off"
      />
      <div className="relative w-full">
        <input
          type={isPasswordShowing ? 'text' : 'password'}
          placeholder="Password"
          className="input w-full"
          {...register('password')}
          autoComplete="off"
        />
        {isPasswordShowing ? (
          <FaRegEyeSlash
            size={19}
            className="absolute bottom-2 right-4 cursor-pointer text-black100 text-opacity-40"
            onClick={() => setIsPasswordShowing((prev) => !prev)}
          />
        ) : (
          <IoEyeOutline
            size={19}
            className="absolute bottom-2 right-4 cursor-pointer text-black100 text-opacity-40"
            onClick={() => setIsPasswordShowing((prev) => !prev)}
          />
        )}
      </div>
      <Link
        href="/reset-password"
        className="self-end text-sm text-red-secondary"
      >
        Forgot Password?
      </Link>
      <button
        type="submit"
        className="w-full rounded-lg bg-black100 py-2 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Signing in' : 'Sign in'}
      </button>
      <span className="text-center text-black100 text-opacity-40">
        Not a Member yet?{' '}
        <Link href="/signup" className="text-sm text-red-secondary">
          Sign Up
        </Link>
      </span>
    </form>
  );
}
