'use client';

import AuthHeader from '@/components/auth/AuthHeader';
import Link from 'next/link';
import { useState } from 'react';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import 'react-phone-number-input/style.css';

export default function page() {
  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [password, setPassword] = useState('');
  const [score, setScore] = useState(0);
  const [value, setValue] = useState<string | undefined>('');

  return (
    <section className="mx-auto -mt-16 flex w-[98%] flex-col items-center self-center font-open-sans md:-mt-0 md:w-[680px]">
      <AuthHeader title="Sign In" desc="Your Social Campaigns" />

      <form className="mt-6 flex w-[348px] flex-col gap-3 px-2">
        <div className="flex w-full flex-col gap-6 md:gap-5">
          <input
            type="email"
            placeholder="Email"
            className="input"
            name="email"
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
          <Link
            href="/admin/reset-password"
            className="self-end text-red-secondary"
          >
            Forgot Password?
          </Link>
        </div>

        <Button />
      </form>

      <p className="mt-6">
        Not a Member yet? {''}
        <Link href="/admin/signup" className="text-red-secondary">
          Sign Up
        </Link>
      </p>
    </section>
  );
}

function Button() {
  return (
    <button className="mt-2 rounded-lg bg-black py-1.5 text-white">
      Sign In
    </button>
  );
}
