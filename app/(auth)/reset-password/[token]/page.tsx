'use client';

import { resetPasswordAction } from '@/actions/authActions';
import AgreeTerms from '@/components/auth/AgreeTerms';
import AuthHeader from '@/components/auth/AuthHeader';
import Button from '@/components/auth/Button';
import PasswordScore from '@/components/auth/PasswordScore';
import { passwordScorer } from 'password-scorer';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

interface InitialState {
  message: string;
  status?: false;
}

const initialState: InitialState = {
  message: '',
  status: false,
};

export default function page({ params }: { params: { token: string } }) {
  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const [confirmPasswordIsShowing, setConfirmPasswordIsShowing] =
    useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [password, setPassword] = useState<string>('');

  const [state, formAction] = useFormState(resetPasswordAction, initialState);

  useEffect(() => {
    const result = passwordScorer(password, 'en');
    setScore(result.score);
  }, [password]);

  return (
    <section className="flex h-screen w-full items-center justify-start font-open-sans md:my-auto md:h-[94%] md:w-1/2">
      <article className="flex h-full w-full flex-col items-center justify-center gap-5 md:w-[70%] md:justify-center">
        <AuthHeader
          title="Setup New Password"
          desc="Have you already reset the password ?"
        />
        <form action={formAction} className="flex w-full flex-col gap-5">
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
                Use 8 or more characters with a mix of letters, numbers &
                symbols.
              </p>
            </div>
          </div>
          {state.message && (
            <p className="text-sm text-red-secondary">{state.message}</p>
          )}
          <AgreeTerms isChecked={isChecked} setIsChecked={setIsChecked} />
          <Button state={isChecked} score={score}>
            Submit
          </Button>
        </form>
      </article>
    </section>
  );
}
