import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

export default function Button({
  children,
  score,
  state,
}: {
  children: ReactNode;
  state?: boolean;
  score?: number;
}) {
  const status = useFormStatus();

  if (score != undefined && state != undefined) {
    return (
      <button
        disabled={state === false || score < 100 || status.pending}
        type="submit"
        className={`mt-1 w-full ${(state === false || score < 100) && 'cursor-not-allowed'} rounded-lg bg-black100 py-2 text-white`}
      >
        {status.pending ? 'submitting' : `${children}`}
      </button>
    );
  }

  return (
    <button
      disabled={status.pending}
      type="submit"
      className="w-full rounded-lg bg-black100 py-2 text-white"
    >
      {status.pending ? 'submitting' : `${children}`}
    </button>
  );
}

export function SignupButton({
  children,
  score,
  state,
}: {
  children: ReactNode;
  state: boolean;
  score: number;
}) {
  const status = useFormStatus();
  return (
    <button
      disabled={state === false || score < 100 || status.pending}
      type="submit"
      className={`mt-1 w-full ${(state === false || score < 100) && 'cursor-not-allowed'} rounded-lg bg-black100 py-2 text-white`}
    >
      {status.pending ? 'submitting' : `${children}`}
    </button>
  );
}

export function OttpButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="mt-1 w-full rounded-lg bg-black100 py-2 text-white"
    >
      {pending ? 'Submitting' : 'Submit'}
    </button>
  );
}
