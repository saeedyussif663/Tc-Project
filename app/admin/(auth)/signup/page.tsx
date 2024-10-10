'use client';

import AgreeTerms from '@/components/auth/AgreeTerms';
import AuthHeader from '@/components/auth/AuthHeader';
import PasswordScore from '@/components/auth/PasswordScore';
import Link from 'next/link';
import { passwordScorer } from 'password-scorer';
import { useEffect, useState } from 'react';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function page() {
  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(0);
  const [value, setValue] = useState<string | undefined>('');

  useEffect(() => {
    const result = passwordScorer(password, 'en');
    setScore(result.score);
  }, [password]);

  return (
    <section className="mx-auto -mt-16 flex w-[98%] flex-col items-center self-center font-open-sans md:-mt-0 md:w-[680px]">
      <AuthHeader title="Sign Up" desc="Your Social Campaigns" />

      <form className="mt-6 flex w-[348px] flex-col gap-3 px-2">
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

          <PhoneInput
            placeholder="Enter phone number"
            defaultCountry="GH"
            value={value}
            onChange={setValue}
            className="input"
          />

          <input
            type="text"
            className="hidden"
            name="phone_number"
            defaultValue={value}
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
        </div>

        <AgreeTerms isChecked={isChecked} setIsChecked={setIsChecked} />

        <Button state={isChecked} score={score} />
      </form>

      <p className="mt-6">
        Already have an Account?{' '}
        <Link href="/admin/signin" className="text-red-secondary">
          Sign in
        </Link>
      </p>
    </section>
  );
}

function Button({ state, score }: { state: boolean; score: number }) {
  return (
    <button
      className="mt-2 rounded-lg bg-black py-1.5 text-white"
      disabled={score !== 100 || state}
    >
      Sign up
    </button>
  );
}
