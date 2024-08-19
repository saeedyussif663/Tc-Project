'use client';

import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from './Button';
import { FaRegEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import AgreeTerms from './AgreeTerms';
import { Inputs } from '@/CONSTANTS';

export default function SignupForm() {
  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { email, name, number, password } = data;

    console.log(data);
  };

  return (
    <form
      className="mt-1 flex w-full flex-col gap-3 px-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex w-full flex-col gap-5">
        <input
          type="text"
          placeholder="Full Name"
          className="input"
          {...register('name')}
        />
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

        <input
          type="text"
          placeholder="Phone Number"
          className="input"
          {...register('number')}
        />
      </div>

      <div>
        <div className="flex gap-1">
          <div className="h-1 w-1/4 rounded-md bg-black100 opacity-10">
            <span className="flex h-full w-0 rounded-md bg-green-500"></span>
          </div>
          <div className="h-1 w-1/4 rounded-md bg-black100 opacity-10">
            <span className="flex h-full w-0 rounded-md bg-green-500"></span>
          </div>
          <div className="h-1 w-1/4 rounded-md bg-black100 opacity-10">
            <span className="flex h-full w-0 rounded-md bg-green-500"></span>
          </div>
          <div className="h-1 w-1/4 rounded-md bg-black100 opacity-10">
            <span className="flex h-full w-0 rounded-md bg-green-500"></span>
          </div>
        </div>
        <p className="mt-2 text-xs text-black100 opacity-40">
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </p>
      </div>
      <AgreeTerms isChecked={isChecked} setIsChecked={setIsChecked} />

      <Button state={isChecked}> Sign Up</Button>

      <span className="mt-1 text-center text-sm text-black100 text-opacity-40">
        Already have an Account?{' '}
        <Link href="/signin" className="text-red-secondary">
          Sign in
        </Link>
      </span>
    </form>
  );
}
