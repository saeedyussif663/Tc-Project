import { ReactNode } from 'react';

export default function Button({
  children,
  score,
  state,
}: {
  children: ReactNode;
  state?: boolean;
  score?: number;
}) {
  if (score != undefined && state != undefined) {
    return (
      <button
        disabled={state === false || score < 100}
        type="submit"
        className={`mt-1 w-full ${(state === false || score < 100) && 'cursor-not-allowed'} rounded-lg bg-black100 py-2 text-white`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type="submit"
      className="mt-1 w-full rounded-lg bg-black100 py-2 text-white"
    >
      {children}
    </button>
  );
}
