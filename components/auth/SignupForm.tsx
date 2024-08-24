'use client';

import Link from 'next/link';
import { FaRegEyeSlash } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import AgreeTerms from './AgreeTerms';
import { passwordScorer } from 'password-scorer';
import PasswordScore from './PasswordScore';
import { useRouter } from 'next/navigation';
import { createUserAction } from '@/actions';
import Button from './Button';
import { useFormState } from 'react-dom';
import { SignupButton } from './Button';

const initialState = {
  message: '',
};

export default function SignupForm() {
  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(0);

  const [state, formAction] = useFormState(createUserAction, initialState);

  const router = useRouter();

  useEffect(() => {
    const result = passwordScorer(password, 'en');
    setScore(result.score);
  }, [password]);

  return (
    <form action={formAction} className="mt-1 flex w-full flex-col gap-3 px-2">
      <div className="flex w-full flex-col gap-6 md:gap-5">
        <input
          type="text"
          placeholder="Full Name"
          className="input"
          name="name"
          required
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="Email"
          className="input"
          name="email"
          required
          autoComplete="off"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="input"
          name="phone_number"
          required
          autoComplete="off"
        />

        <div className="relative w-full">
          <input
            type={isPasswordShowing ? 'text' : 'password'}
            placeholder="Password"
            className="input w-full"
            name="password"
            required
            autoComplete="off"
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
      </div>

      <div>
        <PasswordScore score={score} />
        <p className="mt-2 text-xs text-black100 opacity-40">
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </p>
        {state?.message && (
          <p className="mt-4 text-sm text-red-secondary">{state.message}</p>
        )}
      </div>
      <AgreeTerms isChecked={isChecked} setIsChecked={setIsChecked} />

      <SignupButton state={isChecked} score={score}>
        Sign Up
      </SignupButton>

      <span className="mt-1 text-center text-sm text-black100 text-opacity-40">
        Already have an Account?{' '}
        <Link href="/signin" className="text-red-secondary">
          Sign in
        </Link>
      </span>
    </form>
  );
}
