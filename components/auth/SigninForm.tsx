'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import Button from './Button';

interface Inputs {
  email: string;
  password: string;
}

export default function SigninForm() {
  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

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
      />
      <div className="relative w-full">
        <input
          type={isPasswordShowing ? 'text' : 'password'}
          placeholder="Password"
          className="input w-full"
          {...register('password')}
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
        href="/forgot_password"
        className="self-end text-sm text-red-secondary"
      >
        Forgot Password?
      </Link>
      <Button>Sign In</Button>
      <span className="text-center text-black100 text-opacity-40">
        Not a Member yet?{' '}
        <Link href="/signup" className="text-sm text-red-secondary">
          Sign Up
        </Link>
      </span>
    </form>
  );
}
