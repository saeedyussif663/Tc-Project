import { ReactNode } from 'react';

export default function Button({
  children,
  state,
}: {
  children: ReactNode;
  state: boolean;
}) {
  return (
    <button
      disabled={!state}
      type="submit"
      className={`mt-1 bg-black100 ${!state && 'cursor-not-allowed'} rounded-lg py-2 text-white`}
    >
      {children}
    </button>
  );
}
