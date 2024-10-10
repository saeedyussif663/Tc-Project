'use client';

import AgreeTerms from '@/components/auth/AgreeTerms';
import AuthHeader from '@/components/auth/AuthHeader';
import Button from '@/components/auth/Button';
import PasswordScore from '@/components/auth/PasswordScore';
import { useState } from 'react';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

export default function page({ params }: { params: { token: string } }) {
  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const [confirmPasswordIsShowing, setConfirmPasswordIsShowing] =
    useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [password, setPassword] = useState<string>('');
  return (
    <section className="mx-auto -mt-16 flex w-[98%] flex-col items-center self-center font-open-sans md:-mt-0 md:w-[680px]">
      <AuthHeader
        title="Setup New Password"
        desc="Have you already reset the password ?"
      />
      <form className="mt-6 flex w-[348px] flex-col gap-5 px-2">
        <div className="relative w-full">
          <input
            type={isPasswordShowing ? 'text' : 'password'}
            placeholder="Password"
            className="input w-full"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="hidden" name="token" value={params.token} />
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
        <div className="w-full">
          <div className="relative">
            <input
              type={confirmPasswordIsShowing ? 'text' : 'password'}
              placeholder="Repeat password"
              className="input w-full"
              name="cPassword"
            />
            {confirmPasswordIsShowing ? (
              <FaRegEyeSlash
                size={19}
                className="absolute bottom-2 right-4 cursor-pointer text-black100 text-opacity-40"
                onClick={() => setConfirmPasswordIsShowing((prev) => !prev)}
              />
            ) : (
              <IoEyeOutline
                size={19}
                className="absolute bottom-2 right-4 cursor-pointer text-black100 text-opacity-40"
                onClick={() => setConfirmPasswordIsShowing((prev) => !prev)}
              />
            )}
          </div>

          <div className="mt-4">
            <PasswordScore score={score} />
            <p className="mt-2 text-xs text-black100 opacity-40">
              Use 8 or more characters with a mix of letters, numbers & symbols.
            </p>
          </div>
        </div>

        <AgreeTerms isChecked={isChecked} setIsChecked={setIsChecked} />
        <Button state={isChecked} score={score}>
          Submit
        </Button>
      </form>
    </section>
  );
}
