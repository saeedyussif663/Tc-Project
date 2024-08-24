'use client';

import AgreeTerms from '@/components/auth/AgreeTerms';
import AuthHeader from '@/components/auth/AuthHeader';
import Button from '@/components/auth/Button';
import PasswordScore from '@/components/auth/PasswordScore';
import { passwordScorer } from 'password-scorer';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

interface Inputs {
  password: string;
  cPassword: string;
}

export default function page() {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);
  const [confirmPasswordIsShowing, setConfirmPasswordIsShowing] =
    useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [score, setScore] = useState(0);
  const [password, setPassword] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const result = passwordScorer(password, 'en');
    setScore(result.score);
  }, [password]);

  return (
    <section className="flex h-auto w-full items-center justify-start font-open-sans md:my-auto md:h-[94%] md:w-1/2">
      <article className="flex h-full w-full flex-col items-center justify-start gap-5 pt-20 md:w-[70%] md:justify-center md:pt-0">
        <AuthHeader
          title="Setup New Password"
          desc="Have you already reset the password ?"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-5"
        >
          <div className="w-full">
            <div className="relative">
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

            <div className="mt-4">
              <PasswordScore score={score} />
              <p className="mt-2 text-xs text-black100 opacity-40">
                Use 8 or more characters with a mix of letters, numbers &
                symbols.
              </p>
            </div>
          </div>
          <div className="relative w-full">
            <input
              type={confirmPasswordIsShowing ? 'text' : 'password'}
              placeholder="Repeat Password"
              className="input w-full"
              {...register('cPassword')}
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
          <AgreeTerms isChecked={isChecked} setIsChecked={setIsChecked} />
          <Button state={isChecked} score={score}>
            Submit
          </Button>
        </form>
      </article>
    </section>
  );
}
