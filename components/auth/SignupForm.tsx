'use client';

import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from './Button';
import { FaRegEyeSlash } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import AgreeTerms from './AgreeTerms';
import { Inputs } from '@/CONSTANTS';
import { passwordScorer } from 'password-scorer';
import PasswordScore from './PasswordScore';

export default function SignupForm() {
  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { email, name, number, password } = data;

    console.log(data);
  };

  useEffect(() => {
    const result = passwordScorer(password, 'en');
    setScore(result.score);
  }, [password]);

  return (
    <form
      className="mt-1 flex w-full flex-col gap-3 px-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex w-full flex-col gap-6 md:gap-5">
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <PasswordScore score={score} />
        <p className="mt-2 text-xs text-black100 opacity-40">
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </p>
      </div>
      <AgreeTerms isChecked={isChecked} setIsChecked={setIsChecked} />

      <Button state={isChecked} score={score}>
        {' '}
        Sign Up
      </Button>

      <span className="mt-1 text-center text-sm text-black100 text-opacity-40">
        Already have an Account?{' '}
        <Link href="/signin" className="text-red-secondary">
          Sign in
        </Link>
      </span>
    </form>
  );
}
